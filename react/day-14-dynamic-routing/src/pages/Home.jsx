import React from "react";
import { Link } from "react-router";

const Home = () => {
const categories = [
{
name: "Men's Clothing",
icon: "👔",
color: "bg-blue-100",
},
{
name: "Women's Clothing",
icon: "👗",
color: "bg-pink-100",
},
{
name: "Jewellery",
icon: "💎",
color: "bg-purple-100",
},
{
name: "Electronics",
icon: "🎧",
color: "bg-yellow-100",
},
];

const products = [
{
id: 1,
title: "Classic Everyday Backpack",
category: "Men's Clothing",
price: 109.95,
image:
"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
rating: 3.9,
},
{
id: 2,
title: "Elegant Gold Bracelet",
category: "Jewellery",
price: 64.99,
image:
"https://fakestoreapi.com/img/61sbMiUnoGL.*AC_UL640_QL65_ML3*.jpg",
rating: 4.2,
},
{
id: 3,
title: "Premium Casual Jacket",
category: "Men's Clothing",
price: 55.99,
image:
"https://fakestoreapi.com/img/71li-ujtlUL.*AC_UX679*.jpg",
rating: 4.1,
},
{
id: 4,
title: "Women's Casual Jacket",
category: "Women's Clothing",
price: 39.99,
image:
"https://fakestoreapi.com/img/71HblAHs5xL.*AC_UY879*-2.jpg",
rating: 4.5,
},
];

return ( <div className="min-h-screen bg-gray-50 text-gray-900">
{/* Hero Section */} <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-800"> <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div> <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"></div>


    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
      <div className="text-white">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-purple-200">
          ✨ Your Style, Your Choice
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Discover Your
          <span className="block text-purple-300">
            Perfect Style.
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-base leading-7 text-gray-300 sm:text-lg">
          Explore amazing products, discover new trends, and find
          everything you love in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-950 shadow-lg transition hover:-translate-y-1 hover:bg-purple-100"
          >
            Shop Now →
          </Link>

          <Link
            to="/about"
            className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            About Us
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-8">
          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="mt-1 text-sm text-gray-300">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="mt-1 text-sm text-gray-300">
              Products
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">4.8/5</h3>
            <p className="mt-1 text-sm text-gray-300">
              Customer Rating
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute inset-5 rounded-full bg-purple-400/20 blur-3xl"></div>

        <div className="relative rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-green-400/20 px-3 py-1.5 text-xs font-semibold text-green-300">
              NEW COLLECTION
            </span>
            <span className="text-2xl">✦</span>
          </div>

          <div className="mt-6 flex h-72 items-center justify-center rounded-2xl bg-white p-5">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="Featured backpack"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 text-white">
            <div>
              <p className="text-sm text-purple-200">
                Featured Product
              </p>
              <h3 className="mt-1 font-bold">
                Everyday Backpack
              </h3>
            </div>

            <span className="text-xl font-bold">$109.95</span>
          </div>
        </div>

        <div className="absolute -left-4 top-1/3 rounded-xl bg-white px-4 py-3 shadow-xl sm:-left-8">
          <p className="text-sm font-bold text-gray-900">
            ⭐ Top Rated
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Customer Favorite
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Benefits */}
  <section className="border-b border-gray-100 bg-white">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:px-10">
      {[
        {
          icon: "🚚",
          title: "Free Shipping",
          subtitle: "On eligible orders",
        },
        {
          icon: "🔒",
          title: "Secure Payment",
          subtitle: "Protected checkout",
        },
        {
          icon: "↩️",
          title: "Easy Returns",
          subtitle: "Hassle-free process",
        },
        {
          icon: "💬",
          title: "Customer Support",
          subtitle: "We're here to help",
        },
      ].map((item) => (
        <div key={item.title} className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl">
            {item.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold sm:text-base">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Categories */}
  <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Browse Collection
        </p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-3 text-gray-500">
          Find something special for every occasion.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`${category.color} group cursor-pointer rounded-2xl p-5 transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm transition group-hover:scale-110">
            {category.icon}
          </div>

          <h3 className="mt-5 font-bold sm:text-lg">
            {category.name}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Explore collection →
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* Featured Products */}
  {/* <section className="bg-white py-16">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Handpicked For You
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 text-gray-500">
            Explore our popular picks.
          </p>
        </div>

        <Link
          to="/products"
          className="hidden font-semibold text-indigo-600 transition hover:text-indigo-800 sm:block"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative flex h-60 items-center justify-center bg-gray-50 p-6">
              <span className="absolute left-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                Featured
              </span>

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
              />

              <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm transition hover:bg-pink-50"
              >
                ♡
              </button>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {product.category}
              </p>

              <h3 className="mt-2 line-clamp-2 min-h-12 font-semibold text-gray-800">
                {product.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-extrabold text-indigo-700">
                  ${product.price.toFixed(2)}
                </span>

                <span className="text-sm text-amber-500">
                  ★ {product.rating}
                </span>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-indigo-950 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/products"
          className="font-semibold text-indigo-600"
        >
          View All Products →
        </Link>
      </div>
    </div>
  </section> */}

  {/* Promotional Banner */}
  <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
      <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>

      <div className="relative">
        <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
          YOUR NEXT FAVORITE THING AWAITS
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold sm:text-5xl">
          Upgrade Your Everyday Style
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-200">
          Discover products you'll love and give your everyday
          shopping a fresh experience.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-bold text-indigo-950 transition hover:-translate-y-1 hover:bg-purple-100"
        >
          Explore Collection →
        </Link>
      </div>
    </div>
  </section>

  {/* Newsletter UI */}
  <section className="border-t border-gray-100 bg-white px-6 py-14">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-extrabold sm:text-3xl">
        Stay in the Loop
      </h2>

      <p className="mt-3 text-gray-500">
        Discover new arrivals and the latest collections.
      </p>

      <div className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email address"
          className="min-w-0 flex-1 rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <button
          type="button"
          className="rounded-xl bg-indigo-950 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Subscribe
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-950 px-6 py-8 text-gray-400">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
      <div>
        <h2 className="text-2xl font-extrabold text-white">
          E<span className="text-purple-400">.com</span>
        </h2>
        <p className="mt-2 text-sm">
          Your style. Your choice. Your E.com.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 text-sm">
        <Link to="/" className="transition hover:text-white">
          Home
        </Link>
        <Link to="/about" className="transition hover:text-white">
          About
        </Link>
        <Link to="/products" className="transition hover:text-white">
          Products
        </Link>
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} E.com
      </p>
    </div>
  </footer>
</div>


);
};

export default Home;
