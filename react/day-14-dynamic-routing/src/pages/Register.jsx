
import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

        {/* Logo */}
        <div className="mb-7 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            E<span className="text-sky-400">.</span>com
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Create an account and start shopping.
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Fill in your details to get started.
          </p>
        </div>

        {/* Form UI */}
        <form className="space-y-4">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 accent-sky-400"
            />

            <label
              htmlFor="terms"
              className="text-sm leading-5 text-slate-400"
            >
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            Create Account
          </button>

        </form>

        {/* Sign In Text */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <span className="font-semibold text-sky-400">
            Sign In
          </span>
        </p>

        {/* Back to Home Text */}
        <div className="mt-5 border-t border-slate-800 pt-5 text-center">
          <p className="text-sm text-slate-400">
            ← Back to Home
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;

