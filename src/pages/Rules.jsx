// src/pages/Rules.jsx
import { Link } from "react-router-dom";

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-5xl md:text-7xl font-black text-white-700 text-center mb-8">
        Official Pickleball Rules
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        USA Pickleball Association Official Rule Summary (2025)
      </p>

      {/* Full PDF Viewer */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <iframe
          src="https://usapickleball.org/docs/rules/USAP-Rules-Summary.pdf"
          width="100%"
          height="900"
          className="border-0"
          title="Official USAP Rules"
        >
          <p>Your browser doesn't support iframes. <a href="https://usapickleball.org/docs/rules/USAP-Rules-Summary.pdf" target="_blank" rel="noopener noreferrer">Download PDF here</a></p>
        </iframe>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="bg-orange-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 transition shadow-2xl"
        >
          Shop Paddles
        </Link>
      </div>
    </div>
  );
}