import Link from "next/link";

export function HeaderLink({ name, link }: { name: string; link: string }) {
  if (link === "contact")
    return (
      <Link
        href="/contact"
        className="px-6 py-4 border text-[1rem] font-medium"
      >
        {name} &rarr;
      </Link>
    );
  return (
    <Link
      href={`/${link}`}
      className="text-[1rem] text-white font-light hover:font-medium"
    >
      {name}
    </Link>
  );
}
