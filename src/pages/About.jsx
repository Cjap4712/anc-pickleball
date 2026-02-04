// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to black py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gray-700 mb-8 drop-shadow-lg">
          About ANC Inc.
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          Founded in 2023 in Ponchatoula, Louisiana, ANC Inc. is dedicated to delivering premium, USA-made carbon-fiber pickleball paddles that combine power, control, and durability for players of every level.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Quality First</h3>
            <p className="text-gray-700">
              Every paddle is crafted with top-grade materials and precision engineering to meet USAPA standards.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Player-Driven</h3>
            <p className="text-gray-700">
              Designed with input from pros and weekend players to deliver real performance on the court.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Community Focused</h3>
            <p className="text-gray-700">
              We sponsor local tournaments and support the growth of pickleball in Louisiana and beyond.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/shop"
            className="bg-orange-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 transition shadow-2xl"
          >
            Shop Paddles
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-orange-600 text-orange-600 px-12 py-6 rounded-full text-2xl font-bold hover:bg-orange-600 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}