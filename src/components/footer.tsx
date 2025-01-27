import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-20 items-center border-t border-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <p className="text-sm text-[#A1A1A1]">
          Made by{" "}
          <Link
            href="https://github.com/joeribreedveld"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-2 hover:underline"
          >
            Joeri Breedveld
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
