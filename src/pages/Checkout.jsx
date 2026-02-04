// src/pages/Checkout.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // Clear cart
    localStorage.removeItem("cart");
    
    // Show success and redirect
    alert(`Order placed successfully!\nOrder #ANC-${Math.floor(100000 + Math.random() * 900000)}`);
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center py-32">
        <h1 className="text-5xl font-bold text-gray-400 mb-8">Your cart is empty</h1>
        <Link to="/shop" className="bg-ancOrange text-white px-10 py-4 rounded-full text-xl">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-5xl font-bold text-ancGreen text-center mb-12">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.qty}</p>
              </div>
              <p className="font-bold text-ancOrange">${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-6 text-xl font-bold space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-2xl text-ancOrange pt-4 border-t-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Payment Information</h2>
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ancGreen focus:border-transparent" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Card Number</label>
              <input type="text" required placeholder="4242 4242 4242 4242" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ancGreen" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-medium mb-2">Expiry</label>
                <input type="text" required placeholder="MM/YY" className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">CVV</label>
                <input type="text" required placeholder="123" className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Shipping Address</label>
              <textarea required rows="3" className="w-full px-4 py-3 border rounded-lg" placeholder="123 Main St, City, State 12345"></textarea>
            </div>

            <button type="submit" className="w-full bg-ancGreen text-white py-5 rounded-full text-2xl font-bold hover:bg-green-700 transition transform hover:scale-105">
              Place Order – ${total.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}