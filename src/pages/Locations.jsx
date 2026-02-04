// src/pages/Locations.jsx — FINAL COMPACT & GORGEOUS (no scrolling)
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Locations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from white-900 via-white-800 to-gray flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden">
          {/* Hero Header */}
          <div className="gray-600 to-blue-600 p-10 text-center">
            <MapPin size={80} className="mx-auto mb-4 text-black drop-shadow-2xl" />
            <h1 className="text-5xl md:text-6xl font-black text-black drop-shadow-2xl">
              ANC Inc. Pickleball
            </h1>
            <p className="text-2xl text-black/90 mt-2">Ponchatoula, Louisiana</p>
          </div>

          {/* Store Info */}
          <div className="p-10 text-center space-y-8">
            <h2 className="text-4xl font-black text-gray-700">Visit Us Today</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
              <div>
                <MapPin size={40} className="mx-auto mb-3 text-orange-600" />
                <p className="font-bold text-gray-800">39340 Rosaryville Rd</p>
                <p className="text-gray-600">Ponchatoula, LA 70454</p>
              </div>
              <div>
                <Phone size={40} className="mx-auto mb-3 text-orange-600" />
                <a href="tel:+19855557265" className="font-bold text-gray-800 hover:text-orange-600">
                  (985) 555-7265
                </a>
              </div>
              <div>
                <Clock size={40} className="mx-auto mb-3 text-orange-600" />
                <p className="font-bold text-gray-800">Mon–Sat: 10am–7pm</p>
                <p className="text-gray-600">Sun: 12pm–5pm</p>
              </div>
            </div>

            {/* Big CTA Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=39340+Rosaryville+Rd+Ponchatoula+LA+70454"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-orange-600 text-white px-16 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 transition shadow-2xl mt-8"
            >
              GET DIRECTIONS
              <ExternalLink size={36} />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-2xl text-white mb-6 drop-shadow-lg">
            Can't visit? We ship nationwide!
          </p>
          <Link
            to="/shop"
            className="bg-white text-gray-700 px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition shadow-xl"
          >
            SHOP ONLINE
          </Link>
        </div>
      </div>
    </div>
  );
}