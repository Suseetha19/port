import Image from "next/image";
import myPhoto from "@/public/myphoto.jpg"; // ✅ correct path

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      {/* Text Section */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          I&apos;m Suseetha Venkat, a passionate Full Stack Developer
        </h1>
        <p className="mt-2 text-lg text-gray-400 italic">
          Creative Thinker | Problem Solver | Tech Enthusiast
        </p>
      </div>

      {/* Photo Section */}
      <div className="mt-6">
        <Image
          src={myPhoto}
          alt="My Photo"
          width={220}
          height={220}
          className="rounded-full object-cover shadow-lg shadow-blue-500/30"
        />
      </div>
    </section>
  );
}