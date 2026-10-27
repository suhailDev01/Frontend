import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const SignUp = () => {
    let {toggle} = useContext(MyStore)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Logo */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-blue-600">
            E<span className="text-gray-900">.com</span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Join E.com and start shopping!
          </p>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 accent-blue-600"
            />

            <span>
              I agree to the{" "}
              <span className="font-semibold text-blue-600">
                Terms & Conditions
              </span>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            
            className="font-bold text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>

        {/* Home Link */}
        <div className="mt-5 text-center">
          <p
            
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            ← Continue Shopping
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;