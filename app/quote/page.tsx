"use client";
import { useState } from "react";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Error sending message");
    }
  };

  return (
    <main className="bg-gray-50 pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h1 className="text-3xl font-bold text-blue-600 mb-8">
          Get a Quote
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow rounded-xl space-y-4 text-left"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Send Request
          </button>
        </form>
      </div>
    </main>
  );
}