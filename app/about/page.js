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
        a results-driven <span className="text-green-400 font-semibold">Full Stack Developer</span> 
        with a strong foundation in modern web technologies. I specialize in 
        building <span className="text-blue-400">scalable applications</span>, 
        crafting <span className="text-pink-400">intuitive user interfaces</span>, 
        and turning ideas into impactful digital solutions.
      </motion.p>

      {/* Skills / Highlights Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl"
      >
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">Frontend</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Skilled in <span className="text-white">React.js</span>, 
            <span className="text-white"> Next.js</span>, and modern UI frameworks 
            to deliver elegant, responsive, and user-focused designs.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Backend</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experienced with <span className="text-white">Django</span>, 
            <span className="text-white"> Node.js</span>, and REST APIs, 
            ensuring performance, security, and scalability.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-green-400 mb-3">Other Skills</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Strong problem-solving mindset with knowledge of 
            <span className="text-white"> Git</span>, 
            <span className="text-white"> Cloud Services</span>, 
            and collaborative development practices.
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
        “I believe in creating technology that is not only functional but also inspiring.”
      </motion.p>
    </div>
  );
}