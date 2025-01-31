import AccountSettings from "@/components/account/account-settings";
import AccountSettingsFallback from "@/components/account/account-settings-fallback";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="container mx-auto min-h-[calc(100vh-144px)] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-lg font-medium leading-7">Account Settings</h1>

        <Suspense fallback={<AccountSettingsFallback />}>
          <AccountSettings />
        </Suspense>

        <div className="mt-12 flex items-center gap-3">
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
