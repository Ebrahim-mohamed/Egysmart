import Link from "next/link";
import { MostTextPattern } from "../MostTextPattern";
import { ServiceBox } from "./ServiceBox";
const servicesAbove = [
  {
    title: "Turnkey Projects",
    pra: (
      <span>
        End to end execution from concept to reality, we handle every phase{" "}
        <br /> with unified responsibility
      </span>
    ),
    link: "services/#turnkeyProjects",
    img: "turnkeyProjects",
    class:
      " min-h-[35rem] w-[65%] max-[900px]:w-full max-[900px]:min-h-[25rem] ",
  },
  {
    title: "Concrete Flooring",
    pra: "EGY SMART specializes in all aspects of concrete flooring, expertly catering to both indoor and outdoor applications.",
    link: "services/#concreteFlooring",
    img: "concreteFlooring",
    class: " min-h-[35rem] flex-1 max-[900px]:min-h-[25rem] ",
  },
];
export function ServicesSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A] ">
      <div className="flex items-center justify-between gap-14 mb-14 max-[700px]:flex-col max-[700px]:items-start">
        <MostTextPattern
          blueText="Layer by Layer."
          redText="OUR EXPERTISE"
          whiteText="Building the future,"
        />
        <div>
          <p className="text-white text-[1rem] leading-[160%] font-normal mb-14">
            We prioritize integrity and innovation in all aspects <br /> of our
            work, ranging from design phase to full <br /> project execution
          </p>
          <Link
            href="/services"
            className="text-[1rem] font-medium text-[#277FCD]"
          >
            See All Projects &rarr;
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 max-[900px]:flex-col">
          {servicesAbove.map((ser) => (
            <ServiceBox
              classes={ser.class}
              img={ser.img}
              link={ser.link}
              title={ser.title}
              pra={ser.pra}
              key={ser.title}
            />
          ))}
        </div>
        <ServiceBox
          title="Protective Coating"
          pra={
            <span>
              EGYSMART delivers advanced epoxy coating systems designed for
              <br /> maximum protection across all sectors.
            </span>
          }
          img="protectiveCoating"
          link="services/#protectiveCoating"
          classes=" w-full min-h-[25rem] "
        />
      </div>
    </div>
  );
}
