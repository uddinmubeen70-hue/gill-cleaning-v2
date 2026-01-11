"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

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

        {/* Mobile Button - ☰ */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <nav className="md:hidden bg-black/90 text-white px-6 pb-5 flex flex-col gap-5 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/quote" onClick={() => setOpen(false)} className="font-semibold text-blue-400">Get a Quote</Link>
        </nav>
      )}
    </header>
  );
}
