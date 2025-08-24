import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Collaborate() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-8">Let’s Collaborate</h1>
      
      <p className="text-lg mb-6 max-w-xl text-center">
        I’m always open to exciting collaborations, internships, and projects.  
        Feel free to connect with me through the following platforms:
      </p>
      
      <div className="flex space-x-8 text-4xl">
        <a href="mailto:suseethavenkat@gmail.com" className="hover:text-red-400">
          <FaEnvelope />
        </a>
        <a href="tel:+917708767410" className="hover:text-green-400">
          <FaPhone />
        </a>
        <a href="https://linkedin.com/in/suseetha-venkat-1230a82a6" target="_blank" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Suseetha19" target="_blank" className="hover:text-gray-400">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}