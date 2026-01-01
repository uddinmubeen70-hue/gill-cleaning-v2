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
            high-quality cleaning solutions for homes, offices, and
            commercial spaces.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* WHO WE ARE */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              We are a dedicated team of experienced cleaning professionals
              focused on maintaining clean, safe, and hygienic environments.
            </p>
            <p className="text-gray-700">
              From small offices to large commercial facilities, every space
              is treated with the same care and professionalism.
            </p>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Us
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Reliable & punctual service</li>
              <li>✔ Experienced & trained staff</li>
              <li>✔ High cleaning standards</li>
              <li>✔ Safe & hygiene-focused practices</li>
              <li>✔ Flexible cleaning schedules</li>
            </ul>
          </div>

        </div>

        {/* COMMITMENT */}
        <div className="bg-white rounded-2xl p-12 shadow-sm text-center mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Our Commitment
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            We build long-term relationships by delivering dependable
            cleaning services, clear communication, and consistent results
            — every single time.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition"
          >
            Contact Us Today
          </a>
        </div>

      </div>
    </main>
  );
}
