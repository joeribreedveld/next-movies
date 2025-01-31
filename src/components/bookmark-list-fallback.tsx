import { Skeleton } from "@/components/ui/skeleton";

export default function BookmarkListFallback() {
  return (
    <ul className="mt-8 flex flex-col gap-4 sm:gap-5 lg:gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton className="h-56 w-full" key={index} />
      ))}
    </ul>
  );
}
