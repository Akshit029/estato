"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {

  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    email: "",
    password: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5001/api/auth/login",
      form
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    router.replace("/dashboard"); // 🔥 use replace not push

  } catch (err: any) {
    alert("Login Failed ❌");
  }
};

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-200 px-6">

      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-slate-800">
          Welcome Back
        </h2>

        <p className="text-center text-slate-500 mt-2">
          Login to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-center text-slate-500 mt-6">
          Don't have an account?
          <span
            onClick={() => router.push("/signup")}
            className="text-blue-600 cursor-pointer ml-1"
          >
            Sign up
          </span>
        </p>

      </div>

    </main>
  );
}