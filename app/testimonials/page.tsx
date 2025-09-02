"use client";

import Image from "next/image";
import Header from "@/components/header";

const testimonials = [
  {
    name: "Marcus Rodriguez",
    role: "Product Manager, InnovateX",
    quote:
      "The customer support is exceptional, and the platform itself is incredibly robust. We've been able to streamline our entire workflow.",
    image: "/photos/pf-1.jpg", // ✅ inside public/photos/
  },
  {
    name: "Emily Watson",
    role: "Creative Director, DesignStudio",
    quote:
      "As a creative professional I need tools that don't limit my imagination. This platform provides exactly that – unlimited possibilities.",
    image: "/photos/pf-1.jpg",
  },
  {
    name: "Daniel Lee",
    role: "CEO, FutureTech",
    quote:
      "This platform has transformed the way our team collaborates. Efficiency and creativity have both skyrocketed.",
    image: "/photos/pf-1.jpg",
  },
];

export default function TestimonialsSection() {
  return (
   <>
    <div id="headerP">
                    <Header/>
                </div>
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black h-200  py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-100 leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-gray-400">
              Don&apos;t just take our word for it. Here&apos;s what industry
              leaders and innovators have to say about their experience with our
              platform.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="lg:col-span-2 overflow-x-auto flex gap-6 snap-x snap-mandatory pb-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-[320px] flex-shrink-0 snap-start rounded-2xl bg-white shadow-lg p-6"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image || "/placeholder.svg"}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="rounded-2xl"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-1 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold">Ready to Join Them?</h3>
            <p className="mt-3 text-gray-200">
              Experience the same transformation that these industry leaders
              have. Start your journey today.
            </p>
            <button className="mt-6 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section></>
  );
}
