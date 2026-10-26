
import React from "react";
import {useForm} from 'react-hook-form'
import { nanoid } from "nanoid";

const SignIn = () => {
    const{register,
        reset,
        handleSubmit,
        formState:{errors}
    } = useForm()
    const submitHandler=(data)=>{
        console.log(data)
        reset()
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            E<span className="text-sky-400">.</span>com
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Welcome back! Sign in to continue.
          </p>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-white">
            Sign In
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Enter your details to access your account.
          </p>
        </div>

        {/* Form UI */}
        <form 
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Email Address
            </label>

            <input
            {...register('email',{
                required:"Email is required",
            
            })}
            
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
              className="text-sm font-medium text-slate-200">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-sky-400 transition hover:text-sky-300"
              >
                Forgot password?
              </button>
            </div>

            <input
             {...register('password',{
                required:"Password is required",
                minLength:{
                    value:6,
                    message:"Password must be at least 6 characters",
                },
             })}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 accent-sky-400"
            />

            <label
              htmlFor="remember"
              className="text-sm text-slate-400"
            >
              Remember me
            </label>
          </div>

          <button
          
            type="submit"
            className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            Sign In
          </button>

        </form>

        {/* Register Text */}
        <p className="mt-7 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <span className="font-semibold text-sky-400">
            Create account
          </span>
        </p>

        {/* Back to Home Text */}
        <div className="mt-6 border-t border-slate-800 pt-5 text-center">
          <p className="text-sm text-slate-400">
            ← Back to Home
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignIn;

