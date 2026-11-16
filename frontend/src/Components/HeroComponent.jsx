import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCategoryStore } from "../store/categoryStore";
import { useAuthStore } from "../store/authStore";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroArt from "./CommonParts/HeroArt";

export default function HeroComponent() {
  const date = new Date();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { getCategories, error } = useCategoryStore();

  const [categories, setCategories] = useState([]);

  //   getting categories
  const getAllCategories = async () => {
    try {
      const { categories } = await getCategories();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [user]);

  return (
    <section
      className="w-full flex flex-col bg-[#171A3F] gap-8 min-h-screen items-center"
      id="home"
      style={{
        backgroundImage: "url('/hero_bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(0,31,63,0.8)_100%)] gap-8 min-h-screen py-10 px-4 md:px-8 lg:px-10 bg-opacity-70">
        <div className="flex flex-col max-w-7xl mx-auto h-full">
          <p className="text-xs md:text-sm font-semibold text-green-500 flex items-center gap-1">
            <span className="bg-green-600 rounded-full h-1 w-1 shadow-md"></span>
            NOGAH CARE | DIGITAL HEALTHCARE
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hero-copy">
              {/* <span className="text-[#7be0d3] mb-5">
            A more connected healthcare experience
          </span> */}

              <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-1/2">
                Healthcare and medicines,{" "}
                <span className="italic block md:text-5xl">
                  made more accessible.
                </span>
              </h1>

              <p className="text-[#d5d9ec] text-sm md:text-lg max-w-96 leading-5 py-3 mb-4">
                Access convenient online healthcare consultations, connect with
                trusted pharmacy partners, manage prescriptions, and get
                medicines delivered to your doorstep through NogahCare.
              </p>
              <div className="flex items-center gap-5 mb-8">
                <a
                  href="#contact"
                  className="text-sm bg-teal-600 text-teal-950 flex items-center gap-2 px-3 py-2 hover:scale-105 hover:text-white transition-all duration-300 rounded-md"
                >
                  Get started <ArrowRight size={17} />
                </a>
                <Link
                  to="#services"
                  className="text-sm bg-blue-600 border-2 border-white text-white flex items-center gap-2 px-3 py-2 hover:scale-105 hover:text-white transition-all duration-300 rounded-md"
                >
                  Explore our services
                </Link>
              </div>

              <Link
                to="#pharmacy-network"
                className="text-[#c6cbe0] text-nowrap"
              >
                Are you a pharmacy?{" "}
                <span className="font-bold text-[#8be0d6]">
                  Join our network <ArrowRight size={14} />
                </span>
              </Link>
              <div className="flex items-center gap-8 mt-5 mb-10">
                <span className="text-sm flex items-center text-[#c7cee6] gap-2">
                  <CheckCircle2 size={16} className="text-[#6bd4c6]" />{" "}
                  Patient-focused
                </span>
                <span className="text-sm flex items-center text-[#c7cee6] gap-2">
                  <CheckCircle2 size={16} className="text-[#6bd4c6]" />{" "}
                  Connected care
                </span>
              </div>
            </div>
            {/* <HeroArt /> */}
            <img src="/heroimage.png" alt="hero-image" className="w-full" />
          </div>
          {/* <div className="w-full h-36 rounded-lg bg-[#d86767]"></div> */}
        </div>
      </div>
    </section>
  );
}
