import { MostTextPattern } from "../MostTextPattern";
import { NumberComponent } from "../NumberComponent";
import { FutureImage } from "./FutureImage";
const numbers = [
  { number: 10, icon: "+", title: "YEARS OF  EXPERIENCE" },
  { number: 100, icon: "+", title: " COMPLETED PROJECTS" },
  { number: 775, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 500, icon: "M", title: "REVENUE" },
];
export function FutureSection() {
  return (
    <div
      className=" p-[var(--sectionPadding)] flex max-[900px]:flex-col gap-14 items-start justify-between bg-[#0A0A0A]"
      id="first"
    >
      <div>
        <MostTextPattern
          moreWidth
          blueText="Layer by Layer."
          redText="OUR SERVCIES"
          whiteText="Building the future,"
          pra="EGY SMART provides comprehensive construction and renovation solutions, combining expert project management with specialized custom works and premium flooring systems. From protective coatings to full turnkey projects, we deliver end-to-end services that ensure structural excellence, innovative design, and flawless execution. Dedicated to safety, sustainability, and exceptional craftsmanship, we consistently achieve high-performance results that inspire confidence and guarantee complete client satisfaction."
        />
        <div className="w-full flex items-center  justify-between gap-4 mt-8">
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
      <div className="flex gap-4 items-center max-[900px]:flex-col max-[900px]:w-full">
        <FutureImage img="protectiveCoating" title="Protective Coating" />
        <div className=" flex flex-col gap-4 max-[900px]:w-full ">
          <FutureImage img="turnkeyProjects" title="Turnkey Projects" />
          <FutureImage img="concreteFlooring" title="Concrete Flooring" />
        </div>
      </div>
    </div>
  );
}
