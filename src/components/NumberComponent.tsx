"use client";

import { useEffect, useState } from "react";

export function NumberComponent({
  number,
  icon,
  title,
  isSmall,
  start,
  duration = 1500,
}: {
  number: number;
  icon?: string;
  title?: string;
  isSmall?: boolean;
  start: boolean;
  duration?: number;
}) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCurrentNumber(Math.floor(progress * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, number, duration]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {icon && (
        <p
          className={`absolute top-0 ${
            isSmall
              ? "text-[1.5rem] -right-6"
              : "text-[2.5rem] max-[850px]:text-[2rem] -right-4"
          } font-bold text-[#277FCD]`}
        >
          {icon}
        </p>
      )}

      <p
        className={`${
          isSmall ? "text-[3rem] font-[350]" : "text-[7.5rem] font-black"
        } text-white`}
      >
        {currentNumber}
      </p>

      {title && (
        <p
          className={`${
            isSmall ? "text-[0.6rem] font-[325]" : "text-[1rem] font-bold"
          } leading-[160%] text-[#BBC4D1]`}
        >
          {title}
        </p>
      )}
    </div>
  );
}
