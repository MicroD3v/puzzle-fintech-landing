import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { CreditCard, TrendingUp, ShieldCheck, Cpu } from "lucide-react";


function AnimatedYieldCounter({ isVisible }) {
  const [count, setCount] = useState(0.0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = 99.9;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
   <span className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight tabular-nums">
      {count.toFixed(1)}%
    </span>
  );
}


function TypewriterTerminal({ isVisible }) {
  const codeLines = [
    'const client = puzzle.initialize("pk_live_8392");',
    'await client.transfers.route({',
    '  amount: 250000,',
    '  currency: "USD"',
    '});'
  ];

  const [displayedLines, setDisplayedLines] = useState(["", "", "", "", ""]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    if (currentLineIdx < codeLines.length) {
      const currentFullLine = codeLines[currentLineIdx];

      if (currentCharIdx < currentFullLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const next = [...prev];
            next[currentLineIdx] = currentFullLine.slice(0, currentCharIdx + 1);
            return next;
          });
          setCurrentCharIdx((prev) => prev + 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIdx((prev) => prev + 1);
          setCurrentCharIdx(0);
        }, 150);
        return () => clearTimeout(timeout);
      }
    }
  }, [isVisible, currentLineIdx, currentCharIdx]);

  return (
   <div className="mt-8 bg-black/20 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.05] rounded-xl p-5 font-mono text-xs text-gray-500 dark:text-gray-400 shadow-inner leading-relaxed min-h-[120px] flex flex-col justify-center">
     <div className="min-h-[1.5rem]">
       {displayedLines[0] && (
        <>
          <span className="text-accentEmerald">const</span> client = puzzle.initialize(
          <span className="text-rose-400">"pk_live_8392"</span>);
        </>
       )}
       {currentLineIdx === 0 && (
        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-accentViolet ml-0.5 font-bold">|</motion.span>
       )}
     </div>

     <div className="min-h-[1.5rem]">
       {displayedLines[1] && (
        <>
          <span className="text-accentEmerald">await</span> client.transfers.route({`{`}
        </>
       )}
       {currentLineIdx === 1 && (
        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-accentViolet ml-0.5 font-bold">|</motion.span>
       )}
     </div>

     <div className="min-h-[1.5rem] pl-4">
       {displayedLines[2] && (
        <>
          amount: <span className="text-amber-500">250000</span>,
        </>
       )}
       {currentLineIdx === 2 && (
        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-accentViolet ml-0.5 font-bold">|</motion.span>
       )}
     </div>

     <div className="min-h-[1.5rem] pl-4">
       {displayedLines[3] && (
        <>
          currency: <span className="text-rose-400">"USD"</span>
        </>
       )}
       {currentLineIdx === 3 && (
        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-accentViolet ml-0.5 font-bold">|</motion.span>
       )}
     </div>

     <div className="min-h-[1.5rem]">
       {displayedLines[4] && <>{`})`};</>}
       {currentLineIdx >= 4 && (
        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-accentViolet ml-0.5 font-bold">|</motion.span>
       )}
     </div>
   </div>
  );
}

