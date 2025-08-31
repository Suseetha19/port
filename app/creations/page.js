"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Creations() {
  const projects = [
    {
      title: "Healthcare Live Chat System",
      description:
        "Built a real-time communication platform enabling patients to interact with admins using WebSockets. Integrated an AI ChatBot that collects patient details when admins are offline and ensures uninterrupted engagement. Added a seamless 'Go to Live Chat' handover for admins to resume conversations instantly.",
      tags: ["WebSockets", "AI Chatbot", "Real-time", "Healthcare"],
      year: "2025",
    },
    {
      title: "Student Database Management System",
      description:
        "Developed a secure and scalable student portal for managing fee payments, records, and status tracking. Implemented role-based access control for admins and built an intuitive UI that improved data efficiency by 60%.",
      tags: ["Django", "MySQL", "RBAC", "UI/UX"],
      year: "2024",
    },
    {
      title: "Climate Analysis Dashboard",
      description:
        "Analyzed over 2 years of district-level weather data using Python, Pandas, and NumPy. Built a dashboard that helps visualize climate patterns and identify trends, enabling better decision-making with a clean, interactive interface.",
      tags: ["Python", "Pandas", "NumPy", "DataViz"],
      year: "2023",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        ✨ My Creations
      </h2>

      {/* Embla Carousel */}
      <div className="overflow-hidden w-full max-w-3xl" ref={emblaRef}>
        <div className="flex">
          {projects.map((proj, index) => (
            <motion.article
              key={index}
              className="flex-[0_0_100%] px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800/60 text-purple-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Year */}
                  <p className="text-gray-500 text-xs">📅 {proj.year}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Helper text for mobile */}
      <p className="mt-6 text-gray-400 text-sm">Swipe ➡ or wait for auto-slide</p>
    </section>
  );
}