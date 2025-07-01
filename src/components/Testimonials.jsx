import React, { useState } from "react";

function Testimonials() {
  const [testimonials] = useState([
    {
      quote:
        "Great service! Our project was delivered on time, and the quality exceeded our expectations.",
      client: "Client A",
    },
    {
      quote:
        "Professional, reliable, and always goes the extra mile. Highly recommended.",
      client: "Client B",
    },
    {
      quote:
        "We are extremely satisfied with the work done. The team was responsive and efficient.",
      client: "Client C",
    },
  ]);

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-2xl font-bold mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-gray-800 hover:shadow-lg transition"
            >
              <p className="italic text-gray-700 text-base sm:text-sm leading-relaxed">
                "{item.quote}"
              </p>
              <h3 className="mt-4 font-semibold text-gray-900 text-sm sm:text-xs">
                – {item.client}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
