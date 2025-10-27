import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") return;
    setSubmitted(true);
    setEmail("");

    // In a real app, you'd send email to backend or service like Mailchimp here
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Background Gradie00cf cnt */}
      <div className="absolute inset-0 from-amber-400/10 via-gray-900 to-gray-800 opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Stay <span className="text-brand">LuxFurnish</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          Join our exclusive newsletter for design inspiration, new arrivals, special
          offers, and timeless furniture stories directly to your inbox.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <div className="relative w-full sm:w-auto">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-96 pl-12 pr-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-brand text-white font-medium px-8 py-3 rounded-full hover:bg-brand-hover transition-all duration-300 shadow-lg hover:shadow-brand/30"
          >
            Subscribe <ArrowRight size={18} />
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-400 mt-6 text-sm animate-fadeIn">
            ✅ Thank you for subscribing! You’ll start receiving updates soon.
          </p>
        )}

        {/* Subtle Decoration */}
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

export default Newsletter;
