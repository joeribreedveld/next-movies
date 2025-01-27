import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b border-[#232222] bg-black">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Link href="/">
            <h2 className="font-semibold">Next Movies</h2>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="flex h-8 items-center justify-center rounded-md border border-[#242424] bg-[#0A0A0A] px-3 text-sm font-medium shadow-sm transition hover:border-[#2B2B2B] hover:bg-[#1F1F1F] hover:text-[#EDEDED]"
            href="/bookmarks"
          >
            Bookmarks
          </Link>
          <div className="h-8 w-8 rounded-full border border-[#2E2E2E] bg-[#1A1A1A]"></div>
        </div>
      </div>
    </header>
  );
}
