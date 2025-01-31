import MovieList from "@/components/movie/movie-list";
import MovieListFallback from "@/components/movie/movie-list-fallback";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <h1 className="text-lg font-medium leading-7">Popular movies</h1>

      <Suspense fallback={<MovieListFallback />}>
        <MovieList />
      </Suspense>
    </main>
  );
}
