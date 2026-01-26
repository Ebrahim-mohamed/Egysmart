import { WhoSection } from "@/components/homePage/WhoSection";
import { Hero } from "../components/Hero";
import { NumbersSection } from "@/components/homePage/NumbersSection";
import { ServicesSection } from "@/components/homePage/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeedbacksSection } from "@/components/homePage/FeedbacksSection";
import { NewsSection } from "@/components/homePage/News";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero
        page="home"
        title={
          <span>
            BUILDING <br /> WHAT ENDURES
          </span>
        }
        pra={
          <span>
            Engineering precision for modern age. <br /> Constructing the
            foundations of tomorrow.
          </span>
        }
      />
      <WhoSection />
      <NumbersSection />
      <ServicesSection />
      <ClientsSection />
      <NewsSection />
      <FeedbacksSection />
    </div>
  );
}
