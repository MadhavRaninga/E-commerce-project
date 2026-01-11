import React from "react";

const Homepage = () => {
  return (
    <div>
      {/* ================= NAVBAR ================= */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            Clothify
          </h1>

          {/* Center Links */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
            <a href="#" className="hover:text-black transition">Men</a>
            <a href="#" className="hover:text-black transition">Women</a>
            <a href="#" className="hover:text-black transition">Kids</a>
            <a href="#" className="hover:text-black transition">New</a>
            <a href="#" className="hover:text-black transition">Sale</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 text-xl text-gray-700">
            {/* Search */}
            <button className="hover:text-black transition">
              🔍
            </button>

            {/* Wishlist */}
            <button className="hover:text-black transition">
              ❤️
            </button>

            {/* Cart */}
            <button className="relative hover:text-black transition">
              🛒
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                2
              </span>
            </button>

            {/* Profile */}
            <button className="hover:text-black transition">
              👤
            </button>
          </div>

        </div>
      </header>

      {/* Temporary content */}
      <main className="h-[200vh] bg-gray-50 p-10">
        <h2 className="text-3xl font-semibold">
          Home Page Content
        </h2>
        <p className="mt-2 text-gray-600">
          Navbar is ready. Next we add Hero section.
        </p>
      </main>
    </div>
  );
};

export default Homepage;
