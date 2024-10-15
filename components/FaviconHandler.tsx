"use client"; // Mark this as a Client Component
import { useEffect } from "react";

const FaviconHandler = () => {
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const setFavicon = (isDarkMode: boolean) => {
      const link = document.querySelector("link[rel='icon']");
      if (link) {
        link.setAttribute("href", isDarkMode ? "/assets/dark-logo.ico" : "/assets/light-logo.ico");
      }
    };

    // Set initial favicon based on the user's preference
    setFavicon(darkModeQuery.matches);

    // Listen for changes in the color scheme
    const handleChange = (e: MediaQueryListEvent) => {
      setFavicon(e.matches); // e.matches is true if dark mode, false if light mode
    };

    darkModeQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => {
      darkModeQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return null; // No rendering needed for this component
};

export default FaviconHandler;
