import Map from "../components/map.jsx";


import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch with <span className="text-brand">LuxFurnish</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you’re interested in our
            premium furniture line, need design assistance, or just want to
            say hello — our team is ready to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach out through any of the options below or visit our
              showroom to experience luxury craftsmanship firsthand.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand" />
                <a
                  href="mailto:hello@luxfurnish.com"
                  className="text-gray-700 hover:text-brand transition"
                >
                  hello@luxfurnish.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand" />
                <a
                  href="tel:+2348012345678"
                  className="text-gray-700 hover:text-brand transition"
                >
                  +234 801 234 5678
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand mt-1" />
                <p className="text-gray-700">
                  45 Eleganza Boulevard, Lekki Phase 1, Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Map preview (optional image or embedded map) */}
            <div className="mt-8">
              <img
                src="/asset/images/map-placeholder.jpg"
                alt="Front of LuxFurnish Showroom"
                className="rounded-2xl object-cover w-full h-48 shadow-md"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white py-3 rounded-xl font-semibold text-lg hover:bg-brand/90 transition transform hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-brand/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand/10 blur-3xl rounded-full -z-10"></div>
    </section>
  

      <Map />
  </>
  );
}
