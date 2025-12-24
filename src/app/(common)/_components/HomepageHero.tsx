// import React from 'react'

import React from "react";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import mosque from "../../../../public/icons/about-us.png";
import heroBg from "../../../../public/Hero BG Image.png";
import { getHeroSection } from "@/services/Hero-section";
import { HeroSlider } from "./HeroSlider";

const HomepageHero = async () => {
  const heroDataResponse = await getHeroSection([]);
  const heroData = heroDataResponse?.data[0];

  console.log("hero data=>", heroData);
  if (!heroData || heroData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
        <div className="text-center">
          <p className="text-gray-600 text-lg">কোন তথ্য পাওয়া যায়নি</p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Decorative Mosque Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full h-32 md:h-48 text-black/30"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q150,80 300,100 T600,100 T900,100 T1200,100 L1200,200 L0,200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Icon with Text */}
            <div className="flex items-center gap-3 text-yellow-500">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src={mosque} alt="mosque icon" width={32} height={32} />
              </div>
              <span className="text-sm font-medium">
                হজ্জ অ্যাজেন্সী স্বাগতম!
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {heroData.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              {heroData.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-500/50">
                Explore Packages
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/20">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-slate-900 fill-slate-900 ml-1" />
                </div>
                Play Video
              </button>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

              {/* Image Container */}
              <div className="relative z-10 w-full">
                <HeroSlider sliderItems={heroData.images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
