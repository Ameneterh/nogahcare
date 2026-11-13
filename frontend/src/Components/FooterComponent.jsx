import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { MdMarkEmailUnread, MdPhoneInTalk, MdWhatsapp } from "react-icons/md";
import { company_info } from "../assets/company_info.js";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function FooterComponent() {
  const date = new Date();

  return (
    <footer className="bg-[#111432] text-[#fff] py-5 px-3 site-footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-3 pb-5">
        <div className="footer-brand">
          <div className="flex items-center gap-2">
            <img
              src="/nogahcare-logo.png"
              alt="NogahCare"
              className="w-10 md:w-14"
            />
            <span className="text-white font-extrabold text-2xl md:text-4xl">
              Nogah<span className="italic text-blue-600">Care</span>
            </span>
          </div>
          <p className="text-xs text-[#aeb7d0] max-w-48 mt-1 mb-4">
            Healthcare and medicines, made more accessible.
          </p>

          <div className="flex gap-2">
            <Link
              to="#contact"
              aria-label="Instagram"
              className="h-7 w-7 rounded-lg grid place-content-center text-[#d8e0f2] bg-[#ffffff17] hover:bg-[#242955] hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Instagram size={18} />
            </Link>
            <Link
              to="#contact"
              aria-label="Facebook"
              className="h-7 w-7 rounded-lg grid place-content-center text-[#d8e0f2] bg-[#ffffff17] hover:bg-[#242955] hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Facebook size={18} />
            </Link>
            <Link
              to="#contact"
              aria-label="LinkedIn"
              className="h-7 w-7 rounded-lg grid place-content-center text-[#d8e0f2] bg-[#ffffff17] hover:bg-[#242955] hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* company links */}
        <div>
          <h4 className="text-sm font-bold text-[#fff] mt-2 mb-1">Company</h4>
          <Link
            to="#about"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            About us
          </Link>
          <Link
            to="#services"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Our services
          </Link>
          <Link
            to="#contact"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Contact us
          </Link>
        </div>

        {/* services links */}
        <div>
          <h4 className="text-sm font-bold text-[#fff] mt-2 mb-1">Services</h4>
          <Link
            to="#services"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Online pharmacy
          </Link>
          <Link
            to="#services"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Telehealth
          </Link>
          <Link
            to="#services"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Prescription support
          </Link>
          <Link
            to="#resources"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Health education
          </Link>
        </div>

        {/* partnership links */}
        <div>
          <h4 className="text-sm font-bold text-[#fff] mt-2 mb-1">
            Partnerships
          </h4>
          <Link
            to="#pharmacy-enquiry"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Pharmacy partners
          </Link>
          <Link
            to="#professional-enquiry"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Healthcare professionals
          </Link>
        </div>

        {/* legal links */}
        <div>
          <h4 className="text-sm font-bold text-[#fff] mt-2 mb-1">Legal</h4>
          <Link
            to="#contact"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Privacy policy
          </Link>
          <Link
            to="#contact"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Terms and conditions
          </Link>
          <Link
            to="#contact"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Cookie policy
          </Link>
          <Link
            to="#contact"
            className="flex my-1 text-[#aeb7d0] hover:text-[#7be0d3] text-sm"
          >
            Medical disclaimer
          </Link>
        </div>
      </div>

      {/* footer bottom */}
      <div className="w-full h-[1.5px] bg-[#ffffff1f]"></div>
      <div className="max-w-7xl mx-auto border-t-2 border-t-[#ffffff1f] pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-3 text-xs text-[#8e98b4] footer-bottom">
        <span className="text-center md:text-left">
          © {new Date().getFullYear()} NogahCare. All rights reserved.
        </span>
        <span className="text-center">
          Designed for a more connected healthcare experience.
        </span>
        <span className="text-center md:text-right">
          Developed & maintained by{" "}
          <Link
            to="https://infonetgrafix.onrender.com"
            className="text-blue-600"
            target="_blank"
          >
            Infonet Grafix Global
          </Link>
        </span>
      </div>
    </footer>
  );
}
