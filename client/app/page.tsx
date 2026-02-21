"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {

  const router = useRouter();

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-200 flex items-center justify-center px-6">

      <div className="max-w-5xl w-full text-center">

        {/* Title */}
        <h1 className="text-5xl font-bold text-slate-800 leading-tight">
          Welcome to <span className="text-blue-600">ESTATO</span> 🏠
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-slate-600">
          Buy, Sell & Connect — All in One Smart Real Estate Platform
        </p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Buy & Sell</h3>
            <p className="text-sm text-slate-500 mt-2">
              Discover properties or list your own effortlessly
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Agent Network</h3>
            <p className="text-sm text-slate-500 mt-2">
              Connect with trusted real estate professionals
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Smart Negotiation</h3>
            <p className="text-sm text-slate-500 mt-2">
              Built-in chat to finalize deals seamlessly
            </p>
          </div>

        </div>

        {/* CTA */}
        <button
          onClick={() => router.push("/signup")}
          className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </button>

      </div>

    </main>
  );
}