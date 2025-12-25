import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center text-center">

      {/* Background Image */}
      <img
        src="/home-bg.jpg"
        alt="Cleaning Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Professional Cleaning Services
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Reliable commercial & residential cleaning across New Zealand
        </p>

        {/* Get a Quote Button */}
        <Link href="/contact">
          <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700">
            Get a Quote
          </button>
        </Link>
      </div>

    </section>
  );
}
