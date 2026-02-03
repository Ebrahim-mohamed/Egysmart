"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type Logo = {
  _id: string;
  image: string;
};

export function ClientsSection() {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await fetch("http://localhost:4002/api/logos", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch logos");

        const data = await res.json();
        setLogos(data);
      } catch (err) {
        console.error("Error fetching logos:", err);
      }
    };

    fetchLogos();
  }, []);

  if (logos.length === 0) return null;

  return (
    <div className="py-[var(--sectionPadding)] bg-[#050606]">
      <h1 className="text-white text-[2rem] font-semibold mb-16 text-center">
        Our Clients
      </h1>

      <Swiper
        modules={[Autoplay]}
        direction="horizontal"
        loop
        centeredSlides
        slidesPerView={4}
        spaceBetween={1}
        speed={800}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        simulateTouch={false}
        className="h-[100px]"
      >
        {logos.map((logo) => (
          <SwiperSlide
            key={logo._id}
            className="flex! items-center! justify-center!"
          >
            <img
              src={`http://localhost:4002/uploads/${logo.image}`}
              alt="client-logo"
              className="h-18 object-contain pointer-events-none"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
