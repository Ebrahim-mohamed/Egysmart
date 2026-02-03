"use client";

import { useEffect, useRef, useState } from "react";
import { NumberComponent } from "../NumberComponent";
import { SecondTextPattern } from "../SecondTextPattern";

const numbers = [
  { number: 10, icon: "+", title: "YEARS OF EXPERIENCE" },
  { number: 100, icon: "+", title: "COMPLETED PROJECTS" },
  { number: 775, icon: "K", title: "SQUARE METERS BUILT" },
  { number: 500, icon: "M", title: "REVENUE" },
];

export function NumbersSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="p-[var(--sectionPadding)] flex items-center justify-center gap-12 flex-col bg-[url('/home/numbersBackground.webp')] bg-cover bg-no-repeat"
    >
      <SecondTextPattern
        redText="OUR PROVED TRACK RECORD"
        title={
          <p>
            Extensive <span className="text-[#277FCD]">Experience</span>
            <br /> Across All Project <br /> Types
          </p>
        }
      />

      <div className="w-full flex items-center justify-between gap-4 max-[750px]:flex-col">
        {numbers.map((item) => (
          <NumberComponent
            key={item.title}
            number={item.number}
            icon={item.icon}
            title={item.title}
            start={startCounting}
            duration={1500}
          />
        ))}
      </div>
    </div>
  );
}
