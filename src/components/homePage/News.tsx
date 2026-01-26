"use client";

import { SecondTextPattern } from "../SecondTextPattern";
import { FeedbackBox } from "./FeedbackBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { NewsBox } from "./NewsBox";

const news = [
  {
    title: "COMMERCIAL PARK STREET EAST",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    his: "20/12/2025",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    his: "20/12/2025",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    his: "20/12/2025",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    his: "20/12/2025",
  },
  {
    title: "COMMERCIAL PARK STREET EAST",
    pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    his: "20/12/2025",
  },
];

export function NewsSection() {
  return (
    <div
      className="p-[var(--sectionPadding)] bg-[#0A0A0A] overflow-hidden"
      id="news"
    >
      {/* Title */}
      <div className="mb-14">
        <SecondTextPattern
          redText="News"
          title={
            <p className="text-[4rem] font-[350] text-white">
              Here is <span className="text-[#277FCD]">our latest</span> news on
              <br />
              EgySamrt
            </p>
          }
        />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        centeredSlides={true} // 👈 show current slide centered
        slidesPerView={1.5} // 👈 show part of next slide
        spaceBetween={40}
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
        {news.map((news, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <NewsBox his={news.his} pra={news.pra} title={news.title} />
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
