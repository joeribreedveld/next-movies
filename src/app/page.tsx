import { getMovies } from "@/app/actions";
import { Movie } from "@/lib/types";
import { PlusIcon, Popcorn, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <main className="container mx-auto px-4 py-16">
      <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 md:gap-y-9 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4">
        {movies.map((movie: Movie, index: number) => (
          <div key={index}>
            <Image
              unoptimized
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              width={256}
              height={256}
              alt={`kaas`}
              className="aspect-video h-auto w-full rounded-sm"
            />

            <div className="mt-4 flex justify-between gap-4">
              <h2 className="line-clamp-2 text-sm font-medium">
                {movie.title}
              </h2>

              <div className="flex h-fit items-center gap-2">
                <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />

                <p className="text-sm font-medium">
                  {Math.round(movie.vote_average * 10) / 10}

                  <span className="font-normal text-muted-foreground">/10</span>
                </p>
              </div>
            </div>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {movie.overview}
            </p>

            <div className="mt-4 flex gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-secondary text-white transition-opacity hover:opacity-90">
                <PlusIcon className="h-4 w-4" />
              </button>

              <Link
                href={movie.imdb}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-8 w-8 items-center justify-center rounded-sm bg-secondary text-white transition-opacity hover:opacity-90"
              >
                <Popcorn className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </main>
  );
}
