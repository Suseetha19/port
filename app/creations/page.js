"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Creations() {
  const projects = [
    {
      title: "Healthcare Live Chat System",
      description:
        "Designed a real-time live chat system enabling patients to interact with admins via WebSocket-based messaging. Implemented a custom AI ChatBot that takes over when the admin is offline, collects patient details and ensures uninterrupted interaction. Integrated a 'Go to Live Chat' feature allowing the admin to seamlessly resume ongoing conversations.",
    },
    {
      title: "Student Database Management System",
      description:
        "Developed a student management portal enabling admins to view and edit student payment records and fee status, improving data access efficiency by 60%. Implemented secure role-based access control and intuitive UI to streamline data entry.",
    },
    {
      title: "Climate Analysis Dashboard",
      description:
        "Analyzed 2+ years of historical climate data using Python, Pandas, and NumPy, helping identify weather trends across districts. Created a Python-based dashboard for weather condition viewing with a user-friendly interface, enhancing decision-making.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        ✨ My Creations
      </h2>

      <div className="relative w-full max-w-3xl h-80 overflow-hidden rounded-2xl shadow-2xl border border-gray-700">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              {projects[current].title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {projects[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex mt-6 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-pink-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}