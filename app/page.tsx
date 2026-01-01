export default function HomePage() {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/home-bg.jpg"
        alt="Gill Cleaning Services"
        className="
          absolute inset-0 w-full h-full object-cover
          brightness-110
        "
      />

      {/* Responsive Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/35
          sm:bg-black/45
          md:bg-black/55
        "
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Professional Commercial Cleaning
          <br />
          Services in New Zealand
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-200">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="
              bg-blue-600 hover:bg-blue-700
              text-white px-6 py-3
              rounded-md font-medium
              transition
            "
          >
            Get a Free Quote
          </a>

          <a
            href="/services"
            className="
              bg-white text-gray-900
              px-6 py-3 rounded-md
              font-medium
              hover:bg-gray-200
              transition
            "
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
