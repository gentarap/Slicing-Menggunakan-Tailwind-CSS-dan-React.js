import React from "react";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center ">
        <p className="mb-4 md:mb-0">
          &copy; 2025 Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              alt="Instagram"
              className="w-7 h-7 hover:scale-110 transition"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              alt="github"
              className="w-7 h-7 hover:scale-110 transition"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-7 h-7 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
