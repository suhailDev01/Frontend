import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";


const Login = () => {
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
            Welcome Back!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Login to your E.com account
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

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
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <button
              type="button"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
          
            className="font-bold text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </p>

        {/* Home Link */}
        <div className="mt-5 text-center">
          <div
        
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            ← Continue Shopping
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;