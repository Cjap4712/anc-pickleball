// src/pages/Reviews.jsx - Working + real content (no extra imports)
export default function Reviews() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center text-white-700 mb-12">
        Customer Reviews
      </h1>

      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-blue-700 mb-2">Sarah M. – Baton Rouge, LA</p>
          <p className="text-lg italic text-gray-700 mb-2">
            "The Elite Alpha MK-1 is incredible! So much spin and control. Fast shipping too — love ANC Inc.!"
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-blue-700 mb-2">Mike T. – New Orleans, LA</p>
          <p className="text-lg italic text-gray-700 mb-2">
            "Best paddles I've ever used. The Care Bear edition is my new favorite — fun and performs like a pro paddle."
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-blue-700 mb-2">Lisa R. – Hammond, LA</p>
          <p className="text-lg italic text-gray-700 mb-2">
            "Great selection and easy site to use. Shipping was quick. Highly recommend!"
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-blue-700 mb-2">John D. – Ponchatoula, LA</p>
          <p className="text-lg italic text-gray-700 mb-2">
            "Visited the Ponchatoula store — awesome staff and paddles. ANC is the real deal!"
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-xl text-blue-700 mb-2">Emily K. – Slidell, LA</p>
          <p className="text-lg italic text-gray-700 mb-2">
            "The comparison tool helped me pick the perfect paddle. Thanks ANC — can't wait to play with it!"
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-black-700 mb-6">
          Ready to join our happy customers?
        </p>
        
      </div>
    </div>
  );
}