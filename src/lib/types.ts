export type TMovie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  title: string;
  imdb: string;
  vote_average: number;
  poster_path: string;
};

export type TBookmark = {
  movieId: string;
};
