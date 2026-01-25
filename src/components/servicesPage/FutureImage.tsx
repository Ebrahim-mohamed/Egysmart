export function FutureImage({ title, img }: { title: string; img: string }) {
  return (
    <div
      className="min-w-60 min-h-[18.7rem] bg-cover bg-no-repeat p-4 flex items-center justify-center text-[2rem] text-white font-[350] text-center"
      style={{ backgroundImage: `url(/services/${img}.webp)` }}
    >
      {title}
    </div>
  );
}
