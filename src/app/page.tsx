import { getMovies } from "@/app/actions";
import { Movie } from "@/lib/types";
import { BookmarkIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const movies = await getMovies();

  if (!movies || movies.length === 0) {
    return (
      <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
        <p className="text-sm">No movies available at the moment.</p>
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
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  width={256}
                  height={256}
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

              <div className="mt-4 flex gap-3">
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F]">
                  <BookmarkIcon className="h-4 w-4" />
                </button>

                <Link
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F]"
                >
                  <StarIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
}
