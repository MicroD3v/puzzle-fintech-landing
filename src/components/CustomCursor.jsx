import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply fluid physics spring padding to simulate a "trailing lag" effect
  const springConfig = { damping: 35, stiffness: 450, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };


    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accentViolet rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block shadow-[0_0_12px_#F43F5E]"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block border backdrop-blur-[1.5px]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{
          width: hovered ? 52 : 28,
          height: hovered ? 52 : 28,
          backgroundColor: hovered
            ? "rgba(244, 63, 94, 0.22)"
            : "rgba(244, 63, 94, 0.1)",
          borderColor: hovered
            ? "rgba(244, 63, 94, 1)"
            : "rgba(244, 63, 94, 0.7)",
          boxShadow: hovered
            ? "0 0 20px rgba(244, 63, 94, 0.5), inset 0 0 10px rgba(244, 63, 94, 0.3)"
            : "0 0 10px rgba(244, 63, 94, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 550, damping: 28 }}
      />
    </>
  );
}
