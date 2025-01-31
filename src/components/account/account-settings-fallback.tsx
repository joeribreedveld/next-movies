import { Skeleton } from "@/components/ui/skeleton";

export default function AccountSettingsFallback() {
  return (
    <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton className="h-48 w-full" key={index} />
      ))}
    </ul>
  );
}
