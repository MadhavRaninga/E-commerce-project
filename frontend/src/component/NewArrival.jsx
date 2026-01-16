import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "./Footer";
import { newArrival } from "../Redux/Reducers/newSlice";

const NewArrivals = () => {
  const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(newArrival());
  }, [dispatch]);

  // Mock data for the "Masonry" layout effect 
  // (In a real app, you'd map these dynamically, here I am creating a visual layout structure)
  const featuredItems = [
    {
      id: 1,
      title: "The Oversized Blazer",
      category: "Outerwear",
      price: 2499,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      size: "large" // Takes 2 columns
    },
    {
      id: 2,
      title: "Pleated Trousers",
      category: "Bottoms",
      price: 1299,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1936&auto=format&fit=crop",
      size: "normal"
    },
    {
      id: 3,
      title: "Silk Scarf Collection",
      category: "Accessories",
      price: 899,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1887&auto=format&fit=crop",
      size: "normal"
    },
    {
      id: 4,
      title: "Urban Denim Jacket",
      category: "Tops",
      price: 1899,
      image: "https://images.unsplash.com/photo-1551488852-7a8d5f06355d?q=80&w=1974&auto=format&fit=crop",
      size: "tall" // Takes 2 rows
    },
    {
      id: 5,
      title: "Minimalist Watch",
      category: "Accessories",
      price: 4500,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1887&auto=format&fit=crop",
      size: "normal"
    },
    {
      id: 6,
      title: "Chunky Knit Sweater",
      category: "Tops",
      price: 1599,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1974&auto=format&fit=crop",
      size: "normal"
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION (Asymmetric) ================= */}
      <section className="relative w-full h-[75vh] flex flex-col md:flex-row">
        {/* Text Side */}
        <div className="w-full md:w-1/2 bg-[#F0EFE9] flex flex-col justify-center px-10 md:px-20 py-12 relative z-10">
          <span className="text-sm tracking-widest uppercase text-gray-500 mb-4 font-semibold">
            Season — 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            New <br /> Arrivals
          </h1>
          <p className="text-gray-600 text-lg max-w-md mb-8">
            Discover the latest trends. Fresh styles curated just for you, updated weekly.
          </p>
          <button className="w-max px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition rounded-full">
            Shop The Drop
          </button>
        </div>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            alt="New Arrivals Hero"
            className="w-full h-full object-cover"
          />
          {/* Floating Badge */}
          <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur px-6 py-3 shadow-lg rounded-lg">
            <p className="font-serif font-bold text-xl">Just Dropped</p>
          </div>
        </div>
      </section>

      {/* ================= HORIZONTAL FILTERS ================= */}
      <section className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {["All", "Clothing", "Shoes", "Accessories", "Beauty"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item.toLowerCase())}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  filter === item.toLowerCase()
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MASONRY GRID (DIFFERENT LAYOUT) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden bg-white rounded-xl cursor-pointer ${
                item.size === "large" ? "md:col-span-2" : "md:col-span-1"
              } ${item.size === "tall" ? "md:row-span-2" : "md:row-span-1"}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="bg-white text-black px-6 py-2 rounded-full font-medium translate-y-4 group-hover:translate-y-0 transition duration-300">
                  Quick View
                </span>
              </div>

              {/* Info (Bottom Left) */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase tracking-wider mb-1 opacity-90">{item.category}</p>
                <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
                <p className="font-medium mt-1">₹{item.price}</p>
              </div>
            </div>
          ))}

          {/* Extra filler cards for grid balance */}
          <div className="relative group overflow-hidden bg-white rounded-xl md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
             <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase tracking-wider mb-1">Footwear</p>
                <h3 className="font-serif text-2xl font-medium">Sneakers</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-white rounded-xl md:col-span-2">
             <img
              src="https://images.unsplash.com/photo-1550614000-4b9519e0031a?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
             <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase tracking-wider mb-1">Collection</p>
                <h3 className="font-serif text-3xl font-medium">Monochrome Edit</h3>
            </div>
          </div>

        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition">
            Load More Products
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default NewArrivals;