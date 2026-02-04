// src/pages/OrderStatus.jsx - Fixed with correct background & content
import { useState } from "react";
import { Search, CheckCircle, Clock, XCircle, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderStatus() {
  const [orderNumber, setOrderNumber] = useState("");
  const [statusResult, setStatusResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      setError("Please enter an order number");
      return;
    }

    setLoading(true);
    setError("");
    setStatusResult(null);

    // Simulate checking order (mock)
    setTimeout(() => {
      const mockOrders = {
        "123456": {
          status: "Processing",
          message: "Your order is being prepared and will ship soon.",
          icon: <Clock size={48} className="text-yellow-500" />,
          date: "Jan 29, 2026"
        },
        "789012": {
          status: "Shipped",
          message: "Your order has shipped! Expected delivery in 3-5 days.",
          icon: <Truck size={48} className="text-blue-500" />,
          date: "Jan 28, 2026"
        },
        "345678": {
          status: "Delivered",
          message: "Your order was delivered successfully. Enjoy your new paddle!",
          icon: <CheckCircle size={48} className="text-green-500" />,
          date: "Jan 26, 2026"
        },
        "901234": {
          status: "Cancelled",
          message: "This order was cancelled. Contact us if this is an error.",
          icon: <XCircle size={48} className="text-red-500" />,
          date: "Jan 25, 2026"
        }
      };

      const found = mockOrders[orderNumber.trim()];

      if (found) {
        setStatusResult(found);
      } else {
        setError("Order number not found. Please check and try again.");
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-gray-700 text-center mb-6 drop-shadow-lg">
          Check Order Status
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 text-center mb-12">
          Enter your order number below to view the current status.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Enter order number (e.g. 123456)"
              className="flex-1 px-6 py-4 border text-black border-gray-300 rounded-full focus:ring-2 focus:ring-green-700 focus:border-transparent text-lg"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition flex items-center gap-3 disabled:opacity-50"
            >
              <Search size={24} />
              {loading ? "Checking..." : "Check Status"}
            </button>
          </div>

          {error && <p className="text-red-600 text-center mt-4 font-medium">{error}</p>}
        </form>

        {statusResult && (
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
            <div className="mb-6">{statusResult.icon}</div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Order #{orderNumber}
            </h2>
            <p className="text-2xl font-semibold mb-4" style={{
              color: statusResult.status === "Delivered" ? "#15803d" :
                     statusResult.status === "Shipped" ? "#1d4ed8" :
                     statusResult.status === "Processing" ? "#b45309" :
                     "#dc2626"
            }}>
              {statusResult.status}
            </p>
            <p className="text-xl text-gray-700 mb-4">{statusResult.message}</p>
            <p className="text-lg text-gray-600">Last updated: {statusResult.date}</p>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-2xl text-gray-700 mb-8">
            Need help with your order? We're here 24/7.
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 transition shadow-2xl"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}