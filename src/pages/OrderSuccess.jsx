// src/pages/OrderSuccess.jsx
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {  
  return (
    <div className="container mx-auto p-8 text-center py-32">
      <CheckCircle size={120} className="text-green-600 mx-auto mb-8" />
      <h1 className="text-6xl font-bold text-green-700 mb-6">Order Confirmed!</h1>
      <p className="text-3xl text-gray-700 mb-12">
        Thank you for shopping with ANC Inc.
      </p>
      <p className="text-xl text-gray-600 mb-12">
        Order #ANC-{Math.floor(100000 + Math.random() * 900000)} has been placed.
      </p>
      <Link 
        to="/shop" 
        className="bg-orange-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}