import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
 const [darkMode, setDarkMode] = useState(() => {
  if (typeof window !== "undefined") {
   const savedTheme = localStorage.getItem("theme");
   if (savedTheme) return savedTheme === "dark";
   return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
 });

 useEffect(() => {
  const root = document.documentElement;
  if (darkMode) {
   root.classList.add("dark");
   localStorage.setItem("theme", "dark");
  } else {
   root.classList.remove("dark");
   localStorage.setItem("theme", "light");
  }
 }, [darkMode]);

 return (

  <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
   <div className="relative min-h-screen bg-white dark:bg-[#060304] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden">
    <CustomCursor />
    <div className="absolute inset-0 overflow-visible pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-700">
     <div className="absolute top-[-25%] left-[-15%] w-[80vw] h-[80vw] bg-[color-mix(in_srgb,var(--color-accentViolet)_12%,transparent)] rounded-full blur-[160px] mix-blend-plus-lighter animate-[pulse_12s_ease-in-out_infinite]" />

     <div className="absolute top-[15%] right-[-20%] w-[75vw] h-[75vw] bg-[color-mix(in_srgb,var(--color-accentEmerald)_6%,transparent)] rounded-full blur-[180px] mix-blend-plus-lighter animate-[pulse_16s_ease-in-out_infinite_2s]" />
    </div>
    <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii41Ii8+Cjwvc3ZnPg==')]" />
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 1.2 }}
     className="fixed inset-0 z-10 pointer-events-none bg-white/20 dark:bg-[#0D080A]/60 backdrop-blur-[24px] backdrop-saturate-[180%] transition-colors duration-500"
    />
    <div className="relative z-20 w-full">
     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
     <main>
      <Hero />
      <BentoGrid />
      <Dashboard />
      <Pricing />
      <FAQ />
     </main>
     <Footer />
    </div>
   </div>
  </ReactLenis>
 );
}
