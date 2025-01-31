import MovieView from "@/components/movie/movie-view";
import MovieViewFallback from "@/components/movie/movie-view-fallback";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <Suspense fallback={<MovieViewFallback />}>
        <MovieView params={params} />
      </Suspense>
    </main>
  );
}
