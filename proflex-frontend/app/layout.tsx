import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ProFlex Freelance Agency",
  description: "Connecting Freelancers with Global Work Opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Navigation bar */}
        <nav className="bg-blue-700 text-white py-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
            <h1 className="text-xl font-bold">ProFlex Agency</h1>
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/apply" className="hover:text-gray-300">Apply</Link>
              <Link href="#contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
