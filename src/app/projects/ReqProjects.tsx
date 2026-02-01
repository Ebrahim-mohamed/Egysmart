import { Hero } from "@/components/Hero";

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
    </div>
  );
}
