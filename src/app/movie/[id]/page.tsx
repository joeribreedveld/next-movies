import { getBookmarks, getMovie } from "@/app/actions";
import MovieActions from "@/components/movie-actions";
import { Bookmark, Movie } from "@/lib/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const movie: Movie = await getMovie(id);
  const bookmarks: Bookmark[] = await getBookmarks();

  console.log(movie);

  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
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
            width={256}
            height={256}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
            className="aspect-video h-auto w-full object-cover"
          />
        </div>

        <p className="mt-8 text-sm leading-6 text-[#A1A1A1]">
          {movie.overview}
        </p>

        <MovieActions movie={movie} bookmarks={bookmarks} />
      </div>
    </main>
  );
}
