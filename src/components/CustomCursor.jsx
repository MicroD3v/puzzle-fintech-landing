import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 450, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth >= 1024);
    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (window.innerWidth >= 1024 && document.body.style.cursor !== 'none') {
        document.body.style.setProperty('cursor', 'none', 'important');
        document.documentElement.style.setProperty('cursor', 'none', 'important');
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      if (
       target.tagName === "A" ||
       target.tagName === "BUTTON" ||
       target.closest("a") ||
       target.closest("button") ||
       (target.classList && target.classList.contains("cursor-pointer"))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
   <>
     <motion.div
      className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[99999] shadow-[0_0_12px_#f43f5e]"
      style={{
        x: cursorX,
        y: cursorY,
        backgroundColor: "#f43f5e",
        marginLeft: "-5px",
        marginTop: "-5px"
      }}
     />


     <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] border backdrop-blur-[1.5px] flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        marginLeft: hovered ? "-26px" : "-14px",
        marginTop: hovered ? "-26px" : "-14px"
      }}
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
