import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Reducers/productSlice";
import Navbar from "../component/Navbar";

const Homepage = () => {

  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  console.log("Redux products:", products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="bg-[#FAF9F6] text-gray-900">

      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* ================= HERO ================= */}
      <section className="relative h-[92vh]">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          className="w-full h-full object-cover"
          alt="Fashion"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
            New Season Arrivals
          </h1>
          <p className="mt-4 text-lg max-w-xl text-gray-200">
            Premium fashion for Men, Women & Kids
          </p>
          <button className="mt-8 bg-black text-white px-10 py-3 hover:bg-gray-900 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold text-center mb-14">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Men", "Women", "Kids"].map((cat, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition"
            >
              <img
                src={
                  cat === "Men"
                    ? "https://i.pinimg.com/1200x/00/86/28/0086281f6383d05b5389ceb0fbf95e87.jpg"
                    : cat === "Women"
                      ? "https://i.pinimg.com/736x/9e/4b/3d/9e4b3d7f5168a155944ebc2e846f761f.jpg"
                      : "https://i.pinimg.com/1200x/aa/79/43/aa794313fbc3c62b36c4f49ceae50653.jpg"
                }
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                alt={cat}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition">
                <h3 className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition">
                  {cat}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Trending Products
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.length !== 0 ? (
              products.map((product) => (

                <div
                  key={product._id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-lg font-medium truncate">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-gray-600 font-semibold">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="mt-2 text-gray-600">
                Free delivery on all orders above ₹999
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold">Easy Returns</h3>
              <p className="mt-2 text-gray-600">
                7 days easy return & exchange policy
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold">Secure Payments</h3>
              <p className="mt-2 text-gray-600">
                100% secure & trusted payment gateways
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="bg-[#FAF9F6] py-28 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Join Our Fashion Community
          </h2>

          <p className="mt-4 text-gray-600">
            Be the first to know about new arrivals, exclusive offers & sales
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-5 py-3 border border-gray-300 bg-white outline-none focus:border-black transition"
            />
            <button className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-900 transition">
              Subscribe
            </button>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* Top Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold tracking-widest">
                CLOTHIFY
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Premium fashion destination for Men, Women & Kids.
                Discover trends that define your style.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-black cursor-pointer">Men</li>
                <li className="hover:text-black cursor-pointer">Women</li>
                <li className="hover:text-black cursor-pointer">Kids</li>
                <li className="hover:text-black cursor-pointer">New Arrivals</li>
                <li className="hover:text-black cursor-pointer">Sale</li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-black cursor-pointer">Contact Us</li>
                <li className="hover:text-black cursor-pointer">FAQs</li>
                <li className="hover:text-black cursor-pointer">Shipping & Returns</li>
                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-5 text-xl text-gray-700">
                <span className="hover:text-black cursor-pointer">📘</span>
                <span className="hover:text-black cursor-pointer">📸</span>
                <span className="hover:text-black cursor-pointer">🐦</span>
                <span className="hover:text-black cursor-pointer">▶️</span>
              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">

            <p>
              © {new Date().getFullYear()} Clothify. All rights reserved.
            </p>

            <div className="flex items-center space-x-4 mt-4 md:mt-0 text-lg">
              <span>💳</span>
              <span>💰</span>
              <span>🏦</span>
              <span>📱</span>
            </div>

          </div>

        </div>
      </footer>


    </div>
  );
};
export default Homepage;