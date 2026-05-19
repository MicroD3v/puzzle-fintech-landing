import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for early-stage startups managing capital runways.",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Up 3 corporate debit cards",
        "Real-time ledger syncing",
        "Standard AI expense tagging",
        "Email support response matrix",
      ],
      popular: false,
    },
    {
      name: "Growth",
      description: "Engineered for fast-growing teams automating cashflows.",
      price: { monthly: 49, yearly: 39 },
      features: [
        "Unlimited virtual cards",
        "Multi-currency routing vaults",
        "SOC2 compliance engine",
        "Dedicated account specialist",
        "Priority architectural API hooks",
      ],
      popular: true,
    },
  ];

  return (
   <section
    id="pricing"
    className="py-24 max-w-7xl mx-auto px-6 text-center overflow-visible"
   >
     <div className="max-w-3xl mx-auto mb-12">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_30%,transparent)] text-accentViolet border border-black/[0.05] dark:border-white/[0.08] backdrop-blur-xl shadow-sm">
          Flexible Infrastructure Plans
        </span>
       <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 tracking-tight">
         Predictable scaling pricing
       </h2>
       <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
         Deploy pieces of our global multi-signature rails safely. Transition
         plans fluidly as transaction volume maps expand.
       </p>
     </div>


     <div className="flex items-center justify-center gap-4 mb-16 select-none cursor-pointer group">
        <span
         className={`text-sm font-semibold transition-colors duration-300 ${
          billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-400"
         }`}
        >
          Monthly
        </span>


       <button
        onClick={() =>
         setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
        }
        className="relative w-14 h-7 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-full p-1 flex items-center cursor-none transition-colors group-hover:border-accentViolet/50"
       >

         <motion.div
          layout
          className="w-5 h-5 bg-accentViolet rounded-full shadow-md shadow-accentViolet/40 pointer-events-none"
          animate={{ x: billingCycle === "monthly" ? 0 : 26 }}
          transition={{ type: "spring", stiffness: 450, damping: 25 }}
         />
       </button>

       <span
        className={`text-sm font-semibold flex items-center gap-1.5 transition-colors duration-300 ${
         billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-400"
        }`}
       >
          Yearly
          <span className="text-[10px] font-bold px-2 py-0.5 bg-accentEmerald/10 text-accentEmerald rounded-md border border-accentEmerald/20 uppercase tracking-wide">
            -20%
          </span>
        </span>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
       {plans.map((plan, index) => (
        <motion.div
         key={index}
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{
           delay: index * 0.1,
           duration: 0.6,
           type: "spring",
           stiffness: 80,
         }}
         className={`relative flex flex-col justify-between p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 group shadow-xl ${
          plan.popular
           ? "bg-white/50 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_50%,transparent)] border-accentViolet/30 dark:border-accentViolet/30 shadow-accentViolet/[0.02]"
           : "bg-white/30 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_30%,transparent)] border-black/[0.04] dark:border-white/[0.06] shadow-black/[0.02]"
         } hover:border-accentViolet/40 hover:shadow-2xl dark:hover:shadow-black/50`}
        >
          {plan.popular && (
           <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[10px] font-bold bg-accentViolet text-white tracking-widest uppercase shadow-md shadow-accentViolet/20">
                Most Popular
              </span>
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 min-h-[40px]">
              {plan.description}
            </p>
            <div className="mt-6 flex items-baseline gap-1 min-h-[50px]">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  <AnimatePresence mode="wait">
                    <motion.span
                     key={billingCycle}
                     initial={{ opacity: 0, y: -12 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 12 }}
                     transition={{ duration: 0.18, ease: "easeInOut" }}
                    >
                      ${plan.price[billingCycle]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              <span className="text-sm text-gray-400 font-medium">
                  / month
                </span>
            </div>
            <ul className="mt-8 space-y-4 border-t border-black/[0.05] dark:border-white/[0.05] pt-6">
              {plan.features.map((feature, fIndex) => (
               <li
                key={fIndex}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium"
               >
                 <Check
                  size={16}
                  className="text-accentEmerald shrink-0 mt-0.5"
                 />
                 <span>{feature}</span>
               </li>
              ))}
            </ul>
          </div>
          <button
           className={`w-full mt-8 px-6 py-3 min-w-[125px] rounded-xl text-sm font-semibold cursor-none transition-all duration-300 transform-gpu will-change-transform ${
            plan.popular
             ? "bg-accentViolet text-white hover:bg-rose-600 shadow-lg shadow-accentViolet/20 hover:shadow-xl hover:shadow-rose-500/30 hover:scale-[1.02]"
             : "bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-gray-700 dark:text-gray-300 hover:bg-white/[0.08] dark:hover:bg-white/[0.02] hover:text-white hover:scale-[1.01]"
           } active:scale-[0.98]`}
          >
            Get Started Now
          </button>
        </motion.div>
       ))}
     </div>
   </section>
  );
}
