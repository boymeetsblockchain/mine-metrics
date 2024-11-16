import React from "react";
import { Bitcoin, DollarSign, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center md:flex-row w-full p-4 poppins-regular gap-x-6 bg-gray-100 text-gray-700"
    >
      <div className="links flex flex-col md:flex-row md:gap-x-6 md:w-2/3">
        <ul className="my-4 md:my-0">
          <h2 className="text-primary font-medium text-lg">Quick Links</h2>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            About Us
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            FAQs
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            Terms & Conditions
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            Contact Us
          </li>
        </ul>
        <ul className="my-4 md:my-0">
          <h2 className="text-primary font-medium text-lg">Help & Support</h2>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            What is Bitcoin
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            How To Buy Bitcoin
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            Login
          </li>
          <li className="cursor-pointer hover:text-primary text-xs md:text-lg">
            Forgot Password
          </li>
        </ul>
        <div className="my-4 md:my-0">
          <h1 className="text-primary font-medium text-lg">Contact us</h1>
          <h3>914 WILSHIRE BLVD #1000, LOS ANGELES, CA 90017, AMERICA</h3>
          <a
            href="mailto:SUPPORT@MineMetrics.COM"
            className="text-primary font-medium"
          >
            SUPPORT@MineMetrics.COM
          </a>
          <h3>+1 (602) 738-7037</h3>
          <h3>MON-SAT 08AM ⇾ 05PM</h3>
          <div className="flex gap-x-2 mt-2 text-primary">
            <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
            <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
      <div className="info flex flex-col items-center md:items-start md:w-1/3">
        <div className="flex flex-col pb-4 border-b-2 border-gray-400 mb-4">
          <div>
            <h1 className="text-xl text-primary font-medium">$198.76B</h1>
            <h2 className="text-gray-600">MARKET CAP</h2>
            <h1 className="text-xl text-primary font-medium">69K+</h1>
            <h2 className="text-gray-600">ACTIVE ACCOUNTS</h2>
          </div>
          <div>
            <h1 className="text-xl text-primary font-medium">234k</h1>
            <h2 className="text-gray-600">WEEKLY TRANSACTIONS</h2>
            <h1 className="text-xl text-primary font-medium">127</h1>
            <h2 className="text-gray-600">SUPPORTED COUNTRIES</h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg text-primary font-medium mb-2">
            SUPPORTED PAYMENT
          </h1>
          <div className="flex gap-x-2 text-primary">
            <Bitcoin className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
            <DollarSign className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
