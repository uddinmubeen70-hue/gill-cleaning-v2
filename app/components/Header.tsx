"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">

          <Link href="/" className="text-lg font-semibold">
            Gill Cleaning Services
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 text-white transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4">
          <span className="font-semibold">Menu</span>
          <button
            className="text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 mt-12 text-lg">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/services">Services</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}
