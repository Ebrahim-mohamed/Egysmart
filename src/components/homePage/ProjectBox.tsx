export function ProjectBox({
  img,
  title,
  bue,
  location,
}: {
  img: string;
  title: string;
  bue: string;
  location: string;
}) {
  return (
    <div className="flex gap-6 flex-col text-white rounded-2xl overflow-hidden">
      <img alt="project image" src={img} className="w-full" />
      <div className="flex justify-between gap-4">
        <h1 className="text-[3rem] font-[350] ">{title}</h1>
        <div>
          <p className="text-[1rem] font-[325] mb-4">Location</p>
          <p className="text-[1.25rem] font-bold">{location}</p>
        </div>
        <div className="min-w-32">
          <p className="text-[1rem] font-[325] mb-4">BUA</p>
          <p className="text-[1.25rem] font-bold">{bue}</p>
        </div>
      </div>
    </div>
  );
}
