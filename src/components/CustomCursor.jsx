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
    className="fixed top-0 left-0 pointer-events-none"
    style={{
     x: cursorX,
     y: cursorY,
     width: "10px",
     height: "10px",
     borderRadius: "9999px",
     backgroundColor: "#f43f5e",
     boxShadow: "0 0 12px #f43f5e",
     marginLeft: "-5px",
     marginTop: "-5px",
     zIndex: 999999,
     mixBlendMode: "difference"
    }}
   />


   <motion.div
    className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
    style={{
     x: cursorXSpring,
     y: cursorYSpring,
     width: "64px",
     height: "64px",
     marginLeft: "-32px",
     marginTop: "-32px",
     zIndex: 999999,
     mixBlendMode: "difference"
    }}
   >
    <motion.div
     style={{
      borderRadius: "9999px",
      border: hovered ? "1px solid rgba(244, 63, 94, 1)" : "1px solid rgba(244, 63, 94, 0.7)",
      backdropFilter: "blur(1.5px)",
      backgroundColor: hovered ? "rgba(244, 63, 94, 0.22)" : "rgba(244, 63, 94, 0.1)",
      boxShadow: hovered
       ? "0 0 20px rgba(244, 63, 94, 0.5), inset 0 0 10px rgba(244, 63, 94, 0.3)"
       : "0 0 10px rgba(244, 63, 94, 0.15)"
     }}
     animate={{
      width: hovered ? 52 : 28,
      height: hovered ? 52 : 28,
     }}
     transition={{ type: "spring", stiffness: 550, damping: 32 }}
    />
   </motion.div>
  </>
 );
}
