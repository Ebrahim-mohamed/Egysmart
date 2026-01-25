"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "/home/icons/1.png",
  "/home/icons/2.png",
  "/home/icons/3.png",
  "/home/icons/4.png",
  "/home/icons/5.png",
  "/home/icons/6.png",
  "/home/icons/1.png",
  "/home/icons/2.png",
  "/home/icons/3.png",
  "/home/icons/4.png",
  "/home/icons/5.png",
  "/home/icons/6.png",
  "/home/icons/1.png",
  "/home/icons/2.png",
  "/home/icons/3.png",
  "/home/icons/4.png",
  "/home/icons/5.png",
  "/home/icons/6.png",
  "/home/icons/3.png",
  "/home/icons/4.png",
  "/home/icons/5.png",
  "/home/icons/6.png",
  "/home/icons/3.png",
  "/home/icons/4.png",
  "/home/icons/5.png",
  "/home/icons/6.png",
];

export function ClientsSection() {
  return (
    <div className="py-[var(--sectionPadding)] bg-[#050606]">
      <h1 className="text-white text-[2rem] font-semibold mb-16 text-center ">
        Our Clients
      </h1>
      <Swiper
        modules={[Autoplay]}
        direction="horizontal" // 🔒 force vertical
        loop
        slidesPerView={6}
        spaceBetween={1}
        speed={800}
        autoplay={{
          delay: 0,
          disableOnInteraction: false, // 🔒 DO NOT STOP
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false} // 🔒 disable touch completely
        simulateTouch={false}
        className="h-[100px]"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`client-${index}`}
              className="h-12 object-contain pointer-events-none"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
