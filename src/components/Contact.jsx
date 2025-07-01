import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded text-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded text-gray-800"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded text-gray-800"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
