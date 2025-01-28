import { signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export function AvatarDropdown({ session }: { session: Session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link
          href="/account/settings"
          className="rounded-full transition hover:opacity-90"
        >
          <Image
            className="rounded-full border border-[#2E2E2E] bg-[#1A1A1A]"
            src={session.user?.image || ""}
            alt={`${session.user?.name} avatar`}
            width={32}
            height={32}
          />
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuLabel className="font-medium">
          <p>{session.user?.name}</p>
          <p className="font-normal text-[#A1A1A1]">{session.user?.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/account/settings">
          <DropdownMenuItem>
            Account Settings
            <SettingsIcon className="ml-auto h-4 w-4" />
          </DropdownMenuItem>
        </Link>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button type="submit" className="w-full">
            <DropdownMenuItem>
              Sign out
              <LogOutIcon className="ml-auto h-4 w-4" />
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
