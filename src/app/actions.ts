const API_BASE_URL = "https://api.themoviedb.org/3";
const HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
};

export async function getMovies() {
  try {
    const response = await fetch(`${API_BASE_URL}/discover/movie`, {
      headers: HEADERS,
    });

    if (!response.ok)
      throw new Error(`Failed to fetch movies: ${response.statusText}`);

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
    const response = await fetch(`${API_BASE_URL}/movie/${id}`, {
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

export async function getBookmarks(userId: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/bookmarks/${userId}`,
      {
        method: "GET",
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
    console.error(`Error fetching bookmarks for user ID ${userId}:`, error);

    return [];
  }
}
