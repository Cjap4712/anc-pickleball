// src/pages/Contact.jsx - Updated with modern X icon
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. (This is a demo — no real email was sent)");
    e.target.reset(); // Clear form after submit
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-gray-700 text-center mb-6 drop-shadow-lg">
          Contact ANC Inc.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Questions about our paddles, orders, or the site? We're here to help — reach out anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 space-y-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Get in Touch
            </h2>

            <div className="space-y-8 text-xl text-gray-700">
              <div className="flex items-center gap-6">
                <MapPin size={50} className="text-blue-700 flex-shrink-0" />
                <div>
                  <p className="font-bold">39340 Rosaryville Rd</p>
                  <p>Ponchatoula, LA 70454</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Phone size={50} className="text-blue-700 flex-shrink-0" />
                <a href="tel:+19855557265" className="font-bold hover:text-orange-600 transition">
                  (985) 555-7265
                </a>
              </div>

              <div className="flex items-center gap-6">
                <Mail size={50} className="text-blue-700 flex-shrink-0" />
                <a href="mailto:info@ancpickleball.com" className="font-bold hover:text-orange-600 transition">
                  info@ancpickleball.com
                </a>
              </div>
            </div>

            {/* Social Media Icons - Updated with modern X */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Follow Us On Social Media
              </h3>
              <div className="flex justify-center gap-12">
                <a
                  href="https://www.instagram.com/ancpickleball" // Replace with your real Instagram
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-orange-600 transition text-5xl"
                >
                  <Instagram size={48} />
                </a>
                <a
                  href="https://www.facebook.com/ancpickleball" // Replace with your real Facebook
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-orange-600 transition text-5xl"
                >
                  <Facebook size={48} />
                </a>
                <a
                  href="https://x.com/ancpickleball" // Replace with your real X profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-orange-600 transition text-5xl"
                >
                  <Twitter size={48} />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-center text-lg text-gray-600">
              Mon–Sat: 10am–7pm | Sun: 12pm–5pm
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg text-blue-700">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-lg text-blue-700">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-lg text-blue-700">Message</label>
                <textarea
                  rows="6"
                  required
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-full text-xl font-bold hover:bg-orange-700 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-black-700 mb-8">
            Ready to gear up? Start shopping now!
          </p>
          <Link
            to="/shop"
            className="bg-orange-700 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-green-800 transition shadow-2xl"
          >
            Browse Paddles
          </Link>
        </div>
      </div>
    </div>
  );
}