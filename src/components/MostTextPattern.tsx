export function MostTextPattern({
  blueText,
  redText,
  whiteText,
  pra,
}: {
  blueText: string;
  redText: string;
  whiteText: string;
  pra?: string;
}) {
  return (
    <div className="flex flex-col  gap-4">
      <p className="text-[1rem] font-medium text-[#CD2735]">
        &#x2014; {redText}
      </p>
      <div>
        <p className={`text-[4rem] font-medium text-white leading-[110%]`}>
          {whiteText}
        </p>
        <p className={`text-[4rem] font-medium  text-[#277FCD]`}>{blueText}</p>
      </div>
      {pra && (
        <p className="text-[#BBC4D1] font-normal text-[1rem] max-w-120">
          {pra}
        </p>
      )}
    </div>
  );
}
