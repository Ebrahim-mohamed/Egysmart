import { WhoSection } from "@/components/homePage/WhoSection";
import { Hero } from "../components/Hero";
import { NumbersSection } from "@/components/homePage/NumbersSection";
import { ServicesSection } from "@/components/homePage/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeedbacksSection } from "@/components/homePage/FeedbacksSection";
import { NewsSection } from "@/components/homePage/News";
import { ProjectsSection } from "@/components/homePage/ProjectsSection";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero
        page="home"
        title={
          <span>
            Building The Future <br /> With Precision
          </span>
        }
        pra={<span>EGYSMART where vision meets exactness</span>}
      />
      <WhoSection />
      <NumbersSection />
      <ServicesSection />
      <ClientsSection />
      <ProjectsSection />
      <NewsSection />
      <FeedbacksSection />
    </div>
  );
}
