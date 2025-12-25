export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()} Gill Cleaning Services. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <span>Auckland, New Zealand</span>
          <span>•</span>
          <span>Professional Cleaning</span>
        </div>

      </div>
    </footer>
  );
}
