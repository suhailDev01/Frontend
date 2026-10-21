import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-white to-blue-100 px-6">
      
      <h1 className="text-5xl font-bold text-gray-800">
        About <span className="text-blue-600">Us</span>
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-gray-600">
        We are learning modern web development using React. This page helps us
        practice routing and navigation.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-xl bg-white p-6 shadow-md text-center">
          <h2 className="text-xl font-bold text-blue-600">HTML</h2>
          <p className="mt-2 text-gray-600">Page Structure</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md text-center">
          <h2 className="text-xl font-bold text-blue-600">CSS</h2>
          <p className="mt-2 text-gray-600">Page Styling</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md text-center">
          <h2 className="text-xl font-bold text-blue-600">React</h2>
          <p className="mt-2 text-gray-600">UI Development</p>
        </div>
      </div>
    </div>
  );
};

export default About;
