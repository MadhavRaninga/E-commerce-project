import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 🛒 get cart items from redux
  const { items } = useSelector((state) => state.cart);

  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest">
          CLOTHIFY
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/mens" className="hover:text-black">Men</Link>
          <Link to="/womens" className="hover:text-black">Women</Link>
          <Link to="/kids" className="hover:text-black">Kids</Link>
          <Link to="/newarrival" className="hover:text-black">New</Link>
          <Link to="/sale" className="hover:text-black">Sale</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6 text-xl items-center">
          <i className="ri-search-line cursor-pointer"></i>
          <i className="ri-heart-3-line cursor-pointer"></i>

          {/* 🛒 CART ICON */}
          <Link to="/cart" className="relative">
            <i className="ri-shopping-cart-2-line cursor-pointer"></i>

            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                {items.length}
              </span>
            )}
          </Link>

          <i className="ri-user-3-line cursor-pointer"></i>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col px-6 py-4 space-y-4 text-gray-700 border-t bg-[#FAF9F6]">
          <Link to="/mens" onClick={closeMenu}>Men</Link>
          <Link to="/womens" onClick={closeMenu}>Women</Link>
          <Link to="/kids" onClick={closeMenu}>Kids</Link>
          <Link to="/newarrival" onClick={closeMenu}>New</Link>
          <Link to="/sale" onClick={closeMenu}>Sale</Link>

          {/* Mobile Icons */}
          <div className="flex space-x-6 text-xl pt-4 border-t items-center">
            <i className="ri-search-line"></i>
            <i className="ri-heart-3-line"></i>

            <Link to="/cart" className="relative" onClick={closeMenu}>
              <i className="ri-shopping-cart-2-line"></i>

              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                  {items.length}
                </span>
              )}
            </Link>

            <i className="ri-user-3-line"></i>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
