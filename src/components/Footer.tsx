import Image from "next/image";
import { FooterLink } from "./FooterLink";
import Link from "next/link";

const firstLinks = [
  { link: "Company", to: "community" },
  { link: "About Us", to: "about" },
  { link: "News", to: "home/#news" },
];
const secondLinks = [
  { link: "Services", to: "services" },
  { link: "Turnkey Projects", to: "services/#turnkeyProjects" },
  { link: "Flooring Projects", to: "services/#flooringProjects" },
  { link: "Concrete Flooring", to: "services/#concreteFlooring" },
];
const thirdLinks = [{ link: "Connect", to: "contact" }];
const social = [
  { link: "facebook", to: "https://www.facebook.com/share/19jqUgPwUL/" },
  {
    link: "instagram",
    to: "https://www.instagram.com/egysmart_es?igsh=bXk5ZzhlYWJsNGIw",
  },
  {
    link: "linkedin",
    to: "https://www.linkedin.com/company/egysmart-4-modern-engineering/",
  },
];
export function Footer() {
  return (
    <div className="p-20 flex flex-col gap-12 bg-[#0A0A0A]">
      <Link href="/" className="w-fit">
        <Image
          className="w-[12.9rem] aspect-69/16"
          src="/logo.png"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>
      <div>
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-between w-full">
            <p className="text-[1rem] font-[325] text-white">
              Engineering excellence built on a foundation of trust, <br />{" "}
              integrity and modern innovation.
            </p>
            <div className="flex flex-col items-start justify-center gap-6">
              {firstLinks.map((link) => (
                <FooterLink name={link.link} to={link.to} key={link.to} />
              ))}
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              {secondLinks.map((link) => (
                <FooterLink name={link.link} to={link.to} key={link.to} />
              ))}
            </div>
            <div className="flex flex-col items-start justify-center gap-6">
              {thirdLinks.map((link) => (
                <FooterLink name={link.link} to={link.to} key={link.to} />
              ))}
              <div className="flex items-center justify-center gap-6">
                {social.map((link) => (
                  <FooterLink name={link.link} to={link.to} key={link.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-[1rem] font-[325] text-[#BBC4D1]">
          ©2026 EgySmart, All rights reserved
        </p>
      </div>
    </div>
  );
}
