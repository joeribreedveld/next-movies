import { getBookmarks, getMovie } from "@/app/actions";
import MovieActions from "@/components/movie/movie-actions";
import { TBookmark, TMovie } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default async function MovieView({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;

  const movie: TMovie = await getMovie(id);
  const bookmarks: TBookmark[] = await getBookmarks();

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-lg font-medium">{movie.title}</h1>

        <div className="flex h-fit items-center gap-2">
          <StarIcon className="h-4 w-4 fill-[#FFAE00] text-[#FFAE00]" />

          <p className="text-sm font-medium">
            {Math.round(movie.vote_average * 10) / 10}

            <span className="font-normal text-[#A1A1A1]">/10</span>
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-md border border-[#2D2D2D] shadow-sm">
        <Image
          width={1280}
          height={1280}
          src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
          className="aspect-video h-auto w-full object-cover"
          priority
        />
      </div>

      <p className="mt-8 pb-2 text-sm leading-6 text-[#A1A1A1]">
        {movie.overview}
      </p>

      <MovieActions movie={movie} bookmarks={bookmarks} />
    </div>
  );
}
