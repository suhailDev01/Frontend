import React from 'react'

const Contact = () => {
return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-blue-100 px-6"> <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"> <h1 className="text-4xl font-bold text-gray-800 text-center">
Contact <span className="text-blue-600">Us</span> </h1>

    <p className="mt-3 text-center text-gray-500">
      Have a question? Send us a message.
    </p>

    <form className="mt-8 space-y-5">
      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Message
        </label>
        <textarea
          rows="4"
          placeholder="Write your message..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

)
}

export default Contact
