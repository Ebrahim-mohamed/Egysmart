import { Hero } from "@/components/Hero";
import { FutureSection } from "@/components/servicesPage/FutureSection";
import { ServiceBox } from "@/components/servicesPage/ServiceBox";

export default function Services() {
  return (
    <div>
      <Hero
        page="services"
        title="Our Services"
        pra="End-to-end construction solutions built on quality, safety, and innovation."
      />
      <FutureSection />
      <ServiceBox
        title="Turnkey Projects"
        img="turnkeyProjects"
        secTitle="First SERVICE"
        des={[
          "End-to-end project delivery from concept to handover",
          "Full responsibility for planning, execution, and coordination",
          "Cost, quality, and timeline control under one contract",
          "Seamless collaboration across all disciplines",
        ]}
      />
      <ServiceBox
        title="Protective Coating"
        img="protectiveCoating"
        secTitle="second SERVICE"
        des={[
          "Advanced epoxy and chemical-resistant coating systems",
          "Protection against corrosion, abrasion, and harsh conditions",
          "Engineered solutions for industrial and commercial facilities",
          "Extended lifespan and enhanced surface performance",
        ]}
      />
      <ServiceBox
        title="Concrete Flooring"
        img="concreteFlooring"
        secTitle="fourth SERVICE"
        des={[
          "High-performance concrete and heavy-duty flooring systems",
          "Solutions designed for industrial and high-traffic environments",
          "Precision execution for durability and long service life",
          "Low-maintenance, load-resistant flooring solutions",
        ]}
      />
    </div>
  );
}
