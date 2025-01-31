import { getBookmarks, getMovies } from "@/app/actions";
import Movie from "@/components/movie/movie";
import { TBookmark, TMovie } from "@/lib/types";

export default async function MovieList() {
  const movies: TMovie[] = await getMovies();
  const bookmarks: TBookmark[] = await getBookmarks();

  if (!movies || movies.length === 0) {
    return (
      <div className="mt-8 flex h-24 w-full max-w-2xl items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-sm text-[#A1A1A1]">
        No movies found
      </div>
    );
  }

  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 2xl:grid-cols-5">
      {movies.map((movie: TMovie, index: number) => (
        <Movie
          movie={movie}
          key={index}
          bookmarks={bookmarks}
          priority={index < 10}
        />
      ))}
    </ul>
  );
}
