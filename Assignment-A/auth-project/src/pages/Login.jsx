import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {register,
    reset,
    handleSubmit,
    formState:{errors}
     } = useForm()
    
  let navigate = useNavigate();
  let formSubmit= (data)=>{
   console.log(data)
  reset()
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            E<span className="text-indigo-500">.com</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white mt-6">
            Welcome Back!
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form
        onSubmit={handleSubmit(formSubmit)}
         className="space-y-5">

          <div>
            <label className="text-sm text-slate-300">Email Address</label>
            <input
              {...register("email", {
              required: "email is required",
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
              {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm text-slate-300">Password</label>
            <input
              {...register("password", {
              required: "password is required",
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
              {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" />
              Remember me
            </label>

            <p className="text-indigo-400 hover:text-indigo-300">
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>

        </form>

        {/* Register p */}
        <p className="text-center text-slate-400 text-sm mt-7">
          Don't have an account?
          <button 
          onClick={()=>navigate("/register")}
          className="text-indigo-400 font-semibold hover:underline">
            Register
          </button>
        </p>

      </div>
    </div>
  )
}

export default Login