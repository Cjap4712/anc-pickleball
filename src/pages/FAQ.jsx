// src/pages/FAQ.jsx - Store & Site-Specific FAQ
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, American Express, Discover, and PayPal. All transactions are processed securely through our checkout system."
  },
  {
    question: "How do I track my order?",
    answer: "After placing an order, you'll receive a confirmation and order number. Check your order status on the order status link at the top of the home page."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return window on unused paddles in original condition. Return shipping is your responsibility unless the item is defective. Contact us via the Contact page for a return authorization."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries. Shipping rates are calculated at checkout. For international orders, please allow 10–20 business days. Contact us for specific rate quotes."
  },
  {
    question: "How do I use the Compare tool?",
    answer: "Go to the Compare page and filter paddles by skill level, material, price range, and weight. Only paddles are shown. Click 'View in Shop' to see more details or add to cart."
  },
  {
    question: "Where is ANC Inc. located?",
    answer: "Our flagship store is at 39340 Rosaryville Rd, Ponchatoula, LA 70454. Visit the Find Us page for hours, phone, and Google Maps directions."
  },
  {
    question: "How do I add items to my cart?",
    answer: "On the Shop page, click 'Add to Cart' on any product. The header cart icon will show a live count. Go to the Cart page to adjust quantities or remove items."
  },
  {
    question: "Is my data secure on this site?",
    answer: "Yes, no personal data is collected or stored on our servers. We use HTTPS and industry-standard security practices."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-black text-black-700 text-center mb-12 drop-shadow-lg">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-5 font-semibold text-xl flex justify-between items-center hover:bg-black-50 transition"
            >
              {faq.question}
              <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-700 text-lg border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-2xl text-white-700 mb-8">
          Still have questions about our store or site?
        </p>
        <Link
          to="/contact"
          className="bg-orange-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 transition shadow-2xl"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}