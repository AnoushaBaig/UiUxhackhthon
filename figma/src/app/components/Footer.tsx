import React from "react";
import Image from "next/image";
import { Facebook ,Twitter,Linkedin , Instagram, Link } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-9">
          {/* Exclusive Section */}

          {/* Support Section */}
          {/* Account Section */}
          <div>
            <h2 className="font-medium text-xl">Menu</h2>
            <ul className="mt-4 space-y-3 text-zinc-200 font-light">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Recently Viewed</li>
              <li>Popular This Week</li>
              <li>All Product</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="font-medium text-xl">Categories</h2>
            <ul className="mt-4 space-y-3 text-zinc-200 font-light">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>HomeWare</li>
              <li>Plant Pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h2 className="font-medium text-xl">Our Company</h2>
            <ul className="mt-4 space-y-3 text-zinc-200 font-light">
              <li>About Us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-xl">Contact us</h2>
            <p className="mt-4 text-zinc-200 font-light">Join our meeting list</p>
            <p className="mt-4 text-zinc-200 font-light"></p>
            <div className="mt-4 flex items-center border border-white rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white p-2 flex-grow outline-dotted rounded-lg"
              />
              <button className="p-2">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4 justify-end">
          {/* <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>

          <i className="fab fa-linkedin-in"></i> */}
        
          <FaLinkedinIn/>
          <FaTwitter/>
          <FaInstagram/>
          <FaFacebook/>
          <></>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-start border-t border-zinc-800 text-white">
        <p className="py-6">© Copyright 2022 Avion LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
