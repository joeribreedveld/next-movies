"use client";

import { toggleBookmark } from "@/app/actions";
import { Bookmark, Movie } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BookmarkIcon, LoaderIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function MovieActions({
  bookmarks,
  movie,
  alwaysMarked,
}: {
  bookmarks: Bookmark[];
  movie: Movie;
  alwaysMarked?: boolean;
}) {
  const [, formAction, isPending] = useActionState(toggleBookmark, null);

  return (
    <div className="mt-4 flex gap-3">
      <form action={formAction}>
        <input type="hidden" name="movieId" value={movie.id} />

        <button
          disabled={isPending}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F] disabled:bg-[#1A1A1A]"
        >
          {isPending ? (
            <LoaderIcon className="h-4 w-4 animate-spin text-[#888888]" />
          ) : (
            <BookmarkIcon
              className={cn("h-4 w-4", {
                "fill-[#EDEDED]":
                  bookmarks.some(
                    (bookmark) => parseInt(bookmark.movieId) === movie.id,
                  ) || alwaysMarked,
              })}
            />
          )}
        </button>
      </form>

      <Link
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F]"
      >
        <StarIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
