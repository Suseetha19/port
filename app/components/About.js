export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fadeIn">
        About Me
      </h1>

      {/* Card Container */}
      <div className="max-w-2xl bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-purple-500/20 transition duration-300 animate-slideUp">
        <p className="text-lg text-center leading-relaxed">
          Hi, I’m <span className="text-purple-400 font-semibold">Suseetha</span>, 
          a passionate developer who loves building clean and user-friendly web applications. 
          I enjoy working with <span className="text-blue-400">Next.js</span>, 
          <span className="text-green-400">React</span>, and modern web technologies to 
          create meaningful digital experiences.
        </p>
      </div>
    </div>
  );
}