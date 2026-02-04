// src/pages/Shop.jsx
import { products } from "../data/products";
import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function Shop() {
  const [selectedImage, setSelectedImage] = useState(null);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-Gray mb-12">Shop All Gear</h1>
      <h2 className="text-2xl font-semibold text-center text-ancOrange mb-8">Orders over $100 ship free!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col h-full"
          >
            {/* Clickable Image */}
            <div 
              className="cursor-pointer"
              onClick={() => setSelectedImage(product.image)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-contain p-4"  // object-contain keeps full image visible without stretching
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
              
              {/* Price + Button at bottom-right */}
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-ancOrange">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-ancOrange text-white px-6 py-3 rounded-full hover:bg-orange-600 transition flex items-center gap-2"
                >
                  <ShoppingCart size={20} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white hover:text-orange-400"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged product" 
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}