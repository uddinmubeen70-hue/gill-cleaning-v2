export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-600 mb-12">
          Our Cleaning Services
        </h1>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Office Cleaning */}
          <div className="rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Office Cleaning</h2>
            <p className="text-gray-700 mb-4">
              Daily, weekly, or customised cleaning solutions for offices of all sizes.
            </p>
            <p className="text-blue-600 font-medium">✓ Reliable & Consistent</p>
          </div>

          {/* Commercial Cleaning */}
          <div className="rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Commercial Cleaning</h2>
            <p className="text-gray-700 mb-4">
              Retail stores, clinics, warehouses, and restaurants cleaned with care.
            </p>
            <p className="text-blue-600 font-medium">✓ High-Quality Cleaning</p>
          </div>

          {/* Residential Cleaning */}
          <div className="rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Residential Cleaning</h2>
            <p className="text-gray-700 mb-4">
              Regular house cleaning and move-in / move-out services.
            </p>
            <p className="text-blue-600 font-medium">✓ Safe & Hygiene Focused</p>
          </div>

          {/* Carpet & Upholstery */}
          <div className="rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Carpet & Upholstery</h2>
            <p className="text-gray-700 mb-4">
              Professional carpet and upholstery cleaning for a fresh, clean look.
            </p>
            <p className="text-blue-600 font-medium">✓ Stain & Odour Removal</p>
          </div>

          {/* Window Cleaning */}
          <div className="rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Window Cleaning</h2>
            <p className="text-gray-700 mb-4">
              Interior and exterior window cleaning with a streak-free finish.
            </p>
            <p className="text-blue-600 font-medium">✓ Crystal Clear Finish</p>
          </div>

          {/* Sanitisation */}
          <div className="rounded-2xl border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-3">Sanitisation</h2>
            <p className="text-gray-700 mb-4">
              Professional sanitising services for safer homes and workplaces.
            </p>
            <p className="text-blue-600 font-medium">✓ Health Focused</p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
        </div>

      </div>
    </main>
  );
}
