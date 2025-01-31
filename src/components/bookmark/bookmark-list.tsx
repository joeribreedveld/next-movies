import Bookmark from "./bookmark";
import { getBookmarkMovies } from "@/app/actions";
import { TMovie } from "@/lib/types";

export default async function BookmarkList() {
  const bookmarks = await getBookmarkMovies();

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <div className="mt-8 flex h-24 w-full items-center justify-center rounded-md border border-[#2D2D2D] bg-[#0A0A0A] text-sm text-[#A1A1A1]">
        No bookmarks found
      </div>
    );
  }

  return (
    <ul className="mt-8 flex flex-col gap-4 sm:gap-5 lg:gap-6">
      {bookmarks.map((movie: TMovie, index: number) => (
        <Bookmark
          movie={movie}
          bookmarks={bookmarks}
          priority={index < 4}
          key={index}
        />
      ))}
    </ul>
  );
}
