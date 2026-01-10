export default function QuotePage() {
  return (
    <main className="bg-gray-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h1 className="text-3xl font-bold text-blue-600 mb-8">Get a Quote</h1>

        <form className="bg-white p-8 shadow rounded-xl space-y-4">

          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-md h-32" />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold">
            Send Request
          </button>
        </form>
      </div>
    </main>
  );
}
