export default function HomePage() {
  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center text-center">

      <img
        src="/home-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white px-4 drop-shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Professional Commercial Cleaning<br />Services in New Zealand
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-100">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="/quote"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700"
          >
            Get a Free Quote
          </a>

          <a
            href="/services"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-300"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
}
