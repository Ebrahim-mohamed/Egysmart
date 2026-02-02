import { MostTextPattern } from "../MostTextPattern";

export function WhoSection() {
  return (
    <div
      className="flex items-start justify-between gap-10 p-[var(--sectionPadding)]"
      id="first"
    >
      <div className="w-[60%]">
        <MostTextPattern
          blueText="Safe Projects On Time."
          redText="Who We Are"
          whiteText="Uncompromising Excellence In Every Detail "
          pra="We are dedicated to making a meaningful impact in construction with integrity, performance, and customer satisfaction at our core. "
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
