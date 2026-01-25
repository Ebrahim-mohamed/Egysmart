import { MostTextPattern } from "../MostTextPattern";

export function FirstSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A]">
      <MostTextPattern
        blueText="Specialized Expertise"
        redText="Our Subsidiaries"
        whiteText="Building Strength Through "
        pra={
          <span>
            At EGY Smart, growth is driven by focus and specialization. Our
            subsidiaries operate as independent experts while sharing one
            unified vision of quality, innovation, and performance. Through
            Corners and Maaden, we extend our capabilities across interior
            finishing, bespoke furniture, and premium stainless-steel.
          </span>
        }
        horz
      />
      ;
    </div>
  );
}
