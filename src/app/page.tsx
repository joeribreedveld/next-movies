import { getMovies } from "@/app/actions";
import { Movie } from "@/lib/types";
import { BookmarkIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const movies = await getMovies();

  console.log(movies[0]);

  if (!movies || movies.length === 0) {
    return (
      <main className="container mx-auto min-h-full px-4 py-12 sm:py-16">
        <p className="text-sm">No movies available at the moment.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto min-h-full px-4 py-12 sm:py-16">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {movies.map((movie: Movie, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-md border border-[#2D2D2D]"
          >
            <Image
              unoptimized
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              width={256}
              height={256}
              alt={`${movie.title} backdrop`}
              className="aspect-video h-auto w-full bg-[#1A1A1A]"
            />

            <div className="p-6">
              <div className="flex justify-between gap-4">
                <h2 className="line-clamp-2 text-sm font-medium leading-6">
                  {movie.title}
                </h2>

                <div className="flex h-fit items-center gap-2">
                  <StarIcon className="h-4 w-4 fill-[#FFAE00] text-[#FFAE00]" />

                  <p className="text-sm font-medium">
                    {Math.round(movie.vote_average * 10) / 10}

                    <span className="font-normal text-[#A1A1A1]">/10</span>
                  </p>
                </div>
              </div>

              <p className="mt-2 line-clamp-2 text-sm text-[#A1A1A1]">
                {movie.overview}
              </p>

              <div className="mt-5 flex gap-3">
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
