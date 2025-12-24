
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
    <section className="relative w-full bg-black overflow-hidden font-[Tiro Bangla]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-0 px-4 md:px-0 min-h-[610px]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center gap-6 z-10">
          {/* Section label */}
          <div className="flex items-center gap-2 mb-2">
            <Image src={mosque} alt="mosque icon" width={28} height={28} />
            <span className="text-white text-lg font-semibold tracking-wide">আমাদের যাত্রা</span>
          </div>
          {/* Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
            {otherAboutData.title}
          </h1>
          {/* Subheading */}
          <p className="text-white/80 text-base md:text-lg max-w-xl mb-6">
            {otherAboutData.description}
          </p>
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <div className="flex flex-col items-start">
              <span className="text-yellow-400 text-4xl md:text-5xl font-bold leading-none">{otherAboutData.experienceYears}+</span>
              <span className="text-white text-base md:text-lg mt-2">বছরের অভিজ্ঞতা</span>
            </div>
            <div className="flex flex-col items-start sm:ml-12">
              <span className="text-yellow-400 text-4xl md:text-5xl font-bold leading-none">{otherAboutData.servicesProvided}+</span>
              <span className="text-white text-base md:text-lg mt-2">বিশ্বস্ত অংশীদার</span>
            </div>
            <div className="flex flex-col items-start sm:ml-12">
              <span className="text-yellow-400 text-4xl md:text-5xl font-bold leading-none">{otherAboutData.trustedReviews}+</span>
              <span className="text-white text-base md:text-lg mt-2">হজযাত্রীদের সেবা প্রদান করা হয়েছে</span>
            </div>
          </div>
        </div>

        {/* Right: Images */}
        <div className="flex-1 flex items-end justify-center relative min-h-[400px] mt-12 md:mt-0">
          {/* Kaaba illustration */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-32 z-10">
            <Image src={kaba} alt="Kaaba" width={120} height={120} />
          </div>
          {/* Two men praying and using phone */}
          <div className="flex gap-4 items-end relative z-20">
            <Image src={otherAboutData.image} alt="Man praying" width={220} height={420} className="object-contain" />
          </div>
          {/* Gold lantern SVG (right) */}
          <div className="absolute right-0 bottom-0 z-0 hidden md:block">
            <Image src={lantern} alt="Lantern" width={120} height={320} />
          </div>
        </div>
      </div>
      {/* Top left mandala (decorative) */}
      <div className="absolute top-0 left-0 z-0">
        <Image src={groupImage} alt="Mandala" width={260} height={260} />
      </div>
    </section>
  );
}

export default OtherAboutUs;
