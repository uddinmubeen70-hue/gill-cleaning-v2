export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            About Gill Cleaning Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            A trusted professional cleaning company delivering reliable,
            high-quality cleaning solutions across New Zealand.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* WHO WE ARE */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              We are a dedicated team of experienced cleaning professionals
              focused on maintaining clean, safe, and hygienic environments.
            </p>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Reliable & punctual service</li>
              <li>✔ Experienced & trained staff</li>
              <li>✔ High cleaning standards</li>
              <li>✔ Safe & hygiene-focused practice</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold"
          >
            Contact Us Today
          </a>
        </div>

      </div>
    </main>
  );
}
