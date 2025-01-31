import { AvatarDropdown } from "./avatar-dropdown";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <header
      style={{ position: "-webkit-sticky" }}
      className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-[#232222] bg-black"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Link href="/">
            <h2 className="font-medium">Next Movies</h2>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <Link
                className="flex h-8 items-center justify-center rounded-md border border-[#242424] bg-[#0A0A0A] px-3 text-sm font-medium shadow-sm transition hover:border-[#2B2B2B] hover:bg-[#1F1F1F] hover:text-[#EDEDED]"
                href="/bookmarks"
              >
                Bookmarks
              </Link>

              <AvatarDropdown session={session} />
            </>
          ) : (
            <Link
              className="flex h-8 items-center justify-center rounded-md border border-[#242424] bg-[#0A0A0A] px-3 text-sm font-medium shadow-sm transition hover:border-[#2B2B2B] hover:bg-[#1F1F1F] hover:text-[#EDEDED]"
              href="/login"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
