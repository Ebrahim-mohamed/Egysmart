import { VandMBox } from "./VandMBox";

export function VandMSection() {
  return (
    <div className="flex relative gap-4 max-[1100px]:flex-col bg-[#050606] p-[var(--sectionPadding)]">
      <p className=" text-white text-center [text-shadow:0_4px_4px_rgba(255,56,60,0.5)]  text-[12.5rem] font-[350] leading-[160%] absolute top-1/3 left-1/2 -translate-1/2 z-1000 max-[1100px]:hidden ">
        &
      </p>
      <VandMBox
        img="vision"
        pra="To be the most trusted leader in modern construction, shaping sustainable environments through innovation, quality, and long-term partnerships that build lasting value for communities and industries."
        title="Vision"
      />
      <VandMBox
        img="mission"
        pra="To deliver high-quality, safe, and innovative construction solutions through integrity, technical excellence, and teamwork—consistently exceeding client expectations while building projects that stand the test of time."
        title="Mission"
      />
    </div>
  );
}
