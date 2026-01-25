import { SecondSection } from "@/components/aboutPage/SecondSection";
import { Hero } from "../../components/Hero";
import { ValuesSection } from "@/components/aboutPage/ValuesSection";
import { VandMSection } from "@/components/aboutPage/VandMSection";
import { ClientsSection } from "@/components/ClientsSection";
import { MilestonesSection } from "@/components/aboutPage/MilestonesSection";
import { MindsSection } from "@/components/aboutPage/MindsSection";

export default function About() {
  return (
    <div>
      <Hero
        page="about"
        title="We Build Life"
        pra={
          <span>
            Dedicated to innovation, quality, and integrity in modern <br />
            construction since 2015.
          </span>
        }
      />
      <SecondSection />
      <ValuesSection />
      <VandMSection />
      <MilestonesSection />
      <MindsSection />
      <ClientsSection />
    </div>
  );
}
