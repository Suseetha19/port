export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg max-w-2xl text-center leading-relaxed">
        Hi, I’m <span className="text-purple-400 font-semibold">Suseetha</span>, 
        a passionate developer who loves building clean and user-friendly web applications. 
        I enjoy working with <span className="text-blue-400">Next.js</span>, 
        <span className="text-green-400"> React</span>, and modern web technologies to 
        create meaningful digital experiences.
      </p>
    </div>
  );
}