import Link from "next/link";

export default async function Page() {
  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <p className="text-sm">This page count not be found.</p>
      <Link
        href="/"
        className="mt-6 flex h-8 w-fit items-center justify-center rounded-md border border-[#242424] bg-[#0A0A0A] px-3 text-sm font-medium shadow-sm transition hover:border-[#2B2B2B] hover:bg-[#1F1F1F] hover:text-[#EDEDED]"
      >
        Go back
      </Link>
    </main>
  );
}
