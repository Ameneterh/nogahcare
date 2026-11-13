import {
  ArrowRight,
  Menu,
  X,
  PhoneCall,
  MailPlus,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["How it works", "#how-it-works"],
    ["Pharmacy partners", "#pharmacy-network"],
    ["Resources", "#resources"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="flex flex-col bg-[#171A3F] px-4 md:px-8 lg:px-10 border-b-2 border-b-white z-50">
      <div className="flex items-center justify-end py-3 gap-3 md:gap-6">
        <div className="flex items-center gap-1">
          <Link
            to="#"
            className="flex items-center justify-center p-1 w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 hover:text-white"
          >
            <PhoneCall />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center p-1 w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 hover:text-white"
          >
            <MailPlus />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center p-1 w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 hover:text-white"
          >
            <Twitter />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center p-1 w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 hover:text-white"
          >
            <Linkedin />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center p-1 w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 hover:text-white"
          >
            <Facebook />
          </Link>
        </div>
        <a
          className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md flex items-center"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          LOGIN <ArrowRight size={15} />
        </a>
      </div>

      <div className="w-full bg-blue-600 h-[1px] mb-1"></div>
      <div className="flex items-center justify-between w-full py-1">
        <div className="flex items-center gap-1">
          <Link to="#home" className="flex items-center gap-2">
            <img
              src="/nogahcare-logo.png"
              alt="NogahCare"
              className="w-10 md:w-16"
            />
            <p className="text-lg md:text-3xl font-extrabold text-white">
              Nogah<span className="text-blue-600 italic">Care</span>
            </p>
          </Link>
        </div>

        {/* large screen nav links */}
        <nav className="hidden md:flex items-center gap-5">
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="text-gray-200 uppercase text-sm hover:text-white hover:underline underline-offset-2"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="block md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {/* display: none; position: absolute; top: 70px; left: 0; right: 0;
        background: #fff; padding: 18px 22px 24px; box-shadow: 0 18px 25px
        rgba(23, 26, 67, 0.1); flex-direction: column; align-items: stretch;
        gap: 0; */}
        <nav className={open ? "flex" : "hidden"}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
