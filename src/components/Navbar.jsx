// src/components/Navbar.jsx

import { ShoppingCart, Box } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const navLinks = [
    'Products',
    'Features',
    'Pricing',
    'Testimonials',
    'FAQ',
  ];

  return (
    <header className="bg-white border-b-2 border-cyan-300">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
          <div className="bg-purple-500 p-2 rounded-xl text-white shadow-md">
            <Box size={20} />
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            DV <span className="text-cyan-500">Tools</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="hover:text-indigo-500 transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <ShoppingCart
              size={22}
              className="text-gray-600 hover:text-amber-300 transition"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login */}
          <button className="text-gray-600 font-medium hover:text-indigo-500 transition">
            Login
          </button>

          {/* Get Started Button */}
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-sm">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;