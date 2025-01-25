import { Movie } from "@/lib/types";

export async function getTest() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const result = await response.json();

    // Ensure results exist and are an array
    return result.results || [];
  } catch (error) {
    console.error("Error in getTest:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getMovies() {
  try {
    const movies = await getTest();

    if (movies.length === 0) {
      console.warn("No movies found.");
      return [];
    }

    const result = await Promise.all(
      movies.map(async (movie: Movie) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
              },
            },
          );

          if (!response.ok) {
            throw new Error(
              `Failed to fetch movie details: ${response.statusText}`,
            );
          }

          const result = await response.json();

          return {
            ...movie,
            imdb: result.imdb_id
              ? `https://www.imdb.com/title/${result.imdb_id}`
              : null,
          };
        } catch (error) {
          console.error(
            `Error fetching details for movie ID ${movie.id}:`,
            error,
          );
          return { ...movie, imdb: null }; // Return movie with null IMDb link on error
        }
      }),
    );

    return result;
  } catch (error) {
    console.error("Error in getMovies:", error);
    return []; // Return an empty array in case of an error
  }
}
