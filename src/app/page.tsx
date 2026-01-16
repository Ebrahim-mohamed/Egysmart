import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
