import React from "react";
import { Bitcoin, DollarSign, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col md:flex-row w-full p-6 poppins-regular gap-8 bg-gray-900 text-gray-300"
    >
      {/* Quick Links and Help & Support */}
      <div className="links flex flex-col md:flex-row gap-8 md:w-2/3">
        <ul className="space-y-2">
          <h2 className="text-white font-semibold text-sm">Quick Links</h2>
          <li className="cursor-pointer hover:text-primary text-xs">Home</li>
          <li className="cursor-pointer hover:text-primary text-xs">
            About Us
          </li>
          <li className="cursor-pointer hover:text-primary text-xs">FAQs</li>
          <li className="cursor-pointer hover:text-primary text-xs">
            Terms & Conditions
          </li>
          <li className="cursor-pointer hover:text-primary text-xs">
            Contact Us
          </li>
        </ul>
        <ul className="space-y-2">
          <h2 className="text-white font-semibold text-sm">Help & Support</h2>
          <li className="cursor-pointer hover:text-primary text-xs">
            What is Bitcoin
          </li>
          <li className="cursor-pointer hover:text-primary text-xs">
            How To Buy Bitcoin
          </li>
          <li className="cursor-pointer hover:text-primary text-xs">Login</li>
          <li className="cursor-pointer hover:text-primary text-xs">
            Forgot Password
          </li>
        </ul>
      </div>

      {/* Contact and Payment Info */}
      <div className="info flex flex-col md:items-start items-center gap-4 md:w-1/3">
        <div className="contact space-y-1 text-center md:text-left">
          <h1 className="text-white font-semibold text-sm">Contact Us</h1>
          <p className="text-xs">
            914 Wilshire Blvd #1000, Los Angeles, CA 90017
          </p>
          <a
            href="mailto:SUPPORT@MineMetrics.COM"
            className="text-primary text-xs"
          >
            SUPPORT@MineMetrics.COM
          </a>
          <p className="text-xs">+1 (602) 738-7037 | Mon-Sat: 08AM - 05PM</p>
          <div className="flex gap-2 mt-2 justify-center md:justify-start">
            <Twitter className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200" />
            <Facebook className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        {/* Market Info */}
        <div className="market-stats text-center md:text-left space-y-1">
          <h1 className="text-white font-semibold text-sm">Market Data</h1>
          <p className="text-xs">
            Market Cap: <span className="text-primary">$198.76B</span>
          </p>
          <p className="text-xs">
            Active Accounts: <span className="text-primary">69K+</span>
          </p>
          <p className="text-xs">
            Weekly Transactions: <span className="text-primary">234K</span>
          </p>
          <p className="text-xs">
            Supported Countries: <span className="text-primary">127</span>
          </p>
        </div>

        {/* Supported Payments */}
        <div className="text-center md:text-left">
          <h1 className="text-white font-semibold text-sm mb-1">
            Supported Payment
          </h1>
          <div className="flex gap-2 justify-center md:justify-start">
            <Bitcoin className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200" />
            <DollarSign className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
