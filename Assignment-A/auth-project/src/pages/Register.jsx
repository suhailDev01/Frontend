import React from 'react'
import { useNavigate } from 'react-router'
import {useForm} from 'react-hook-form'

const Register = () => {

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
            Create Account
          </h2>

          <p className="text-slate-400 mt-2 text-sm">
            Sign up to get started with E.com
          </p>
        </div>

        {/* Register Form */}
        <form
        onSubmit={handleSubmit(formSubmit)}
         className="space-y-4">

          <div>
            <label className="text-sm text-slate-300">Full Name</label>
            <input 
            {...register("name", {
              required: "name is required",
            })}
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
          </div>

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
              minLength:{value: 6, 
                message: "minimum  length is 6"
              },
            })}
              type="password"
              placeholder="Create a password"
              className="w-full mt-2 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
            />
             {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>

          <div>
            <label className="text-sm text-slate-300">Confirm Password</label>
            <input
             {...register("password", {
              required: "password is required",
              minLength:{value: 6, 
                message: "minimum  length is 6"
              },
            })}
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
          <button
            onClick={()=>navigate("/")}
          className="text-indigo-400 font-semibold hover:underline">
            Login
          </button>
        </p>

      </div>
    </div>
  )
}

export default Register