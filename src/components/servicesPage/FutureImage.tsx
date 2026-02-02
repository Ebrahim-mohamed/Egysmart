export function FutureImage({ title, img }: { title: string; img: string }) {
  return (
    <div
      className="min-w-60 min-h-[18.7rem] bg-cover bg-no-repeat p-4 flex items-center justify-center text-[2rem] text-white font-[350] text-center max-[900px]:w-full relative"
      style={{ backgroundImage: `url(/services/${img}.webp)` }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full  
         bg-[rgba(0,0,0,0.55)]
         bg-cover bg-center bg-no-repeat"
      ></div>
      <p className="z-50">{title}</p>
    </div>
  );
}
