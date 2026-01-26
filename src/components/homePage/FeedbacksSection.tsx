"use client";

import { SecondTextPattern } from "../SecondTextPattern";
import { FeedbackBox } from "./FeedbackBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const feedbacks = [
  {
    name: "John Doe",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    job: "CEO of a company",
    img: "feedbackPlaceholder",
  },
  {
    name: "John Doe",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    job: "CEO of a company",
    img: "feedbackPlaceholder",
  },
  {
    name: "John Doe",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    job: "CEO of a company",
    img: "feedbackPlaceholder",
  },
  {
    name: "John Doe",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    job: "CEO of a company",
    img: "feedbackPlaceholder",
  },
];

export function FeedbacksSection() {
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A] overflow-hidden">
      {/* Title */}
      <div className="mb-14">
        <SecondTextPattern
          redText="OUR PORTFOLIO"
          title={
            <p className="text-[4rem] font-[350] text-white">
              What <span className="text-[#277FCD]">People</span> Say
              <br />
              About Us
            </p>
          }
        />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        // centeredSlides={true}
        // slidesPerView={1.4}
        spaceBetween={24}
        speed={700}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".feedback-prev",
          nextEl: ".feedback-next",
        }}
        className="overflow-visible"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide
            key={index}
            className="flex! justify-center! items-center!"
          >
            <FeedbackBox
              feedback={feedback.pra}
              img={feedback.img}
              job={feedback.job}
              person={feedback.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-6 mt-14">
        <button className="feedback-prev text-[#9EA8B7] text-[1.5rem]  w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:font-bold hover:text-white cursor-pointer">
          &#x21D0;
        </button>
        <button className="feedback-next text-[#9EA8B7] text-[1.5rem]  w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:font-bold hover:text-white cursor-pointer">
          &#x21D2;
        </button>
      </div>
    </div>
  );
}
