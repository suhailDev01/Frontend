import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-white to-blue-100 px-6"> <h1 className="text-5xl font-bold text-gray-800">
Welcome to <span className="text-blue-600">My Website</span> </h1>


  <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">
    Learn React Router by navigating between Home, About and Contact pages.
  </p>

  <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition">
    Explore More
  </button>

<Outlet />
</div>
)
}

export default Home
