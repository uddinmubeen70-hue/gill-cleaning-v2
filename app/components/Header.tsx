"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">

        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Gill Cleaning Services
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/quote" className="font-semibold text-blue-400">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
