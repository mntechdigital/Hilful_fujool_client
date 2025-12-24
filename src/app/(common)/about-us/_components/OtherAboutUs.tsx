import Image from 'next/image';

import mosque from "../../../../../public/icons/about-us.png"
import groupImage from "../../../../../public/Group.png"
import lantern from "../../../../../public/BG image.png"
import kaba from "../../../../../public/Kaba Image.png"
import { getOtherAboutus } from '@/services/OtherAboutUs';

const OtherAboutUs = async() => {
    const otherAboutRes = await getOtherAboutus([]);
    const otherAboutData = otherAboutRes?.data;
    if (!otherAboutData) {
        return <div>No data available</div>;
    }
    console.log("see response ==>",otherAboutData);
  return (
    <section className="relative w-full bg-[#6B6B6B] overflow-hidden font-[Tiro Bangla]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-16 lg:py-20 px-6 lg:px-12 min-h-[500px] lg:min-h-[610px]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center gap-4 z-10 max-w-2xl">
          {/* Section label */}
          <div className="flex items-center gap-2.5 mb-1">
            <Image src={mosque} alt="mosque icon" width={24} height={24} className="opacity-90" />
            <span className="text-white text-base font-medium tracking-wide">আমাদের যাত্রা</span>
          </div>
          {/* Heading */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold leading-snug mb-3">
            {otherAboutData.title}
          </h1>
          {/* Subheading */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {otherAboutData.description}
          </p>
          {/* Stats */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-4">
            <div className="flex flex-col items-start">
              <span className="text-[#D4AF37] text-5xl md:text-6xl font-bold leading-none mb-2">{otherAboutData.experienceYears}+</span>
              <span className="text-white text-base font-normal">বছরের অভিজ্ঞতা</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[#D4AF37] text-5xl md:text-6xl font-bold leading-none mb-2">{otherAboutData.servicesProvided}+</span>
              <span className="text-white text-base font-normal">বিশ্বস্ত অংশীদার</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[#D4AF37] text-5xl md:text-6xl font-bold leading-none mb-2">{otherAboutData.trustedReviews}+</span>
              <span className="text-white text-base font-normal max-w-[200px]">হজযাত্রীদের সেবা প্রদান করা হয়েছে</span>
            </div>
          </div>
        </div>

        {/* Right: Images */}
        <div className="flex-1 flex items-end justify-center lg:justify-end relative min-h-[450px] lg:min-h-[500px] mt-12 lg:mt-0 w-full">
          {/* Kaaba illustration - positioned between the two men */}
          <div className="absolute left-[35%] lg:left-[40%] bottom-[140px] lg:bottom-[180px] z-10">
            <Image src={kaba} alt="Kaaba" width={110} height={110} className="drop-shadow-lg" />
          </div>
          {/* Two men images */}
          <div className="flex gap-2 items-end relative z-20">
            <Image src={otherAboutData.image} alt="Men praying" width={500} height={450} className="object-contain" />
          </div>
          {/* Gold lantern SVG (right side) */}
          <div className="absolute right-0 bottom-0 z-[5] opacity-80 hidden lg:block">
            <Image src={lantern} alt="Lantern" width={140} height={360} className="object-contain" />
          </div>
        </div>
      </div>
      {/* Top left mandala (decorative) - semi-transparent */}
      <div className="absolute top-0 left-0 z-0 opacity-30">
        <Image src={groupImage} alt="Mandala" width={280} height={280} className="object-contain" />
      </div>
    </section>
  );
}

export default OtherAboutUs;