// src/pages/RentCourt.jsx - Rent a Court page with hero image
import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RentCourt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    duration: "1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your court booking request for ${formData.date} at ${formData.time} has been submitted. We'll contact you soon!`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      duration: "1",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-black">
      {/* Hero Image Section */}
      <div className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/assets/Courts.jpg')"
      }}>
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            Rent a Court
          </h1>
          <p className="text-xl md:text-3xl max-w-3xl drop-shadow-lg">
            Book our private courts for practice, lessons, or tournaments
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Court Details */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 space-y-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              Court Features & Pricing
            </h2>

            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-center gap-4">
                <MapPin size={28} className="text-green-700" />
                <span>39340 Rosaryville Rd, Ponchatoula, LA 70454</span>
              </li>
              <li className="flex items-center gap-4">
                <Calendar size={28} className="text-green-700" />
                <span>Available 7 days a week</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={28} className="text-green-700" />
                <span>6am–10pm (flexible booking times)</span>
              </li>
              <li className="flex items-center gap-4">
                <DollarSign size={28} className="text-green-700" />
                <span>$25/hour (1–2 players) • $40/hour (3–8 players)</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-gray-200 text-lg text-gray-600">
              Includes LED lighting, seating, water station, and restrooms.
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Book Your Court
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg text-black font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-lg text-black font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-lg text-black font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(985) 555-1234"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-black font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-lg text-black font-medium mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border text-black  border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg text-black font-medium mb-2">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                >
                  <option value="1">1 hour</option>
                  <option value="1.5">1.5 hours</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-5 rounded-full text-2xl font-bold hover:bg-orange-700 transition shadow-lg mt-6"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-black-700 mb-8">
            Ready to play? Book now or browse our gear!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/shop"
              className="bg-gray-700 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-green-800 transition shadow-2xl"
            >
              Shop Paddles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}