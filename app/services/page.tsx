export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-28">
      <div className="mx-auto max-w-6xl px-6">

        <h1 className="mb-10 text-center text-3xl md:text-4xl font-bold">
          Our Cleaning Services
        </h1>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Service Card */}
          <div className="rounded-xl border p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Commercial Cleaning
            </h2>
            <p className="text-gray-700">
              Professional cleaning solutions for offices, retail spaces,
              schools, and commercial buildings. Reliable, consistent,
              and tailored to your business needs.
            </p>
          </div>

          {/* Service Card */}
          <div className="rounded-xl border p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Residential Cleaning
            </h2>
            <p className="text-gray-700">
              High-quality home cleaning services including regular
              maintenance, deep cleaning, and move-in or move-out
              cleans for a spotless home.
            </p>
          </div>

          {/* Service Card */}
          <div className="rounded-xl border p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              One-Off & Deep Cleaning
            </h2>
            <p className="text-gray-700">
              Detailed one-off cleaning services designed for end-of-lease,
              renovations, or special occasions requiring extra care.
            </p>
          </div>

          {/* Service Card */}
          <div className="rounded-xl border p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Custom Cleaning Plans
            </h2>
            <p className="text-gray-700">
              Flexible cleaning schedules and customised plans to suit
              your specific requirements, timing, and budget.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
