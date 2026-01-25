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
        <MindBox
          img="placeholder"
          jop="Head of Supply Chain"
          name="Ahmed Tawfek"
          num={1}
        />
        <MindBox
          img="placeholder"
          jop="Head of Supply Chain"
          name="Ahmed Tawfek"
          num={2}
        />
        <MindBox
          img="placeholder"
          jop="Head of Supply Chain"
          name="Ahmed Tawfek"
          num={3}
        />
        <MindBox
          img="placeholder"
          jop="Head of Supply Chain"
          name="Ahmed Tawfek"
          num={4}
        />
      </div>
    </div>
  );
}
