"use client";


import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  date?: string;
  location?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const calculateHeight = () => {
    if (ref.current) {
      const container = ref.current;
      const entries = container.querySelectorAll(".timeline-entry");

      // Calculate total height of the timeline entries
      let totalHeight = 0;

      entries.forEach((entry) => {
        totalHeight += entry.getBoundingClientRect().height;
      });      
      
      // Set line height by total height
      if (totalHeight > 0) {
        setHeight(totalHeight);
      }
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      calculateHeight(); // Recalculate height after images have loaded
    };

    const images = ref.current?.querySelectorAll('img');
  images?.forEach(img => img.addEventListener('load', handleLoad));
    // Add event listener to recalculate height on window resize
    window.addEventListener("resize", calculateHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", calculateHeight);
      images?.forEach(img => img.removeEventListener('load', handleLoad));
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="timeline-entry flex justify-start pt-10 md:pt-40 md:gap-10"
            // id="experience"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-8 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full dark:bg-purple-100 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold dark:text-gray-50">
                {item.title} <br />
                <span className="md:text-base mt-2 text-gray-100 font-normal">
                  {item.date} <br /> {item.location}
                </span>

              </h3>
            </div>

            <div className="pl-20 pr-4 md:pl-4 w-full">
              {/* small screen title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold dark:text-gray-50">
                {item.title} <br />
                <span className="text-base mt-2 text-gray-100 font-bold">
                  {item.date} <br /> {item.location}
                </span>
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-100 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

