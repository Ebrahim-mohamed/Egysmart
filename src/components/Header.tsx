import Image from "next/image";
import { HeaderLink } from "./HeaderLink";
import Link from "next/link";

const links = [
  { name: "Home", to: "" },
  { name: "Services", to: "services" },
  { name: "About Us", to: "about" },
  { name: "Egy Smart Community", to: "community" },
  { name: "Subsidiary", to: "subsidiary" },
  { name: "Contact", to: "contact" },
];
export function Header() {
  return (
    <div className="py-6 px-14 flex items-center justify-between absolute top-0 left-0 w-full">
      <Link href={"/"}>
        <Image
          className="w-[12.9rem] aspect-69/16"
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>
      <div className="flex gap-8 items-center">
        {links.map((l) => (
          <HeaderLink link={l.to} name={l.name} key={l.name} />
        ))}
      </div>
    </div>
  );
}
