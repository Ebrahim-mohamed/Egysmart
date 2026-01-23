import { MostTextPattern } from "../MostTextPattern";

export function WhoSection() {
  return (
    <div
      className="flex items-start justify-between gap-10 p-[var(--sectionPadding)]"
      id="first"
    >
      <div className="w-[50%]">
        <MostTextPattern
          blueText="Integrity in Every Beam."
          redText="Who We Are"
          whiteText="Precision in Every Blueprint."
          pra="Architects of momentum. Creators of landmarks. We transform raw ambition into structural reality"
        />
      </div>
      <div>
        <p className="text-[7.5rem] font-black text-[#277FCD]">2015</p>
        <p className="text-[1.5rem] font-black text-[#BBC4D1] text-right">
          Established in Cairo
        </p>
        <p className="text-[1rem] font-normal text-[#9EA8B7] text-right">
          Building a legacy of trust and <br /> structural excellence
        </p>
      </div>
    </div>
  );
}
