export function ProjectTemplate({
  title,
  duration,
  scop,
  bua,
  location,
  client,
  service,
  img,
  num,
}: {
  title: string;
  duration: string;
  scop: string;
  bua: string;
  location: string;
  client: string;
  service: string;
  img: string;
  num: number;
}) {
  return (
    <div
      className={`${num % 2 === 0 ? " flex " : " flex-row-reverse flex "} gap-10 py-16 border-b border-[#7A8693]`}
    >
      <img src={`/home/${img}.png`} className="w-[55%]" />
      <div className="flex-1 flex flex-col gap-10 text-white">
        <h1 className="text-[3rem] font-bold">{title}</h1>
        <div className=" flex px-10 flex-col gap-6 border-l border-[#D9D9D9] text-[1rem] font-normal">
          <div className="flex gap-6">
            <p>Client</p>
            <p className="font-medium">{client}</p>
          </div>
          <div className="flex gap-6">
            <p>Location</p>
            <p className="font-medium">{location}</p>
          </div>
          <div className="flex gap-6">
            <p>Service</p>
            <p className="font-medium">{service}</p>
          </div>
        </div>
        <div className="flex gap-6 text-[1rem] font-normal">
          <div className="flex flex-col gap-4 ">
            <p>Duration</p>
            <p className="font-medium">{duration}</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p>BUA</p>
            <p className="font-medium">{bua}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[1rem] font-normal">
          <p>Scop of work</p>
          <p className="font-medium">{scop}</p>
        </div>
      </div>
    </div>
  );
}
