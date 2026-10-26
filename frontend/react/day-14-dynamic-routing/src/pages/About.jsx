import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-gray-900">
   
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
     
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
       
          {/* Left Content */}
          <div>
         
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
           
              ABOUT E.COM
            </span>
            <h1 className="mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
           
              Shopping made
              <span className="block text-indigo-600">
             
                simple & better.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
           
              Welcome to E.com, your destination for discovering products you'll
              love. We believe online shopping should be simple, enjoyable, and
              accessible to everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
           
              <p
                
                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
             
                Explore Products →
              </p>
              <span className="flex items-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700">
             
                Your Everyday Store
              </span>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-lg">
         
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-purple-200/60 blur-2xl"></div>
            <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-indigo-200/70 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-4 shadow-2xl shadow-indigo-100">
           
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="Modern clothing and shopping store"
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-lg backdrop-blur-md">
             
                <p className="text-sm font-medium text-gray-500">
               
                  Welcome to
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-indigo-600">
               
                  E.com
                </h2>
                <p className="mt-1 text-sm text-gray-600">
               
                  Find what you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="px-5 py-14 sm:px-10 lg:px-20">
     
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4">
       
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
         
            <h2 className="text-3xl font-extrabold text-indigo-600">01</h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
           
              Easy Shopping
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
         
            <h2 className="text-3xl font-extrabold text-indigo-600">02</h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
           
              Quality Focus
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
         
            <h2 className="text-3xl font-extrabold text-indigo-600">03</h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
           
              Customer First
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
         
            <h2 className="text-3xl font-extrabold text-indigo-600">04</h2>
            <p className="mt-2 text-sm font-medium text-gray-600">
           
              Modern Experience
            </p>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="bg-gray-50 px-5 py-20 sm:px-10 lg:px-20">
     
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
       
          <div className="overflow-hidden rounded-3xl">
         
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=80"
              alt="Online shopping experience"
              className="h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-96"
            />
          </div>
          <div>
         
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
           
              Our Story
            </span>
            <h2 className="mt-4 text-3xl leading-snug font-extrabold sm:text-4xl">
           
              More than shopping,
              <span className="text-indigo-600"> it's an experience.</span>
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
           
              At E.com, our goal is to make finding the right product easier. We
              bring products from different categories together in one
              convenient place, so you can explore your options without
              unnecessary hassle.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
           
              From browsing products to discovering something new, we aim to
              create a clean, user-friendly shopping experience that puts your
              needs first.
            </p>
            <div className="mt-8 flex items-start gap-4">
           
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
             
                💜
              </div>
              <div>
             
                <h3 className="font-bold text-gray-900">
               
                  Built Around You
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
               
                  A shopping experience designed with simplicity and convenience
                  in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="px-5 py-20 sm:px-10 lg:px-20">
     
        <div className="mx-auto max-w-6xl">
       
          <div className="mx-auto max-w-2xl text-center">
         
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
           
              What We Believe
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
           
              What makes E.com different?
            </h2>
            <p className="mt-4 leading-7 text-gray-500">
           
              Our focus is on making every step of your shopping journey feel
              clear, convenient, and enjoyable.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
         
            {/* Card 1 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
           
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl transition group-hover:bg-indigo-600">
             
                🛍️
              </div>
              <h3 className="mt-6 text-xl font-bold"> Easy Shopping </h3>
              <p className="mt-3 leading-7 text-gray-500">
             
                Explore different products through a clean and simple shopping
                interface.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl">
           
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
             
                ✨
              </div>
              <h3 className="mt-6 text-xl font-bold"> Quality & Style </h3>
              <p className="mt-3 leading-7 text-gray-500">
             
                Discover products across categories and find options that match
                your personal style.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl">
           
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
             
                💗
              </div>
              <h3 className="mt-6 text-xl font-bold"> Customer First </h3>
              <p className="mt-3 leading-7 text-gray-500">
             
                We believe a good shopping experience starts with understanding
                what customers need.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="px-5 pb-20 sm:px-10 lg:px-20">
     
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-indigo-600 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
       
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-purple-400/20"></div>
          <div className="relative z-10 mx-auto max-w-3xl">
         
            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
           
              Our Mission
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-extrabold sm:text-5xl">
           
              Making online shopping
              <span className="block text-indigo-200">
             
                simpler for everyone.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-indigo-100">
           
              We want to bring convenience, discovery, and a better shopping
              experience together in one place.
            </p>
            <p
          
              className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
           
              Start Exploring →
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-5 py-8 sm:px-10 lg:px-20">
     
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
       
          <div>
         
            <h2 className="text-2xl font-extrabold text-indigo-600">
           
              e.com<span className="text-gray-900">.</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
           
              Find what you love.
            </p>
          </div>
          <p className="text-center text-sm text-gray-500">
         
            © {new Date().getFullYear()} E.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default About