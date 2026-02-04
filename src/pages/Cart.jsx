// src/pages/Cart.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const updateQty = (id, delta) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal > 100 ? subtotal : subtotal + 9.99;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-gray mb-8">Your Cart is Empty</h1>
        <Link to="/shop" className="bg-ancOrange text-white px-8 py-4 rounded-full text-xl">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray text-center mb-12">Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row items-center gap-6">
          <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded" />
          <div className="flex-1">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => updateQty(item.id, -1)} className="text-3xl">-</button>
            <span className="text-xl text-black font-bold">{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)} className="text-3xl">+</button>
          </div>
          <span className="text-2xl font-bold text-black">${(item.price * item.qty).toFixed(2)}</span>
          <button onClick={() => removeItem(item.id)} className="text-red-600">
            <Trash2 />
          </button>
        </div>
      ))}
      <div className="text-right text-2xl font-bold mt-8">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping: {subtotal > 100 ? "FREE" : "$9.99"}</p>
        <p className="text-3xl text-ancOrange mt-4">Total: ${total.toFixed(2)}</p>
        <Link to="/checkout" className="inline-block mt-6 bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-green-700">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}