import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-950 text-white py-4 shadow-md fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/creations">Creations</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/collaboration">Collaboration</Link>
      </nav>
    </header>
  );
}