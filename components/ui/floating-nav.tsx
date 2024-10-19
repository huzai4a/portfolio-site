"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    id: string;
    active?: boolean;
  }[];
  className?: string;
}) => {
  const { scrollYProgress, scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  const [activeNav, setActiveNav] = useState(navItems);




  // Refs for sections to observe
  const sectionRefs = useRef<any>({});

  // Function to handle when a section becomes visible
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeSectionId = entry.target.id;

        // Update the active state of navItems based on the visible section
        setActiveNav((prevNavItems) =>
          prevNavItems.map((item) =>
            item.id === activeSectionId
              ? { ...item, active: true }
              : { ...item, active: false }
          )
        );
      }
    });
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        sectionRefs.current[item.id] = section;
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = sectionRefs.current[item.id];
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);





  // Handle initial visibility on page load
  useEffect(() => {
    // Check if page is at the top initially (scrollYProgress is 0)
    if (scrollYProgress.get() === 0) {
      setVisible(true);
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() <= 0.02) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white-50/[0.2] rounded-full dark:bg-navy-100 bg-white-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 px-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
         {activeNav.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              navItem.active ?
              "border text-sm font-medium relative border-neutral-200 dark:border-neutral-300/[0.2] text-black dark:text-white-50 px-4 py-2 rounded-full" :
              "relative dark:text-white-50 items-center flex space-x-1 text-neutral-600 hover:text-purple-50 transition duration-100"
            )} // Apply active styling here
          >
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {navItem.active && <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-200 to-transparent h-px" />}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};