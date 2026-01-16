import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-gray-200 sticky top-0 z-50 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

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

                {/* Icons */}
                <div className="hidden md:flex space-x-6 text-xl">
                    <span><i class="ri-search-line"></i></span>
                    <span><i class="ri-heart-3-line"></i></span>
                    <span><i class="ri-shopping-cart-2-line"></i></span>
                    <span><i class="ri-user-3-line"></i></span>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="md:hidden flex flex-col px-6 py-4 space-y-4 text-gray-700 border-t">
                                            
                </nav>
            )}
        </header>
    );
};

export default Navbar;
