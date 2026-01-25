import Image from "next/image";
import { MilestoneBox } from "./MilestoneBox";

export function MilestonesSection() {
  return (
    <div className="p-[var(--sectionPadding)] gap-6 flex items-start justify-between bg-[#050606]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col  gap-4">
          <p className="text-[1rem] font-medium text-[#CD2735]">
            &#x2014; Our journey
          </p>
          <p className={`text-[4rem] font-medium text-white leading-[110%]`}>
            Our <span className="text-[#277FCD]">Milestones</span>
          </p>
          <p className="text-[#BBC4D1] font-normal text-[1rem]">
            Founded in 2015, EgySmart began as a specialized contractor focused
            on flooring system. <br /> Through a commitment to precision and
            clients trust we evovled into a leader in full-scale <br /> turnkey
            engineering projects.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <MilestoneBox
            pra="Started with specalized industrial flooring."
            title="Foundation"
            year="2015"
          />
          <MilestoneBox
            pra="Started with specalized industrial flooring."
            title="Expansion"
            year="2019"
          />
          <MilestoneBox
            pra="Started with specalized industrial flooring."
            title="Turnkey Leadership"
            year="2014"
          />
        </div>
      </div>
      <Image
        alt="Milestones image"
        src="/about/milestones.webp"
        width={500}
        height={500}
        className="w-[40%]"
      />
    </div>
  );
}
