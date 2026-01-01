import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Gill Cleaning Services",
  description: "Professional cleaning services in New Zealand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 👇 ADD suppressHydrationWarning */}
      <body
        suppressHydrationWarning
        className="bg-white text-gray-900"
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
