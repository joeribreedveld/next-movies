export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  title: string;
  imdb: string;
  vote_average: number;
  poster_path: string;
};

export type Bookmark = {
  movieId: string;
};
