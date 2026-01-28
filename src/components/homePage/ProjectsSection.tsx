"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { MostTextPattern } from "../MostTextPattern";
import { ProjectBox } from "./ProjectBox";
import { useState } from "react";

const projects = [
  {
    title: "COMMERCIAL PARK STREET EAST",
    location: "5th Settlement - New Cairo",
    bue: "80,000 m²",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    location: "5th Settlement - New Cairo",
    bue: "80,000 m²",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    location: "5th Settlement - New Cairo",
    bue: "80,000 m²",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    location: "5th Settlement - New Cairo",
    bue: "80,000 m²",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    location: "5th Settlement - New Cairo",
    bue: "80,000 m²",
  },
];

export function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState<number>();
  return (
    <div
      className="p-[var(--sectionPadding)] bg-[#0A0A0A] overflow-hidden"
      id="news"
    >
      {/* Title */}
      <div className="mb-14 flex justify-between items-end gap-6">
        <MostTextPattern
          redText="OUR PORTFOLIO"
          whiteText="Signature"
          blueText="Developments"
          pra="Explore our landmark engineering feats across the region. We build trust through precision and strength"
        />
        <div className="flex items-end justify-center gap-4">
          <div className="text-white text-[1rem] font-medium">
            <span className="text-[1.5rem] text-white">{currentSlide}</span> /
            <span>{projects.length}</span>
          </div>
          <div className="flex items-center justify-center gap-6 mt-14">
            <button className="feedback-prev text-[#9EA8B7] text-[1.5rem]  w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:font-bold hover:text-white cursor-pointer">
              &#x21D0;
            </button>
            <button className="feedback-next text-[#9EA8B7] text-[1.5rem]  w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:font-bold hover:text-white cursor-pointer">
              &#x21D2;
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        slidesPerView={1.4} // 👈 show part of next slide
        // spaceBetween={2}
        speed={700}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".feedback-prev",
          nextEl: ".feedback-next",
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        className="overflow-visible projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="transition-all duration-500">
            <div className="project-scale">
              <ProjectBox
                title={project.title}
                bue={project.bue}
                location={project.location}
                img="projectPlaceholder"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
