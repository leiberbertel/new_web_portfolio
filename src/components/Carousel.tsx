"use client";

import { useState } from "react";
import type { Slide } from "@/types/Slide.interface";
import Image from "next/image";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "Interactive Financial Dashboard",
      background: "linear-gradient(100deg, #FAAC12, #E07262)",
      image: "/dashboard_financial.png",
      link: "https://github.com/leiberbertel/financial_dashboard_dash",
    },
    {
      title: "Task Planner",
      background: "linear-gradient(100deg, #7EBAFF, #2400FF)",
      image: "/task_planner.png",
      link: "https://todoapp-12a65.web.app/",
    },
  ];

  const handleNext = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Carousel desktop */}
      <section className="hidden md:flex flex-col items-center gap-10">
        <h2 className="acorn-bold text-6xl max-w-[600px] text-center">
          Finished
        </h2>
        <div className="relative w-full h-[500px] flex items-center justify-center">
          <div
            className="absolute h-[500px] w-[50%] rounded-[40px] overflow-hidden"
            style={{ background: slides[currentSlide].background }}
          >
            <h1 className="py-5 z-10 px-10 text-white font-bold text-4xl">
              {slides[currentSlide].title}
            </h1>
            <a
              href={slides[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  width: "500px",
                  height: "360px",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <Image
                  className="object-cover h-auto absolute bottom-0 rounded-[40px] transition-all"
                  src={slides[currentSlide].image}
                  layout="fill"
                  alt={slides[currentSlide].title}
                />
              </div>
            </a>

            {/* Navigation controls */}
            <button
              onClick={handlePrev}
              className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Carousel mobile */}
      <section className="flex md:hidden flex-col items-center gap-10">
        <h2 className="acorn-bold text-6xl max-w-[600px] text-center">
          Finished
        </h2>
        a
        <div className="w-full max-w-4xl mx-auto py-10 relative">
          <div
            className="relative h-[500px] rounded-[40px] overflow-hidden"
            style={{ background: slides[currentSlide].background }}
          >
            <h1 className="py-5 z-10 px-10 text-center text-white font-bold text-4xl">
              {slides[currentSlide].title}
            </h1>
            <a
              href={slides[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  width: "500px",
                  height: "360px",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <Image
                  className="object-cover h-auto absolute translate-x-[230px] bottom-0 rounded-[40px] hover:translate-x-[180px] transition-all"
                  src={slides[currentSlide].image}
                  layout="fill"
                  alt={slides[currentSlide].title}
                />
              </div>
            </a>
          </div>

          {/* Navigation controls */}
          <button
            onClick={handlePrev}
            className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Carousel;
