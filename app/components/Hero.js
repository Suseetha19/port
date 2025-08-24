import Image from "next/image";
import myPhoto from "@/public/myphoto.jpg"; // ✅ correct path

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      {/* Text first */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">Hi, I'm Suseetha Venkat</p>
      </div>

      {/* Photo next */}
      <div className="mt-8">
        <Image
          src={myPhoto}
          alt="My Photo"
          width={250}
          height={250}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
}