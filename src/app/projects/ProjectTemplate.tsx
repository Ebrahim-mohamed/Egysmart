export function ProjectTemplate({
  title,
  duration,
  scop,
  bua,
  location,
  client,
  category,
  img,
  num,
  bud,
  stat,
}: {
  title: string;
  duration: string;
  scop: string;
  bua: string;
  location: string;
  client: string;
  category: string;
  img: string;
  num: number;
  bud: number;
  stat: string;
}) {
  return (
    <div
      className={`${num % 2 === 0 ? "flex max-[800px]:flex-col " : "flex-row-reverse flex max-[800px]:flex-col "} gap-10 py-16 border-b border-[#7A8693]`}
    >
      <img
        src={`https://api.egysmart.org/uploads/${img}`}
        className="w-[55%] max-[800px]:w-full rounded-2xl overflow-hidden "
      />

      <div className="flex-1 flex flex-col gap-10 text-white">
        <h1 className="text-[3rem] font-bold">{title}</h1>

        <div className="flex px-6 flex-col gap-4 border-l border-[#D9D9D9] text-[1rem] font-normal">
          <div className="flex gap-6">
            <p className="font-[325]">Client</p>
            <p className="font-medium">{client}</p>
          </div>
          <div className="flex gap-6">
            <p className="font-[325]">Location</p>
            <p className="font-medium">{location}</p>
          </div>
          <div className="flex gap-6">
            <p className="font-[325]">Category</p>
            <p className="font-medium">{category}</p>
          </div>
        </div>

        <div className="flex gap-6 text-[1rem] font-normal">
          <div className="flex flex-col gap-2">
            <p className="font-[325]">Duration</p>
            <p className="font-medium">{duration} m</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[325]">BUA</p>
            <p className="font-medium">{bua} m²</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[325]">Budget</p>
            <p className="font-medium">{bud} M EGP</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[325]">status</p>
            <p className="font-medium">{stat}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[1rem] font-normal">
          <p className="font-[325]">Scope of work</p>
          <p className="font-medium">{scop}</p>
        </div>
      </div>
    </div>
  );
}
