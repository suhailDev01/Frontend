import React from 'react'


const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            E<span className="text-indigo-500">.com</span>
          </h1>

          <h2 className="text-2xl font-semibold text-white mt-6">
            Create Account
          </h2>

          <p className="text-slate-400 mt-2 text-sm">
            Sign up to get started with E.com
          </p>
        </div>

        {/* Register Form */}
        <form className="space-y-4">

          <div>
            <label className="text-sm text-slate-300">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Create Account
          </button>

        </form>

        {/* Login p */}
        <p className="text-center text-slate-400 text-sm mt-7">
          Already have an account?{' '}
          <p className="text-indigo-400 font-semibold hover:underline">
            Login
          </p>
        </p>

      </div>
    </div>
  )
}

export default Register