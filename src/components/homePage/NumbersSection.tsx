import { NumberComponent } from "../NumberComponent";
import { SecondTextPattern } from "../SecondTextPattern";

const numbers = [
  { number: 25, icon: "+", title: "YEARS OF  EXPERIENCE" },
  { number: 120, title: "MAJOR PROJECTS" },
  { number: 500, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 100, icon: "%", title: "SQUARE METERS BUILT" },
];
export function NumbersSection() {
  return (
    <div className="p-[var(--sectionPadding)] flex items-center justify-center gap-12 flex-col bg-[url('/home/numbersBackground.webp')] bg-cover bg-no-repeat ">
      <SecondTextPattern
        redText="OUR PROVED TRACK RECORD"
        title={
          <p>
            Build <span className="text-[#277FCD]">the future</span> on a <br />{" "}
            foundation of proven <br /> results
          </p>
        }
      />
      <div className="w-full flex items-center justify-between gap-4">
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
