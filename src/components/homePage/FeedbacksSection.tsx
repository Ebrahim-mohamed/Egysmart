"use client";

import { useEffect, useState } from "react";

import { SecondTextPattern } from "../SecondTextPattern";
import { FeedbackBox } from "./FeedbackBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export function FeedbacksSection() {
  const [feedbacks, setFeedbacks] = useState<
    {
      _id: string;
      name: string;
      job: string;
      feedback: string;
    }[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("https://api.egysmart.org/api/testimonials", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch testimonials");

        const data = await res.json();

        const mapped = data.map((item: any) => ({
          _id: item._id,
          name: item.name,
          job: item.title || item.company || "",
          feedback: item.feedback,
        }));

        setFeedbacks(mapped);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return null;

  return (
    <div className="p-[var(--sectionPadding)] bg-[#0A0A0A] overflow-hidden">
      {/* Title */}
      <div className="mb-14">
        <SecondTextPattern
          redText="Client Satisfaction"
          title={
            <p className="text-[4rem] font-[350] text-white">
              Our <span className="text-[#277FCD]">Partners</span>
              <br />
              Feedback
            </p>
          }
        />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        centeredSlides
        slidesPerView={window.innerWidth <= 800 ? 1 : 1.8}
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
        {feedbacks.map((item) => (
          <SwiperSlide key={item._id}>
            <FeedbackBox
              feedback={item.feedback}
              img="feedbackPlaceholder"
              job={item.job}
              person={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-6 mt-14">
        <button className="feedback-prev text-[#9EA8B7] text-[1.5rem] w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:text-white cursor-pointer">
          &#x21D0;
        </button>
        <button className="feedback-next text-[#9EA8B7] text-[1.5rem] w-[2rem] h-[2rem] rounded-full border border-[#9EA8B7] flex items-center justify-center p-4 hover:bg-[#277FCD] hover:text-white cursor-pointer">
          &#x21D2;
        </button>
      </div>
    </div>
  );
}
