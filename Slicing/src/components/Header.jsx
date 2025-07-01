import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Your Company</h1>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block text-gray-700 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation menu */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
            <li>
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
