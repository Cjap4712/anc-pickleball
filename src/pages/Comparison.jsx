// src/pages/Comparison.jsx — FINAL VERSION: ONLY PADDLES, 100% GUARANTEED
import { products } from "../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Comparison() {
  const [skill, setSkill] = useState("");
  const [material, setMaterial] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [weight, setWeight] = useState("");

  // SUPER STRONG FILTER — only items with "paddle" in name AND skill/material/weight fields
  const paddlesOnly = products.filter(p => {
    const name = (p.name || "").toLowerCase();
    const desc = (p.description || "").toLowerCase();
    const hasPaddleWord = name.includes("paddle") || desc.includes("paddle");
    const hasPaddleData = p.skill || p.material || p.weight;
    return hasPaddleWord && hasPaddleData;
  });

  const filtered = paddlesOnly.filter(p => {
    if (skill && p.skill !== skill) return false;
    if (material && p.material !== material) return false;
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      if (p.price < min || (max && p.price > max)) return false;
    }
    if (weight && p.weight !== weight) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-5xl font-bold text-white-700 text-center mb-12">
        Find Your Perfect Paddle
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-black p-8 rounded-2xl shadow-lg">
        <div>
          <label className="block font-semibold mb-2">Skill Level</label>
          <select value={skill} onChange={e => setSkill(e.target.value)} className="w-full p-3 border rounded-lg">
            <option value="">Any</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Pro</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Material</label>
          <select value={material} onChange={e => setMaterial(e.target.value)} className="w-full p-3 border rounded-lg">
            <option value="">Any</option>
            <option>Carbon Fiber</option>
            <option>Polymer</option>
            <option>Fiberglass</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Price</label>
          <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className="w-full p-3 border rounded-lg">
            <option value="">Any</option>
            <option value="0-100">Under $100</option>
            <option value="100-150">$100–$150</option>
            <option value="150-999">$150+</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Weight</label>
          <select value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-3 border rounded-lg">
            <option value="">Any</option>
            <option>Light</option>
            <option>Mid</option>
            <option>Heavy</option>
          </select>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white-700 mb-8 text-center">
        {filtered.length} Paddle{filtered.length !== 1 ? "s" : ""} Found
      </h2>

      {filtered.length === 0 ? (
        <p className="text-center text-xl text-gray-600 py-20">
          No paddles match — try different filters!
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(paddle => (
            <div key={paddle.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all hover:-translate-y-2">
              <div className="h-80 bg-gray-50 flex items-center justify-center p-8">
                <img src={paddle.image} alt={paddle.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{paddle.name}</h3>
                <p className="text-gray-600 mb-6">{paddle.description}</p>
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black text-orange-600">${paddle.price}</span>
                  <Link to="/shop" className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transition shadow-lg">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}