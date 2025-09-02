"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
export default function About() {
  const teamImages = [
    { src: "https://images.stockcake.com/public/8/3/9/8396b355-e6f7-48d5-9d15-c5d89397766a_large/mountain-camping-night-stockcake.jpg", label: "Expert Guides" },
    { src: "https://images.pexels.com/photos/2445656/pexels-photo-2445656.jpeg", label: "Hands-on Training" },
    { src: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg", label: "Strong Community" },
  ];

  return (

    <>
    <div id="headerP">
                        <Header/>
                    </div>
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-20 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl mt-35 font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
          About Mountain Education
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          We are dedicated to empowering adventurers with the skills, 
          knowledge, and confidence to explore the peaks of the world safely.  
          From beginner hikers to professional mountaineers, we guide you every step of the way.
        </p>
      </motion.div>

      {/* Interactive Image Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        {teamImages.map((item, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={600}
              height={400}
              className="object-cover w-full h-72 group-hover:scale-110 transition-transform duration-700 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="p-4 text-xl font-semibold">{item.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mission Section */}
      <motion.div
        className="mt-24 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-300">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          To make mountain education accessible, engaging, and safe for everyone.  
          Whether it&apos;s mastering climbing techniques, learning survival skills, or 
          building resilience, we are committed to shaping the next generation of explorers.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button className="px-8 py-4 text-lg font-bold rounded-full bg-indigo-500 cursor-pointer hover:shadow-xl hover:shadow-green-500/40 transition">
          <Link href="/articles" className="contact">
            Discover Insights
          </Link>
        </button>
      </motion.div>
    </div></>
  );
}
