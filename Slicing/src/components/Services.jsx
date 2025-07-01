import React, { useState } from "react";

function Services() {
  const [services] = useState([
    {
      title: "Web Development",
      desc: "Custom websites tailored to your business needs with a focus on performance and user experience.",
    },
    {
      title: "Mobile App Development",
      desc: "Innovative mobile applications designed to meet the demands of modern businesses.",
    },
    {
      title: "Consulting",
      desc: "Expert consulting services to help your business streamline processes and boost efficiency.",
    },
  ]);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 text-gray-800 rounded shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
