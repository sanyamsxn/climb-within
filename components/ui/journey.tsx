// "use client";

// import { useRef, useState, useLayoutEffect, useEffect } from "react"
// import { motion, useScroll, useTransform, motionValue } from "framer-motion"
// import { Mountain, Flag, Compass, Target, ArrowRight } from "lucide-react"


// export default function Journey() {
// const containerRef = useRef<HTMLDivElement>(null)
// const [refReady, setRefReady] = useState(false)

// useEffect(() => {
//   if (containerRef.current) {
//     setRefReady(true)
//   }
// }, [])

// const { scrollYProgress } = useScroll(
//   refReady
//     ? { target: containerRef, offset: ["start center", "end center"] }
//     : {}
// )

//   // Control whether to use real scroll or fallback
//   const [mounted, setMounted] = useState(false)

//   useLayoutEffect(() => {
//     // Ensures this runs after layout is complete
//     setMounted(true)
//   }, [])

//   const pathLength = useTransform(
//     mounted ? scrollYProgress : motionValue(0),
//     [0, 1],
//     [0, 1]
//   )


//   const timelineData = [
//     {
//       id: 1,
//       title: "The Beginning",
//       description:
//         "Founded in 2024, Bankuru Services Private Limited began with a simple mission — to build impactful products that serve people, not just markets.",
//       icon: Mountain,
//       // Dot position on path
//       dotPosition: { x: "53.5%", y: "10%" },
//       // Card position (offset from dot)
//       cardPosition: { x: "53.5%", y: "10%" },
//       year: "2024",
//     },
//     {
//       id: 2,
//       title: "First Summit",
//       description:
//         "Reached our first major milestone by establishing core services and building a dedicated team of mountain enthusiasts.",
//       icon: Flag,
//       // Dot position on path
//       dotPosition: { x: "52.5%", y: "35%" },
//       // Card position (offset from dot)
//       cardPosition: { x: "19.5%", y: "35%" },
//       year: "2024",
//     },
//     {
//       id: 3,
//       title: "Expanding Horizons",
//       description:
//         "From an idea to a growing ecosystem, our goal is to launch ventures that are bold, practical, and globally scalable — starting right here in India.",
//       icon: Compass,
//       // Dot position on path
//       dotPosition: { x: "45.6%", y: "60.5%" },
//       // Card position (offset from dot)
//       cardPosition: { x: "45.6%", y: "60.5%" },
//       year: "2025",
//     },
//     {
//       id: 4,
//       title: "What's Ahead?",
//       description:
//         "Building sustainable mountain tourism experiences while preserving the natural beauty and supporting local communities.",
//       icon: Target,
//       // Dot position on path
//       dotPosition: { x: "55.5%", y: "85%" },
//       // Card position (offset from dot)
//       cardPosition: { x: "22.5%", y: "85%" },
//       year: "Future",
//       isSpecial: true,
//     },
//   ]

//   return (
//     <div className="h-[2150px] w-100% bg-black text-white overflow-hidden">
//       <div className="container mx-auto px-4 py-16">
//         <motion.h1
//           className="text-6xl md:text-8xl journey font-bold text-center mb-24  h-[125px]"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 1 }}
//         >
//           Journey
//         </motion.h1>

//         <div ref={containerRef} className="relative h-[1600px] w-full px-4 md:px-8 ">
//           {/* Curved SVG Path */}
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 800 1000"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
            

//             {/* Background path */}
//             <path
//               d="M400 0 Q520 250 400 400 Q310 550 400 700 Q520 850 400 1000"
//               stroke="rgba(59, 130, 246, 0.2)"
//               strokeWidth="2"
//               fill="none"
//               strokeDasharray="12,5"
//             />

//             {/* Animated path */}
//             <motion.path
//               d="M400 0 Q520 250 400 400 Q310 550 400 700 Q520 850 400 1000"

//               stroke="#6495ED"
//               strokeWidth="3"
//               fill="none"
//               filter="url(#glow)"
//               style={{
//                 pathLength: pathLength,
//               }}
//               strokeDasharray="1"
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Timeline Items */}
//           {timelineData.map((item, index) => (
//             <div key={item.id}>
              

//               {/* Dot on Path */}
//               <motion.div
//                 className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50 z-20"
//                 style={{
//                   left: item.dotPosition.x,
//                   top: item.dotPosition.y,
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.2,
//                   type: "spring",
//                   stiffness: 200,
//                 }}
//                 viewport={{ once: false, margin: "-100px" }}
//               >
//                 {/* Pulsing ring effect */}
//                 <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
//               </motion.div>

//               {/* Timeline Card */}
//               <motion.div
//                 className="absolute z-10"
//                 style={{
//                   left: item.cardPosition.x,
//                   top: item.cardPosition.y,
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.2 + 0.3,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 viewport={{ once: true, margin: "-100px" }}
//               >
//                 <div
//                   className={`
//                     relative p-8 rounded-2xl backdrop-blur-sm border border-white/10 max-w-md md:max-w-lg
//                     ${
//                       item.isSpecial
//                         ? "bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-400/30"
//                         : "bg-slate-800/80 hover:bg-slate-700/80"
//                     }
//                     transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
//                   `}
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div
//                       className={`
//                         p-6 rounded-lg 
//                         ${item.isSpecial ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-blue-500/20 text-blue-400"}
//                       `}
//                     >
//                       <item.icon className="w-5 h-5 " />
//                     </div>
//                     <span className="text-xl font-medium text-blue-300">{item.year}</span>
//                   </div>

//                   <h3 className="text-4xl font-bold mb-2 text-white">{item.title}</h3>
//                   <p className="text-gray-300 text-xl leading-relaxed">{item.description}</p>

//                   {item.isSpecial && (
//                     <div className="mt-4 flex items-center gap-2 text-purple-300 font-medium">
//                       <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-400/30">
//                         WAY IN
//                       </span>
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>
//           ))}

//           {/* Floating particles */}
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Journey() {
  const [particles, setParticles] = useState<
    { left: string; top: string; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate random particle positions only once after mount
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative w-full h-270 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-bold mb-28 text-center"
      >
        Our Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-purple-500 -translate-x-1/2" />

        <div className="space-y-24">
          {[
            {
              year: "2022",
              text: "Conducted the first outdoor learning camps and workshops. Started with a small passionate team in the mountains",
            },
            {
              year: "2023",
              text: "Designed custom training programs for students and young professionals. Introduced the “Learn on the Peaks” initiative combining trekking with skill training.",
            },
            {
              year: "2024",
              text: "Trained 500+ learners through outdoor education. Collaborated with corporates for leadership & team-building retreats.",
            },
            {
              year: "2025",
              text: "Officially launched a dedicated mountain education startup. Vision: Create India's largest network of mountain learning experiences. Mission: Train thousands through adventure, resilience, and real-world skills.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative w-1/2 px-6 ${
                index % 2 === 0 ? "text-right ml-auto" : "text-left mr-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-4 border-gray-900 ${
                  index % 2 === 0 ? "-left-2" : "-right-2"
                }`}
              />

              <h3 className="text-2xl font-semibold text-blue-300">
                {item.year}
              </h3>
              <p className="mt-2 text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
          }}
        />
      ))}
    </section>
  );
}


