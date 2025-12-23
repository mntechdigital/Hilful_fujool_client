import MosqueIcon from '@/../public/icons/mosque.svg';
import Image from 'next/image';
import img1 from "../../../../../public/icons/mosque.svg"
import img2 from "../../../../../public/icons/about-us.png"
import img3 from "../../../../../public/icons/about-us-1.png"
import img4 from "../../../../../public/icons/about-us-2.png"
import { getAboutus } from '@/services/About-us';

const AboutUs = async () => {
    const aboutusResponse = await getAboutus([]);
    const aboutUsData = aboutusResponse?.data;
    if (!aboutUsData) {
        return <div>No data available</div>;
    }
    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between py-8 md:py-16">
            {/* Left: 2x2 grid of images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                    <div className="w-full">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {/* Left column - 2 images, top larger than bottom */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {/* Top left - larger image */}
                                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                                    <img
                                        src={aboutUsData.aboutUsImages[0].image}
                                        alt="about-1"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                {/* Bottom left - smaller image */}
                                <div className="rounded-2xl overflow-hidden aspect-[3/2]">
                                    <img
                                        src={aboutUsData.aboutUsImages[1].image}
                                        alt="about-2"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Right column - 2 images, top smaller than bottom */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {/* Top right - smaller image */}
                                <div className="rounded-2xl overflow-hidden aspect-[3/2]">
                                    <img
                                        src={aboutUsData.aboutUsImages[2].image}
                                        alt="about-3"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                {/* Bottom right - larger image (Kaaba) */}
                                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                                    <img
                                        src={aboutUsData.aboutUsImages[3].image}
                                        alt="about-4"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col gap-6 max-w-2xl">
                {/* Section label */}
                <div className="flex items-center gap-2 text-yellow-600 font-semibold text-lg">
                    <Image src={img1} alt="icon" width={24} height={24} />
                    <span>আমাদের সম্পর্কে</span>
                </div>
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#184C43] leading-tight">
                    {aboutUsData?.title}
                </h2>
                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg">
                    {aboutUsData?.description}
                </p>
                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-4 bg-[#F8F8F8] rounded-xl p-5 shadow-sm">
                            <Image src={img1} alt="icon" width={40} height={40} />
                            <div>
                                <h3 className="font-bold text-lg text-[#184C43]">{aboutUsData.featureTitle1}</h3>
                                <p className="text-gray-600 text-sm">aboutUsData.featureShortDesc1</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-[#F8F8F8] rounded-xl p-5 shadow-sm">
                            <Image src={img2} alt="icon" width={40} height={40} />
                            <div>
                                <h3 className="font-bold text-lg text-[#184C43]">{aboutUsData.featureTitle2}</h3>
                                <p className="text-gray-600 text-sm">{aboutUsData.featureShortDesc2}</p>
                            </div>
                        </div>
                    </div>

                    {/* Goal Card */}
                    <div className="md:col-span-1 flex flex-col justify-between">
                        <div className="flex flex-col md:flex-row items-center justify-between border-2 border-yellow-600 rounded-xl p-5 mt-2 gap-4">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-yellow-600">
                                    <Image src={img3} alt="icon" width={40} height={40} />
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg text-[#184C43]">{aboutUsData.featureTitle2}</h3>
                                    <p className="text-gray-600 text-sm">{aboutUsData.featureShortDesc2}</p>
                                </div>
                            </div>
                            <button className="mt-3 md:mt-0 px-6 py-2 bg-yellow-600 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-700 transition">
                                All Services
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;