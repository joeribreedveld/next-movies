import { getBookmarks, getMovies } from "@/app/actions";
import MovieActions from "@/components/movie-actions";
import { Bookmark, Movie } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const movies: Movie[] = await getMovies();
  const bookmarks: Bookmark[] = await getBookmarks();

  if (!movies || movies.length === 0) {
    return (
      <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
        <h1 className="text-lg font-medium leading-7">Popular movies</h1>

        <div className="mt-8 flex h-24 w-full max-w-2xl items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-sm text-[#A1A1A1]">
          No movies found
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <h1 className="text-lg font-medium leading-7">Popular movies</h1>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 2xl:grid-cols-5">
        {movies.map((movie: Movie, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-md border border-[#2D2D2D]"
          >
            <Link
              href={`/movie/${movie.id}`}
              className="transition hover:opacity-90"
            >
              <div className="aspect-[2/3] h-auto w-full">
                <Image
                  unoptimized
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width={500}
                  height={500}
                  alt={`${movie.title} backdrop`}
                  className="h-full w-full bg-[#1A1A1A] object-cover"
                />
              </div>
            </Link>

            <div className="h-full p-4 sm:p-6">
              <div className="flex h-fit items-center gap-2">
                <StarIcon className="h-4 w-4 fill-[#FFAE00] text-[#FFAE00]" />

                <p className="text-sm font-medium">
                  {Math.round(movie.vote_average * 10) / 10}

                  <span className="font-normal text-[#A1A1A1]">/10</span>
                </p>
              </div>

              <Link
                href={`/movie/${movie.id}`}
                className="underline-offset-2 hover:underline"
              >
                <h2 className="mt-3 line-clamp-2 text-sm font-medium">
                  {movie.title}
                </h2>
              </Link>

              <p className="mt-2 hidden text-sm text-[#A1A1A1] sm:line-clamp-2">
                {movie.overview}
              </p>

              <MovieActions bookmarks={bookmarks} movie={movie} />
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
}
