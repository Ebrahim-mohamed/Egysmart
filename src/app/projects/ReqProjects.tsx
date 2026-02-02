import { Hero } from "@/components/Hero";
import { ProjectTemplate } from "./ProjectTemplate";

const projects = [
  {
    title: "COMMERCIAL PARK STREET EAS",
    location: "5th Settlement - New Cairo",
    service: "Turnkey Construction",
    client: "Minster of housing",
    scop: "5th Settlement - New Cairo",
    duration: "80000",
    bua: "80000",
    img: "projectPlaceholder",
  },
  {
    title: "COMMERCIAL PARK STREET EA",
    location: "5th Settlement - New Cairo",
    service: "Turnkey Construction",
    client: "Minster of housing",
    scop: "5th Settlement - New Cairo",
    duration: "80000",
    bua: "80000",
    img: "projectPlaceholder",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    location: "5th Settlement - New Cairo",
    service: "Turnkey Construction",
    client: "Minster of housing",
    scop: "5th Settlement - New Cairo",
    duration: "80000",
    bua: "80000",
    img: "projectPlaceholder",
  },
  {
    title: "COMMERCIAL PARK STRET EAST",
    location: "5th Settlement - New Cairo",
    service: "Turnkey Construction",
    client: "Minster of housing",
    scop: "5th Settlement - New Cairo",
    duration: "80000",
    bua: "80000",
    img: "projectPlaceholder",
  },
];

export function ReqProject({ cat }: { cat: string }) {
  return (
    <div>
      <Hero
        page="services"
        title={
          cat === "turnkey-projects"
            ? "Turnkey Projects"
            : cat === "protective-coating"
              ? "Protective Coating"
              : "Protective Coating"
        }
        pra={
          cat === "turnkey-projects"
            ? "A Curated Selection of Our Turnkey Engineering Landmarks"
            : cat === "protective-coating"
              ? "A Curated Selection of Our Concrete Flooring Project Landmarks"
              : "A Curated Selection of Our Protective Coating Project Landmarks"
        }
      />
      <div className="px-[var(--sectionPadding)] py-4 bg-[#050606]">
        {projects.map((project, index) => (
          <ProjectTemplate
            num={index}
            bua={project.bua}
            client={project.client}
            duration={project.duration}
            img={project.img}
            location={project.location}
            scop={project.scop}
            service={project.service}
            title={project.title}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
}
