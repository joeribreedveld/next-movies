import MovieActions from "@/components/movie/movie-actions";
import { TBookmark, TMovie } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Movie({
  movie,
  bookmarks,
  priority,
}: {
  movie: TMovie;
  bookmarks: TBookmark[];
  priority: boolean;
}) {
  return (
    <div className="h-full overflow-hidden rounded-md border border-[#2D2D2D]">
      <Link href={`/movie/${movie.id}`} className="transition hover:opacity-90">
        <div className="aspect-[2/3] h-auto w-full">
          <Image
            unoptimized
            priority={priority}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={500}
            alt={`${movie.title} backdrop`}
            className="h-full w-full bg-[#1A1A1A] object-cover"
          />
        </div>
      </Link>

      <div className="h-fit p-4 sm:p-6">
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
  );
}
