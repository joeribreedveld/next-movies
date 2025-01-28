import { auth } from "@/auth";
import { Pool } from "@neondatabase/serverless";
import { revalidateTag } from "next/cache";

const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";
const HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
};

export async function getMovies() {
  try {
    const response = await fetch(`${TMDB_API_BASE_URL}/discover/movie`, {
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const { results } = await response.json();

    if (!results || !Array.isArray(results)) return [];

    return results;
  } catch (error) {
    console.error("Error in getMovies:", error);
    return [];
  }
}

export async function getMovie(id: number) {
  try {
    const response = await fetch(`${TMDB_API_BASE_URL}/movie/${id}`, {
      headers: HEADERS,
    });

    if (!response.ok)
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}:`, error);
    return null;
  }
}

export async function getBookmarkMovies() {
  const session = await auth();
  const userId = session?.user?.id;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmarks/${userId}`,
      {
        method: "GET",
        next: {
          tags: ["bookmarks"],
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch bookmarks: ${response.statusText}`);
    }

    const bookmarks = await response.json();

    if (!Array.isArray(bookmarks)) return [];

    const moviePromises = bookmarks.map((bookmark) =>
      getMovie(bookmark.movieId),
    );

    const movies = await Promise.all(moviePromises);

    return movies.filter((movie) => movie !== null);
  } catch (error) {
    console.error(
      `Error fetching bookmark movies for user ID ${userId}:`,
      error,
    );

    return [];
  }
}

export async function getBookmarks() {
  const session = await auth();
  const userId = session?.user?.id;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmarks/${userId}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch bookmarks: ${response.statusText}`);
    }

    const bookmarks = await response.json();

    if (!Array.isArray(bookmarks)) return [];

    return bookmarks;
  } catch (error) {
    console.error(`Error fetching bookmarks for user ID ${userId}:`, error);

    return [];
  }
}

export async function toggleBookmark(movieId: number) {
  const session = await auth();
  const userId = session?.user?.id;

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  if (!userId) {
    console.warn("User not logged in. Cannot toggle bookmark.");

    return null;
  }

  try {
    const { rows: existingBookmarks } = await pool.query(
      'SELECT id FROM bookmarks WHERE "userId" = $1 AND "movieId" = $2',
      [userId, movieId],
    );

    if (existingBookmarks.length > 0) {
      await pool.query(
        'DELETE FROM bookmarks WHERE "userId" = $1 AND "movieId" = $2',
        [userId, movieId],
      );

      revalidateTag("bookmark");

      return { status: "removed", movieId };
    } else {
      await pool.query(
        'INSERT INTO bookmarks ("userId", "movieId") VALUES ($1, $2)',
        [userId, movieId],
      );

      revalidateTag("bookmark");

      return { status: "added", movieId };
    }
  } catch (error) {
    console.error("Error toggling bookmark:", error);

    return null;
  }
}
