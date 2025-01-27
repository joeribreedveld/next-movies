import { auth, signOut } from "@/auth";
import Image from "next/image";

export default async function Page() {
  const session = await auth();

  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-xl font-semibold leading-7">Profile</h1>

        <div className="mt-8 flex flex-col gap-8 sm:mt-10">
          <div className="flex justify-between rounded-md border border-[#2D2D2D] bg-[#0A0A0A] p-6">
            <div>
              <h2 className="font-semibold leading-6">Avatar (GitHub)</h2>
              <p className="mt-1.5 text-sm text-[#A1A1A1]">
                We current do not support avatar change.
              </p>
            </div>

            <Image
              src={session?.user?.image || ""}
              width={64}
              height={64}
              alt={"GitHub avatar"}
              className="rounded-full border border-[#2D2D2D] bg-[#1A1A1A] shadow-sm"
            />
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[#2D2D2D] bg-[#0A0A0A]">
            <div className="p-6">
              <div>
                <h2 className="font-semibold leading-6">Display name</h2>
                <p className="mt-1.5 text-sm text-[#A1A1A1]">
                  Please enter your full name, or a display name you are
                  comfortable with.
                </p>
              </div>

              <input
                className="mt-6 h-9 w-full max-w-xs rounded-md border border-[#2D2D2D] bg-black px-3 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                type="text"
              />
            </div>
            <div className="flex items-center justify-end border-t border-[#2D2D2D] p-6 py-4">
              <button className="flex h-8 items-center justify-center rounded-md bg-[#EDEDED] px-3 text-sm font-medium text-[#0A0A0A] shadow-sm transition hover:bg-[#CCCCCC]">
                Save
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-[#2D2D2D] bg-[#0A0A0A]">
            <div className="p-6">
              <div>
                <h2 className="font-semibold leading-6">Username</h2>
                <p className="mt-1.5 text-sm text-[#A1A1A1]">
                  This is your URL namespace within Next Movies.
                </p>
              </div>

              <input
                className="mt-6 h-9 w-full max-w-xs rounded-md border border-[#2D2D2D] bg-black px-3 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                type="text"
              />
            </div>
            <div className="flex items-center justify-end border-t border-[#2D2D2D] p-6 py-4">
              <button className="flex h-8 items-center justify-center rounded-md bg-[#EDEDED] px-3 text-sm font-medium text-[#0A0A0A] shadow-sm transition hover:bg-[#CCCCCC]">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="flex h-8 items-center justify-center rounded-md border border-[#242424] bg-[#0A0A0A] px-3 text-sm font-medium shadow-sm transition hover:border-[#2B2B2B] hover:bg-[#1F1F1F] hover:text-[#EDEDED]"
            >
              Sign out
            </button>
          </form>
          <button
            type="submit"
            className="flex h-8 items-center justify-center rounded-md bg-[#e2162a] px-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#FF575E]"
          >
            Delete account
          </button>
        </div>
      </div>
    </main>
  );
}
