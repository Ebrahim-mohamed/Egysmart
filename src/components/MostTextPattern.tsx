import { ReactNode } from "react";

export function MostTextPattern({
  blueText,
  redText,
  whiteText,
  pra,
  moreWidth,
  horz,
}: {
  blueText: string;
  redText: string;
  whiteText: string;
  pra?: string | ReactNode;
  moreWidth?: boolean;
  horz?: boolean;
}) {
  return (
    <div className="flex flex-col  gap-4">
      <p className="text-[1rem] font-medium text-[#CD2735]">
        &#x2014; {redText}
      </p>
      <div className={`${horz ? " flex items-center justify-between " : ""}`}>
        <div>
          <p className={`text-[4rem] font-medium text-white leading-[110%]`}>
            {whiteText}
          </p>
          <p className={`text-[4rem] font-medium  text-[#277FCD]`}>
            {blueText}
          </p>
        </div>
        {pra && (
          <p
            className={`text-[#BBC4D1] font-normal text-[1rem] ${moreWidth ? "" : " max-w-120 "}`}
          >
            {pra}
          </p>
        )}
      </div>
    </div>
  );
}
