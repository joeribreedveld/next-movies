import { signIn } from "@/auth";

export default async function Page() {
  return (
    <main className="container mx-auto h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <div className="flex h-full items-center justify-center">
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/" });
          }}
        >
          <button className="flex h-10 items-center justify-center rounded-md border border-[#242424] bg-[#0A0A0A] px-4 text-sm font-medium shadow-sm transition hover:border-[#2B2B2B] hover:bg-[#1F1F1F] hover:text-[#EDEDED]">
            Sign in with GitHub
          </button>
        </form>
      </div>
    </main>
  );
}