export default function BentoGrid() {
  const cardContainerRef = useRef(null);
  const apiCardRef = useRef(null);


  const yieldCardRef = useRef(null);
  const [yieldVisible, setYieldVisible] = useState(false);
  const [apiVisible, setApiVisible] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  useEffect(() => {

    const apiObserver = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setApiVisible(true);
         apiObserver.disconnect();
       }
     },
     { threshold: 0.2 }
    );

    // Observer for Counter Card
    const yieldObserver = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setYieldVisible(true);
         yieldObserver.disconnect();
       }
     },
     { threshold: 0.3 }
    );

    if (apiCardRef.current) apiObserver.observe(apiCardRef.current);
    if (yieldCardRef.current) yieldObserver.observe(yieldCardRef.current);

    return () => {
      apiObserver.disconnect();
      yieldObserver.disconnect();
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsCardHovered(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
   <section id="features" className="pt-32 pb-24 max-w-7xl mx-auto px-6">
     <div className="text-center max-w-3xl mx-auto mb-16">
       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
         Engineered for fast-scaling operational teams
       </h2>
       <p className="text-gray-600 dark:text-gray-400 mt-4">
         Eliminate fragmented banking logic. Handle card issuance, algorithmic
         liquidity, and treasury reporting inside one unified terminal.
       </p>
     </div>

     <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
     >
       {/* Card 1: Corporate Cards Box */}
       <motion.div
        ref={cardContainerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={handleMouseLeave}
        variants={cardVariants}
        className="md:col-span-2 bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between group overflow-hidden relative shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-accentViolet/30 transition-all duration-300"
        style={{ perspective: 1000 }}
       >
         <div className="absolute top-0 right-0 w-48 h-48 bg-accentViolet/5 rounded-full blur-2xl group-hover:bg-accentViolet/10 transition-colors" />
         <div>
           <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-accentViolet rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
             <CreditCard />
           </div>
           <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
             Smart Multi-Currency Corporate Cards
           </h3>
           <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
             Deploy localized virtual and physical cards built with custom
             individual user budgets, approval flows, and real-time transaction
             reporting maps.
           </p>
         </div>

         <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="mt-8 self-center w-full max-w-sm h-48 bg-gradient-to-br from-accentViolet to-[#E13554] rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between select-none relative transition-shadow duration-300"
         >
           <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none transition-opacity duration-500 ${
             isCardHovered ? 'opacity-100' : 'opacity-0'
            }`}
           />

           <div style={{ transform: "translateZ(35px)" }} className="flex justify-between items-start">
             <div>
               <p className="text-xs uppercase opacity-60 tracking-widest">
                 Puzzle Business
               </p>
               <h4 className="text-lg font-mono font-bold mt-1">
                 4532 •••• •••• 8824
               </h4>
             </div>
             <div className="w-10 h-8 bg-white/20 rounded-md backdrop-blur" />
           </div>

           <div style={{ transform: "translateZ(20px)" }} className="flex justify-between items-end">
             <div>
               <p className="text-[10px] uppercase opacity-60">Card Holder</p>
               <p className="text-sm font-medium tracking-wide">Alex Rivers</p>
             </div>
             <span className="font-bold italic text-lg">VISA</span>
           </div>
         </motion.div>
       </motion.div>

       {/* Card 2: Yield Automation Box */}
       <motion.div
        ref={yieldCardRef}
        variants={cardVariants}
        className="bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-accentEmerald/30 transition-all duration-300 min-h-[240px]"
       >
         <div>
           <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-accentEmerald rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
             <TrendingUp />
           </div>

           {/* 🚀 Dynamic Counter Component Instance */}
           <div className="mt-6 min-h-[40px] flex items-baseline">
             <AnimatedYieldCounter isVisible={yieldVisible} />
           </div>

           <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">
             99.9% Yield Automation
           </h3>
           <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
             Route idle payroll reserves dynamically across premium government
             treasury bills safely.
           </p>
         </div>
       </motion.div>

       {/* Card 3: Compliance Box */}
       <motion.div
        variants={cardVariants}
        className="bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-amber-500/30 transition-all duration-300"
       >
         <div>
           <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-amber-500 rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
             <ShieldCheck />
           </div>
           <h3 className="text-xl font-bold mt-6 text-gray-900 dark:text-white">
             SOC2 Compliance Lock
           </h3>
           <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
             Enterprise identity governance layers handling cross-border
             transaction compliance routing natively.
           </p>
         </div>
       </motion.div>

       {/* Card 4: Deep Linked Ledger API */}
       <motion.div
        ref={apiCardRef}
        variants={cardVariants}
        className="md:col-span-2 bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between group overflow-hidden relative shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-accentViolet/30 transition-all duration-300"
       >
         <div className="absolute top-0 right-0 w-48 h-48 bg-accentEmerald/3 rounded-full blur-2xl group-hover:bg-accentEmerald/6 transition-colors" />
         <div>
           <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-accentViolet rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
             <Cpu />
           </div>
           <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
             Deep-Linked Ledger API
           </h3>
           <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md text-sm">
             Inject clean programmatic ledgers directly into QuickBooks, Xero,
             or legacy ERP architectures using simple webhooks.
           </p>
         </div>

         <TypewriterTerminal isVisible={apiVisible} />
       </motion.div>
     </motion.div>
   </section>
  );
}
