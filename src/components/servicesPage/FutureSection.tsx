import { MostTextPattern } from "../MostTextPattern";
import { NumberComponent } from "../NumberComponent";
import { FutureImage } from "./FutureImage";
const numbers = [
  { number: 25, icon: "+", title: "YEARS OF  EXPERIENCE" },
  { number: 120, title: "MAJOR PROJECTS" },
  { number: 500, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 100, icon: "%", title: "SQUARE METERS BUILT" },
];
export function FutureSection() {
  return (
    <div
      className=" p-[var(--sectionPadding)] flex gap-14 items-start justify-between bg-[#0A0A0A]"
      id="first"
    >
      <div>
        <MostTextPattern
          moreWidth
          blueText="Layer by Layer."
          redText="OUR SERVCIES"
          whiteText="Building the future,"
          pra="Egy Smart delivers high-impact construction and renovation, specializing in turn-key projects, specialized works, and advanced 
flooring systems. We ensure integrity and innovation in every 
build, from protective coatings to complete project delivery. Our commitment is to deliver safe, innovative, and high
quality results that guarantee performance and customer satisfaction."
        />
        <div className="w-full flex items-center justify-between gap-4 mt-8">
          {numbers.map((number) => (
            <NumberComponent
              number={number.number}
              icon={number.icon || undefined}
              title={number.title}
              key={number.number}
              isSmall
            />
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <FutureImage img="protectiveCoating" title="Protective Coating" />
        <div className=" flex flex-col gap4">
          <FutureImage img="turnkeyProjects" title="Turnkey Projects" />
          <FutureImage img="concreteFlooring" title="Concrete Flooring" />
        </div>
      </div>
    </div>
  );
}
