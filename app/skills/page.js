import { SiPython, SiJavascript, SiDjango, SiReact, SiMysql, SiBootstrap, SiCplusplus } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-400 text-6xl" /> },
  { name: "C / C++", icon: <SiCplusplus className="text-blue-400 text-6xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-6xl" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400 text-6xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-500 text-6xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-6xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-6xl" /> },
  { name: "Git & GitHub", icon: <FaCode className="text-white text-6xl" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold mb-10">Technical Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gray-800 hover:scale-110 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}