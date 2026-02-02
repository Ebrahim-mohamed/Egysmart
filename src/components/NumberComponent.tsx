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
  isSmall?: boolean;
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
        <p
          className={`absolute top-0  ${isSmall ? " text-[1.5rem] -right-6 " : " text-[2.5rem] -right-4 "} font-bold text-[#277FCD]`}
        >
          {icon}
        </p>
      )}
      <p
        className={`${
          isSmall ? " text-[3rem] font-[350] " : " text-[7.5rem] font-black"
        } text-white `}
      >
        {currentNumber}
      </p>
      {title && (
        <p
          className={`${isSmall ? " text-[0.6rem] font-[325] " : " text-[1rem] font-bold "}  leading-[160%] text-[#BBC4D1]`}
        >
          {title}
        </p>
      )}
    </div>
  );
}
