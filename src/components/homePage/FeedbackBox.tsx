import Image from "next/image";

export function FeedbackBox({
  feedback,
  person,
  job,
  img,
}: {
  feedback: string;
  person: string;
  job: string;
  img: string;
}) {
  return (
    <div className="flex p-8 flex-col gap-6 max-w-164 text-white font-[350] text-[1rem] border border-white/10 bg-white/2 backdrop-blur-[5.7px]">
      <p>{feedback}</p>
      <div className="flex gap-6">
        <Image
          alt="person image"
          src={`/home/${img}.png`}
          width={200}
          height={200}
          className="w-[3.4rem] aspect-square rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p>{person}</p>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}
