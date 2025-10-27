import React from "react";
import { MapPin } from "lucide-react";

function Map() {
  return (
    <section className="relative bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Find <span className="text-brand">LuxFurnish</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Visit our showroom to experience the craftsmanship, comfort, and luxury of
          our furniture pieces. We’d love to help you create your dream space.
        </p>

        <div className="flex justify-center items-center gap-2 mt-6 text-gray-700">
          <MapPin size={20} className="text-brand" />
          <span>18 Kingsway Road, Ikoyi, Lagos, Nigeria</span>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
        <iframe
          title="LuxFurnish Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.910334516374!2d3.423580575012544!3d6.451070525897884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf55b93db8b65%3A0x8b7b3a183fe7bebb!2sIkoyi%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1697815623456!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
