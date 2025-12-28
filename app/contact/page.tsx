"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Thank you! We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-28">
      <div className="mx-auto max-w-3xl px-6">

        <h1 className="mb-8 text-center text-3xl md:text-4xl font-bold">
          Get a Quote
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your cleaning needs"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-medium hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>

          {status && (
            <p className="text-center mt-4">{status}</p>
          )}

        </form>

      </div>
    </main>
  );
}
