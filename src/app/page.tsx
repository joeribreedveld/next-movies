import { getMovies } from "@/app/actions";
import Image from "next/image";

type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  title: string;
};

export default async function Home() {
  const movies = await getMovies();

  console.log(movies.results[0]);

  return (
    <main className="container mx-auto px-4 py-16">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-9 lg:grid-cols-3 lg:gap-y-12 xl:grid-cols-4">
        {movies.results.map((movie: Movie, index: number) => (
          <div key={index}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              width={256}
              height={256}
              alt={`kaas`}
              className="h-auto w-full"
            />

            <h2 className="mt-4 text-sm font-medium">{movie.title}</h2>
          </div>
        ))}
      </ul>
    </main>
  );
}
