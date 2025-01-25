import { Movie } from "@/lib/types";

export async function getTest() {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });

  const result = await response.json();

  return result.results;
}

export async function getMovies() {
  const movies = await getTest();

  const result = await Promise.all(
    movies.map(async (movie: Movie) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
        },
      );

      const result = await response.json();

      return {
        ...movie,
        imdb: result.imdb_id
          ? `https://www.imdb.com/title/${result.imdb_id}`
          : null,
      };
    }),
  );

  return result;
}
