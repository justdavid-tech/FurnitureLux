import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-brand mb-4">LuxFurnish</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            LuxFurnish brings timeless sophistication and modern craftsmanship
            together — transforming every room into a sanctuary of comfort and style.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" className="hover:text-brand transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-brand transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-brand transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/shop" className="hover:text-brand transition">Living Room</a></li>
            <li><a href="/shop" className="hover:text-brand transition">Bedroom</a></li>
            <li><a href="/shop" className="hover:text-brand transition">Dining</a></li>
            <li><a href="/shop" className="hover:text-brand transition">Office</a></li>
            <li><a href="/shop" className="hover:text-brand transition">Outdoor</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-brand transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-brand transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-brand transition">FAQs</a></li>
            <li><a href="#" className="hover:text-brand transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-brand transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand mt-1" />
              <span>18 Kingsway Road, Ikoyi, Lagos, Nigeria</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-brand mt-1" />
              <span>+234 809 555 1234</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand mt-1" />
              <span>support@luxfurnish.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-10 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} LuxFurnish. All rights reserved.</p>
        <p>
          Designed by <span className="text-brand font-medium cursor-pointer">Justdavid_tech</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
