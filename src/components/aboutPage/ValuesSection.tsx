import { SecondTextPattern } from "../SecondTextPattern";
import { ValueBox } from "./ValueBox";

const values = [
  {
    title: "Quality",
    pra: "Uncompromising excellence in every detail, delivered consistently",
  },
  {
    title: "Teamwork",
    pra: "Uniting skills and ideas to achieve a common goal",
  },
  {
    title: "Safety",
    pra: "An unwavering priority protecting every life on every site",
  },
  {
    title: "Commitment",
    pra: "A steadfast promise to our clients and our purpose",
  },
];
export function ValuesSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-[url('/about/valuesBg.webp')] bg-cover bg-no-repeat ">
      <SecondTextPattern
        redText="&#x2014; our values"
        title={
          <p className={`text-[4rem] font-[350] text-white `}>
            What We <span className="text-[#277FCD]">Value</span> <br /> Most
          </p>
        }
      />
      <div className="flex items-center justify-between gap-4">
        {values.map((value) => (
          <ValueBox pra={value.pra} title={value.title} key={value.title} />
        ))}
      </div>
    </div>
  );
}
