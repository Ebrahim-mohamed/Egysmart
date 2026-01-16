import Image from "next/image";
import { HeaderLink } from "./HeaderLink";

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
    <div className="py-6 px-14 flex items-center justify-between">
      <Image
        className="w-[12.9rem] aspect-69/16"
        src="/logo.png"
        alt="logo"
        width={300}
        height={300}
      />
      <div className="flex gap-8 items-center">
        {links.map((l) => (
          <HeaderLink link={l.to} name={l.name} key={l.name} />
        ))}
      </div>
    </div>
  );
}
