import React from "react";

function Hero() {
  return (
    <section id="home" className="bg-gray-100 text-gray-800 py-40 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Your Company</h2>
        <p className="text-lg mb-6">
          Delivering excellence in every project, with a focus on quality and
          innovation.
        </p>
        <a
          href="#services"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 inline-block font-semibold"
        >
          Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;
