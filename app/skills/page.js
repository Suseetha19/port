import { SiPython, SiMysql, SiPandas, SiNumpy } from "react-icons/si";
import { FaChartBar, FaDatabase, FaFileExcel, FaChartLine } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-400 text-6xl" /> },
  { name: "SQL / MySQL", icon: <SiMysql className="text-blue-500 text-6xl" /> },
  { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-500 text-6xl" /> },
  { name: "Power BI", icon: <FaChartLine className="text-yellow-500 text-6xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-white text-6xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400 text-6xl" /> },
  { name: "Data Visualization", icon: <FaChartBar className="text-purple-400 text-6xl" /> },
  { name: "Database Management", icon: <FaDatabase className="text-pink-400 text-6xl" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold mb-10">Data Analyst Skills</h1>
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