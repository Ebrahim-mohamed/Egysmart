import { NumberComponent } from "../NumberComponent";
import { SecondTextPattern } from "../SecondTextPattern";

const numbers = [
  { number: 10, icon: "+", title: "YEARS OF  EXPERIENCE" },
  { number: 100, icon: "+", title: " COMPLETED PROJECTS" },
  { number: 775, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 500, icon: "M", title: "REVENUE" },
];
export function NumbersSection() {
  return (
    <div className="p-[var(--sectionPadding)] flex items-center justify-center gap-12 flex-col bg-[url('/home/numbersBackground.webp')] bg-cover bg-no-repeat ">
      \
      <SecondTextPattern
        redText="OUR PROVED TRACK RECORD"
        title={
          <p>
            Extensive <span className="text-[#277FCD]">Experience</span>
            <br /> Across All Project <br /> Types
          </p>
        }
      />
      <div className="w-full flex items-center justify-between gap-4 max-[750px]:flex-col">
        {numbers.map((number) => (
          <NumberComponent
            number={number.number}
            icon={number.icon || undefined}
            title={number.title}
            key={number.number}
          />
        ))}
      </div>
    </div>
  );
}
