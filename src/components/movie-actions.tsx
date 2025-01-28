import { toggleBookmark } from "@/app/actions";
import { Bookmark, Movie } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BookmarkIcon, StarIcon } from "lucide-react";
import Link from "next/link";

export default function MovieActions({
  bookmarks,
  movie,
}: {
  bookmarks: Bookmark[];
  movie: Movie;
}) {
  return (
    <div className="mt-4 flex gap-3">
      <form
        action={async () => {
          "use server";
          await toggleBookmark(movie.id);
        }}
      >
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-[#EDEDED] shadow-sm transition hover:border-[#333333] hover:bg-[#1F1F1F]">
          <BookmarkIcon
            className={cn("h-4 w-4", {
              "fill-[#EDEDED]": bookmarks.some(
                (bookmark) => parseInt(bookmark.movieId) === movie.id,
              ),
            })}
          />
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
