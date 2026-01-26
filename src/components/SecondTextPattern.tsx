import { ReactNode } from "react";

export function SecondTextPattern({
  redText,
  title,
}: {
  redText: string;
  title: ReactNode;
}) {
  return (
    <div className="flex flex-col  gap-4 items-center justify-center">
      <p className="text-[1rem] font-medium text-[#CD2735]">
        &#x2014; {redText}
      </p>
      <div>
        <div
          className={`text-[4rem] font-medium text-white leading-[110%] text-center`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
