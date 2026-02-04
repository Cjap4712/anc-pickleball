import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart, Menu, Instagram, Facebook, Twitter } from "lucide-react";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Comparison from "./pages/Comparison";
import Locations from "./pages/Locations";
import Rules from "./pages/Rules";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import RentCourt from "./pages/RentCourt";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartCount(cart.reduce((sum, item) => sum + item.qty, 0));
      } catch {
        setCartCount(0);
      }
    };
    update();
    window.addEventListener("storage", update);
    const id = setInterval(update, 500);
    return () => {
      clearInterval(id);
      window.removeEventListener("storage", update);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-primary-dark/95 backdrop-blur-lg shadow-xl z-50 border-b border-secondary-dark">
      <div className="max-w-[1600px] mx-auto flex items-center px-6 md:px-10 py-5">
        {/* Logo/Title - flush left */}
        <div className="flex-shrink-0">
          <h1 className="text-4xl md:text-5xl font-black text-accent-blue tracking-tight">
            ANC Pickleball
          </h1>
        </div>

        {/* Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Desktop Menu - center-right */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-6 text-xl text-text-light font-medium">
          <Link to="/" className="hover:text-accent-blue transition whitespace-nowrap">Home</Link>
          <Link to="/shop" className="hover:text-accent-blue transition whitespace-nowrap">Shop</Link>
          <Link to="/comparison" className="hover:text-accent-blue transition whitespace-nowrap">Compare</Link>
          <Link to="/rules" className="hover:text-accent-blue transition whitespace-nowrap">Rules</Link>
          <Link to="/about" className="hover:text-accent-blue transition whitespace-nowrap">About Us</Link>
          <Link to="/contact" className="hover:text-accent-blue transition whitespace-nowrap">Contact</Link>
          <Link to="/locations" className="hover:text-accent-blue transition whitespace-nowrap">Find Us</Link>
          <Link to="/faq" className="hover:text-accent-blue transition whitespace-nowrap">FAQ</Link>
          <Link to="/reviews" className="hover:text-accent-blue transition whitespace-nowrap">Reviews</Link>
          <Link to="/rent-court" className="hover:text-accent-blue transition whitespace-nowrap">Rent a Court</Link>
        </nav>

        {/* Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0 mr-8">
          <a
            href="https://www.instagram.com/ancpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-accent-blue transition"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com/ancpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-accent-blue transition"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://x.com/ancpickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-accent-blue transition"
          >
            <Twitter size={32} />
          </a>
        </div>

        {/* Cart Icon - Far Right */}
        <Link to="/cart" className="relative hidden md:block flex-shrink-0">
          <ShoppingCart size={36} className="text-text-light hover:text-accent-blue transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-accent-blue z-50 ml-auto"
        >
          {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary-dark z-50 flex flex-col md:hidden">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileMenuOpen(false)} className="text-text-white">
              <X size={36} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-12 text-3xl text-text-white">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Shop</Link>
            <Link to="/comparison" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Compare</Link>
            <Link to="/rules" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Rules</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">About Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Contact</Link>
            <Link to="/locations" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Find Us</Link>
            <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">FAQ</Link>
            <Link to="/reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Reviews</Link>
            <Link to="/rent-court" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">Rent a Court</Link>
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-blue transition">
              Cart ({cartCount})
            </Link>
          </nav>

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-18 pb-12">
            <a href="https://instagram.com/ancpickleball" target="_blank" rel="noopener noreferrer" className="text-text-white hover:text-accent-blue transition">
              <Instagram size={40} />
            </a>
            <a href="https://facebook.com/ancpickleball" target="_blank" rel="noopener noreferrer" className="text-text-white hover:text-accent-blue transition">
              <Facebook size={40} />
            </a>
            <a href="https://x.com/ancpickleball" target="_blank" rel="noopener noreferrer" className="text-text-white hover:text-accent-blue transition">
              <Twitter size={40} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: "url('/src/assets/ANCCCCC.png')"
            }} />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 px-6">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl">
                ANC Pickleball
              </h1>
              <p className="text-2xl md:text-4xl text-white mb-12 drop-shadow-lg">
                Premium Carbon-Fiber Paddles • Built for Winners
              </p>
              <Link to="/shop" className="bg-white text-gray-700 px-16 py-6 rounded-full text-2xl font-bold hover:scale-110 transition shadow-2xl">
                SHOP NOW
              </Link>
            </div>
          </div>
        } />

        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/rent-court" element={<RentCourt />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}