import { Hero } from "../../components/Hero";

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
    </div>
  );
}
