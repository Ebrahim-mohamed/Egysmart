"use client";

import { useEffect, useState } from "react";

export function NumberComponent({
  number,
  icon,
  title,
  isSmall,
}: {
  number: number;
  icon?: string;
  title?: string;
  isSmall?: false;
}) {
  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    if (number === 0) return;
    let counter = 0;
    const numberInterval = setInterval(() => {
      counter++;
      setCurrentNumber(counter);
      if (counter >= number) {
        clearInterval(numberInterval);
      }
    }, 30);
    return () => clearInterval(numberInterval);
  }, [number]);
  return (
    <div className={`relative  flex flex-col items-center justify-center`}>
      {icon && (
        <p className="absolute top-0 -right-4 text-[2.5rem] font-bold text-[#277FCD]">
          {icon}
        </p>
      )}
      <p
        className={`${
          isSmall ? " text-[4rem] font-[350] " : " text-[7.5rem] font-black"
        } text-white `}
      >
        {currentNumber}
      </p>
      {title && (
        <p className="text-[1rem] font-bold leading-[160%] text-[#BBC4D1]">
          {title}
        </p>
      )}
    </div>
  );
}
