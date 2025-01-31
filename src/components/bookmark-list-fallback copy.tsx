import { Skeleton } from "@/components/ui/skeleton";

export default function MovieViewFallback() {
  return (
    <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:gap-5 lg:gap-6">
      <Skeleton className="h-96 w-full" />
    </ul>
  );
}
