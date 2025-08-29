"use client";
import Link from "next/link";
export default function NewsEvents() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Coming Soon
        </h1>
        {/* Back Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm sm:text-base font-medium text-gray-700 bg-white rounded-md shadow hover:bg-gray-100 transition"
          >
            ← Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
