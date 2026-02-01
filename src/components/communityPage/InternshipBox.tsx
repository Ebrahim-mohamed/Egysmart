import Link from "next/link";

export function InternshipBox({ title, des }: { title: string; des: string }) {
  return (
    <div className="p-6 flex flex-col gap-4  border border-white/10 bg-white/8 backdrop-blur-0 text-white flex-1">
      <h1 className="text-[2rem] font-[350]">{title}</h1>
      <p className="text-[1rem] font-[325]">{des}</p>
      <Link
        href="join-form"
        className="text-[1rem] font-[350] border border-white/10 bg-white/12 backdrop-blur-0 px-6 py-4 w-fit"
      >
        Apply for internship &rarr;
      </Link>
    </div>
  );
}
