import { NumberComponent } from "../NumberComponent";

const numbers = [
  { number: 25, icon: "+", title: "YEARS OF  EXPERIENCE" },
  { number: 120, title: "MAJOR PROJECTS" },
  { number: 500, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 100, icon: "%", title: "SQUARE METERS BUILT" },
];
export function NumbersSection() {
  return (
    <div className="p-[var(--sectionPadding)] flex items-center justify-center gap-12 flex-col bg-[url('/home/numbersBackground.webp')] bg-cover bg-no-repeat ">
      <div className="flex flex-col  gap-4 items-center justify-center">
        <p className="text-[1rem] font-medium text-[#CD2735]">
          OUR PROVED TRACK RECORD
        </p>
        <div>
          <p
            className={`text-[4rem] font-medium text-white leading-[110%] text-center`}
          >
            Build <span className="text-[#277FCD]">the future</span> on a <br />{" "}
            foundation of proven <br /> results
          </p>
        </div>
      </div>
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
