"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function ScrollSectionBox() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)

  const sections = [
    {
      id: 0,
      title: "Student-Centered Approach",
      content: "Every program is designed with the student at the center, recognizing individual learning styles, needs, and potential.",
      bgGradient: "bg-black",
      icon: "🚀",
    },
    {
      id: 1,
      title: "Excellence in Education",
      content: "We maintain the highest standards in our programs, continuously improving and adapting to best serve our learners.",
      bgGradient: "bg-black",
      icon: "🏢",
    },
    {
      id: 2,
      title: "Inclusive Learning",
      content: "We create inclusive environments where every learner feels valued, respected, and empowered to succeed.",
      bgGradient: "bg-black",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Continuous Innovation",
      content: "We embrace new methodologies, technologies, and approaches to enhance the learning experience.",
      bgGradient: "bg-black",
      icon: "📞",
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling.current) return

      const delta = e.deltaY

      if (delta > 0 && activeSection < sections.length - 1) {
        // Scroll down
        isScrolling.current = true
        setActiveSection((prev) => prev + 1)
        setTimeout(() => {
          isScrolling.current = false
        }, 800)
      } else if (delta < 0 && activeSection > 0) {
        // Scroll up
        isScrolling.current = true
        setActiveSection((prev) => prev - 1)
        setTimeout(() => {
          isScrolling.current = false
        }, 800)
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [activeSection, sections.length])

  const goToSection = (index: number) => {
    if (isScrolling.current) return
    isScrolling.current = true
    setActiveSection(index)
    setTimeout(() => {
      isScrolling.current = false
    }, 800)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-8">
      <div className="relative">
        {/* Main Container Box */}
        <div
          ref={containerRef}
          className="w-[1200px] h-[600px] bg-white rounded-5xl shadow-2xl overflow-hidden relative cursor-pointer"
        >
          {/* Two Column Layout */}
          <div className="flex h-full">
            {/* Left Column - Our Values (Permanent) */}
            <div className="w-1/3 bg-gray-800 text-white p-6 flex flex-col justify-center">
              <h3 className="text-6xl font-bold mb-16 text-center text-cyan-300 scroll">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-2xl">Student-Centered Approach</h4>
                    {/* <p className="text-lg text-slate-400">Every program is designed with the student at the center, recognizing individual learning styles, needs, and potential.</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-2xl">Excellence in Education</h4>
                    {/* <p className="text-lg text-slate-400">We maintain the highest standards in our programs, continuously improving and adapting to best serve our learners.</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-2xl">Inclusive Learning</h4>
                    {/* <p className="text-lg text-slate-400">We create inclusive environments where every learner feels valued, respected, and empowered to succeed.</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-2xl">Continuous Innovation</h4>
                    {/* <p className="text-lg text-slate-400">We embrace new methodologies, technologies, and approaches to enhance the learning experience.</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Transitioning Sections */}
            <div className="w-2/3 relative overflow-hidden">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out",
                    `bg-gradient-to-br ${section.bgGradient}`,
                    activeSection === index
                      ? "translate-y-0 opacity-100"
                      : index < activeSection
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0",
                  )}
                >
                  <div className="text-center text-white p-6 ">
                    <div className="text-5xl mb-4">{section.icon}</div>
                    <h2 className="text-6xl font-bold text-white-100" >{section.title}</h2>
                    <p className="text-2xl p-10 opacity-92 leading-relaxed w-100% text-center text-slate-400">{section.content}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-lg font-medium">
                        {index + 1} of {sections.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Scroll Hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-xs">
                {activeSection < sections.length - 1 ? "Scroll to continue" : "End"}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Navigation Points */}
        <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={cn(
                  "w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-125 relative group",
                  activeSection === index
                    ? "bg-blue-500 border-black shadow-lg scale-110"
                    : "bg-white border-black hover:border-slate-400 shadow-md",
                )}
                aria-label={`Go to section ${index + 1}: ${section.title}`}
              >
                {/* Tooltip */}
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {section.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-[-40px] left-0 right-0">
          <div className="w-full bg-black rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#22f8ff] to-[#4053bd] h-2 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
            />
          </div>
          {/* <div className="text-center mt-2 text-sm text-gray-600">
            Section {activeSection + 1} of {sections.length}
          </div> */}
        </div>
      </div>
    </div>
  )
}
