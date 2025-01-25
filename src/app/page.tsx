import { getMovies } from "@/app/actions";
import { Movie } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const movies = await getMovies();

  if (!movies || movies.length === 0) {
    return (
      <main className="container mx-auto px-4 py-16">
        <p>No movies available at the moment.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-9 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4">
        {movies.map((movie: Movie, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-md border border-[#2D2D2D]"
          >
            <div className="relative">
              <Image
                unoptimized
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                width={256}
                height={256}
                alt="test"
                className="aspect-video h-auto w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex justify-between gap-4">
                <h2 className="line-clamp-2 text-sm font-medium">
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

              {/* <div className="mt-4 flex gap-3">
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F]">
                  <PlusIcon className="h-4 w-4" />
                </button>

                <Link
                  href={movie.imdb}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F]"
                >
                  <Popcorn className="h-4 w-4" />
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
}
