// import React from 'react'
import Image from "next/image";
import mosque from "../../../../../public/icons/about-us.png"
// import fivepillarbg from "../../../../../public/fivepillarbg.png"


import React from 'react';

const FIvePillarOfIslam = () => {
  const pillars = [
    {
      number: '১',
      title: 'শাহাদাহ (বিশ্বাস)',
      description: 'আল্লাহ ছাড়া আর কোনো উপাস্য নেই, এবং মুহাম্মদ ﷺ তাঁর প্রেরিত রাসূল—এই সাক্ষ্য প্রদান করা।',
      icon: '📖'
    },
    {
      number: '২',
      title: 'সালাত (নামাজ)',
      description: 'আল্লাহর উপাসনা ও আল্লাহর পবিত্রতার মাধ্যম; প্রতিদিন পাঁচ ওয়াক্ত আদায় করা ফরজ।',
      icon: '🤲'
    },
    {
      number: '৩',
      title: 'যাকাত (দান)',
      description: 'নির্দিষ্ট পরিমাণ সম্পদের উপর দরিদ্রদের হক হিসেবে যাকাত প্রদান করা।',
      icon: '💚'
    },
    {
      number: '৪',
      title: 'সাওম (রোজা)',
      description: 'রমজান মাসে আল্লাহর সন্তুষ্টির জন্য ভোর থেকে সূর্যাস্ত পর্যন্ত খানা, পানীয় ও অন্যান্য বিষয় থেকে বিরত থাকা।',
      icon: '🌙'
    },
    {
      number: '৫',
      title: 'হজ (ইমানের পরিপূর্ণতা)',
      description: 'জীবনে একবার সক্ষম কারা শরীকে গিয়ে নির্দিষ্ট নিয়মে হজ পালন করা ইসলামের অন্যতম প্রধান ইবাদত।',
      icon: '🕋'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-white text-2xl">
                <Image src={mosque} alt="mosque icon" width={24} height={24} />
            </span>
          </div>
          <h2 className="text-amber-800 text-lg font-semibold">ইসলামের পাঁচটি স্তম্ভ</h2>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          ইসলামের মৌলিক পাঁচ স্তম্ভ
        </h1>
        
        <p className="text-gray-600 text-lg max-w-4xl">
          ইসলাম পাঁচটি স্তম্ভের উপর প্রতিষ্ঠিত। প্রতিটি মুসলিমকে এই পাঁচটি নীতির উপর 
          দৃঢ়ভাবে বিশ্বাস রাখতে হবে। সকল মুসলিমকে এইসব সাথে প্রথম তিনটি নীতি যথাসম্ভব পালন করতে হবে, 
          এবং শেষ দুটি নীতি যথাসম্ভব পালন করতে হবে।
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {pillars.map((pillar, index) => (
          <div key={index} className="relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-50 rounded-t-full opacity-80" 
                 style={{
                   clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                 }}>
            </div>
            
            {/* Content */}
            <div className="relative p-6 pt-8">
              {/* Number Badge */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{pillar.number}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-gray-800 font-bold text-lg mb-4 min-h-[3rem] flex items-center justify-center">
                {pillar.title}
              </h3>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-amber-600 flex items-center justify-center bg-white">
                  <span className="text-5xl">{pillar.icon}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm text-center leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FIvePillarOfIslam;
