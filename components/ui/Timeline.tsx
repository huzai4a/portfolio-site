"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  date?: string;
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
      // set line height by total height
      setHeight(totalHeight);
    }
  };

  useEffect(() => {
    calculateHeight();

    // Add event listener to recalculate height on window resize
    window.addEventListener("resize", calculateHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="timeline-entry flex justify-start pt-10 md:pt-40 md:gap-10"
            // id="experience"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full dark:bg-purple-100 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold dark:text-gray-50">
                {item.title} <br />
                <span className="md:text-base mt-2 text-gray-100 font-normal">
                  {item.date}
                </span>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* small screen title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold dark:text-gray-50">
                {item.title} <br />
                <span className="text-base mt-2 text-gray-100 font-normal">
                  {item.date}
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

export const data = [
  {
    title: "Coding Club President",
    date: "Aug. 2022 - Jun. 2023",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>
              - Troubleshooting experience: aiding in bug fixes. formatting
              issues, etc.
            </li>
            <li>- Lead a team to facilitate club meetings and events</li>
            <li>
              - Created HTML/CSS/JS foundational lessons to teach responsive
              website fundamentals
            </li>
          </ul>
          <br />
          I have gained valuable experience in troubleshooting, aiding in bug
          fixes and resolving formatting issues across various projects. As a
          team leader, I have successfully facilitated club meetings and events,
          ensuring effective collaboration and smooth execution. Additionally,
          I developed and delivered foundational lessons in HTML, CSS, and
          JavaScript to teach responsive website design, helping others build
          essential skills in web development.
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
    {
      title: "Policing Leadership Program",
      date: "Jul. 2022 - Aug. 2022",
      content: (
        <div className="font-geistSans">
          <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
            <h3>Summary:</h3>
            <ul className="list-none text-gray-100 font-geistSans ml-5">
              <li>
              - Worked as part of a team to facilitate a <a target="_blank" href='https://www.instagram.com/drps_official/p/Cf7PsdVL8Cj/' className='text-purple-100 font-medium underline decoration-navy-50 hover:decoration-purple-100 hover:decoration-solid'>Youth Forum</a>
              </li>
              <li>
                - Participated in various leadership ventures with some focus on communication
              </li>
              <li>
              - Achieved various certifications including CPR training
              </li>
            </ul>
            <br />
            I had the opportunity to work as part of a team to facilitate a Youth Forum, where we collaborated to ensure the event ran smoothly and effectively engaged young participants. Throughout the program, I participated in several leadership ventures that emphasized communication, helping me strengthen my interpersonal and organizational skills. Additionally, I earned various certifications, including CPR training, which further enhanced my ability to contribute to both individual and team-focused initiatives.
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Digitera Interactive",
      date: "Jan. 2022 - Jun. 2022",
      content: (
        <div className="font-geistSans">
          <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
            <h3>Summary:</h3>
            <ul className="list-none text-gray-100 font-geistSans ml-5">
              <li>
                -  Developed backend database connections through AJAX with PHP PDO protection
              </li>
              <li>
                - Updated a deprecated login system for ease of access for future developers
              </li>
              <li>
                - Worked on seamlessly integrating code blocks into existing sites
              </li>
              <li>
                - Became familiarized with Github and the common workflow of large projects in both the frontend and backend
              </li>
            </ul>
            <br />
            During my time at Digitera, I developed backend database connections using AJAX, ensuring secure data transmission with PHP PDO protection. This experience helped me deepen my understanding of backend processes and security measures. One of the key tasks I handled was updating a deprecated login system, which I streamlined for easier access by future developers, improving the overall user authentication flow.
            <br /><br />
            Additionally, I worked on integrating code blocks seamlessly into existing websites, enhancing their functionality without disrupting the current structure. This role also gave me the chance to familiarize myself with GitHub and the typical workflow of large-scale projects, providing me hands-on experience in both frontend and backend development. This exposure to collaboration tools and coding practices has significantly sharpened my technical and team coordination skills.
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];