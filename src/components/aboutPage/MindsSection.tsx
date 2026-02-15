import { MindBox } from "./MindBox";

export function MindsSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-[#050606] ">
      <div className="text-center mb-22">
        <p className="text-[1rem] font-medium text-[#CD2735] mb-4">
          &#x2014; Our Team
        </p>
        <p className={`text-[2rem] font-[350] text-[#D1D1D6] `}>
          Meet the minds behind THE SUCCESS OF EgySmart
        </p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <MindBox img="person1" jop="COO" name="Ahmed Magdy" num={1} />
        <MindBox img="person3" jop="CCO" name="Mostafa Naguib" num={2} />
        <MindBox img="person2" jop="CLO" name="Amr Sayed" num={3} />
      </div>
    </div>
  );
}
