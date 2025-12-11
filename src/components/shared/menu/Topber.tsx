import { Youtube } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Topber = () => {
  return (
    <div className="w-full bg-brand">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-8 py-2 text-white text-xs md:text-sm">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="inline-block" />
            <span className="font-semibold tracking-wide">
              +88 1768 1718 604
            </span>
          </span>
          <span className="hidden md:inline-block">|</span>
          <span className="flex items-center gap-1">
            <FaEnvelope className="inline-block" />
            <span className="font-semibold tracking-wide">
              support@gmail.com
            </span>
          </span>
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border border-white rounded bg-transparent hover:bg-white/10 transition-colors"
          >
            <FaFacebookF className="text-white text-base" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border border-white rounded bg-[#b88a00] hover:bg-[#b88a00]/90 transition-colors"
          >
            <FaTwitter className="text-white text-base" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border border-white rounded bg-transparent hover:bg-white/10 transition-colors"
          >
            <FaLinkedinIn className="text-white text-base" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center border border-white rounded bg-transparent hover:bg-white/10 transition-colors"
          >
            <Youtube className="text-white text-base" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topber;
