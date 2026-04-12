"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      
      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
      >
        About Me
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg max-w-3xl text-center leading-relaxed text-gray-300"
      >
        Hello! I’m <span className="text-purple-400 font-semibold">Suseetha</span>, 
        a passionate <span className="text-green-400 font-semibold">Data Analyst </span> 
        with strong skills in <span className="text-blue-400">SQL, Microsoft Excel, and Power BI</span>. 
        I specialize in transforming raw data into meaningful insights and building 
        <span className="text-pink-400"> interactive dashboards</span> to support data-driven decision-making.
      </motion.p>

      {/* Skills / Highlights Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl"
      >
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">Data Analysis</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experienced in <span className="text-white">data cleaning</span>, 
            <span className="text-white"> transformation</span>, and 
            <span className="text-white"> analysis</span> to identify patterns and trends 
            from structured datasets.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Visualization</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Skilled in building <span className="text-white">interactive dashboards</span> using 
            <span className="text-white"> Power BI</span> and 
            <span className="text-white"> Excel</span> to present insights clearly.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-green-400 mb-3">Technical Skills</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Proficient in <span className="text-white">SQL</span>, 
            <span className="text-white"> Excel</span>, and 
            <span className="text-white"> Power BI</span>, with a strong 
            focus on problem-solving and data-driven solutions.
          </p>
        </div>
      </motion.div>

      {/* Animated Closing Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-12 text-gray-400 italic text-center max-w-2xl"
      >
        “I believe in transforming data into actionable insights that drive smarter decisions.”
      </motion.p>
    </div>
  );
}