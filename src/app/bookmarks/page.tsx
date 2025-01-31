import BookmarkList from "@/components/bookmark/bookmark-list";
import BookmarkListFallback from "@/components/bookmark/bookmark-list-fallback";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-lg font-medium leading-7">Bookmarks</h1>

        <Suspense fallback={<BookmarkListFallback />}>
          <BookmarkList />
        </Suspense>
      </div>
    </main>
  );
}
