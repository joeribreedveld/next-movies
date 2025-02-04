import { auth } from "@/auth";
import Image from "next/image";

export default async function AccountSettings() {
  const session = await auth();

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex justify-between rounded-md border border-[#2D2D2D] bg-[#0A0A0A] p-6">
        <div>
          <h2 className="text-sm font-medium">Avatar (GitHub)</h2>
          <p className="mt-1 text-sm text-[#A1A1A1]">
            We current do not support avatar change.
          </p>
        </div>

        <Image
          src={session?.user?.image || ""}
          width={64}
          height={64}
          alt={"GitHub avatar"}
          className="aspect-square h-16 w-16 rounded-full border border-[#2D2D2D] bg-[#1A1A1A] shadow-sm"
        />
      </div>

      <div className="flex flex-col justify-between rounded-md border border-[#2D2D2D] bg-[#0A0A0A]">
        <div className="p-6">
          <div>
            <h2 className="text-sm font-medium">Display name</h2>
            <p className="mt-1 text-sm text-[#A1A1A1]">
              Please enter your full name, or a display name you are comfortable
              with.
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
            <h2 className="text-sm font-medium">Username</h2>
            <p className="mt-1 text-sm text-[#A1A1A1]">
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
  );
}
