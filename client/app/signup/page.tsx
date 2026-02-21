"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export default function SignupPage() {

  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    role: "client"
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/register",
        form
      );

      console.log(res.data);
      alert("User Registered ✅");

      router.push("/login");

    } catch (err: any) {
      console.log("FULL ERROR:", err);
      console.log("DATA:", err?.response?.data);
      console.log("MSG:", err?.message);
      alert("Registration Failed ❌");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-200 px-6">

      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-slate-800">
          Create Account
        </h2>

        <p className="text-center text-slate-500 mt-2">
          Join ESTATO today
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="role"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
           <option value="client">Client</option>
           <option value="seller">Seller</option>
          <option value="agent">Agent</option>
        </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center text-slate-500 mt-6">
          Already have an account?
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 cursor-pointer ml-1"
          >
            Login
          </span>
        </p>

      </div>

    </main>
  );
}