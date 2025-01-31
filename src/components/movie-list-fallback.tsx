import { Skeleton } from "@/components/ui/skeleton";

export default function MovieListFallback() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton className="h-96 w-full" key={index} />
      ))}
    </ul>
  );
}
