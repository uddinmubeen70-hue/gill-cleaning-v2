export default function ServicesPage() {
  return (
    <main className="bg-gray-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-14">
          Our Cleaning Services
        </h1>

        {/* Service Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Office Cleaning */}
          <div className="bg-white p-8 shadow-sm rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
            <p className="text-gray-600 mb-2">
              Daily, weekly or customised cleaning solutions for offices.
            </p>
            <p className="text-blue-600 text-sm">✓ Reliable & Consistent</p>
          </div>

          {/* Commercial Cleaning */}
          <div className="bg-white p-8 shadow-sm rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
            <p className="text-gray-600 mb-2">
              Retail stores, clinics, warehouses & restaurants.
            </p>
            <p className="text-blue-600 text-sm">✓ High-Quality Cleaning</p>
          </div>

          {/* Residential Cleaning */}
          <div className="bg-white p-8 shadow-sm rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
            <p className="text-gray-600 mb-2">
              Regular home cleaning & move-in/move-out services.
            </p>
            <p className="text-blue-600 text-sm">✓ Safe & Hygiene Focused</p>
          </div>

          {/* Carpet & Upholstery */}
          <div className="bg-white p-8 shadow-sm rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Carpet & Upholstery</h3>
            <p className="text-gray-600 mb-2">
              Professional carpet & upholstery cleaning for a fresh look.
            </p>
            <p className="text-blue-600 text-sm">✓ Stain & Odour Removal</p>
          </div>

          {/* Window Cleaning */}
          <div className="bg-white p-8 shadow-sm rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Window Cleaning</h3>
            <p className="text-gray-600 mb-2">
              Interior & exterior window cleaning with a streak-free finish.
            </p>
            <p className="text-blue-600 text-sm">✓ Crystal Clear Finish</p>
          </div>

          {/* Sanitisation */}
          <div className="bg-white p-8 shadow-sm rounded-2xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Sanitisation</h3>
            <p className="text-gray-600 mb-2">
              Professional sanitising services for safer homes & workplaces.
            </p>
            <p className="text-blue-600 text-sm">✓ Health Focused</p>
          </div>

        </div>

        {/* Button */}
        <a
          href="/quote"
          className="inline-block mt-12 bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </a>

      </div>
    </main>
  );
}
