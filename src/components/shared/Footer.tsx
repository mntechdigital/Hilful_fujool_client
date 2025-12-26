import Image from 'next/image';
import foolterImage from "../../../public/footerimage.png"
import sitelogo from "../../../public/hilful_fujul.png"
import { getContactUs } from '@/services/contactus';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Youtube } from 'lucide-react';
const Footer = async () => {
    const topberResponse = await getContactUs([])
    const topberData = topberResponse?.data?.data[0];
    // Fallback if no data
    if (!topberData) return null;
    return (
        <footer className="relative bg-black/80 text-white pt-10 pb-4" style={{ backgroundImage: `url(${foolterImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-70" style={{ zIndex: 1 }} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
                {/* Left: Contact & Logo */}
                <div className="flex-1 flex flex-col gap-6 min-w-[250px]">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <svg width="32" height="32" fill="#FFC107" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-.9 3.8c-.2.4-.4.8-.7 1.2-.2.3-.5.6-.7.9-.2.2-.4.4-.6.6-.2.2-.4.3-.6.5-.2.1-.4.3-.6.4-.2.1-.4.2-.6.3-.2.1-.4.1-.6.2-.2 0-.4.1-.6.1-.2 0-.4 0-.6-.1-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.6-.3-.2-.1-.4-.3-.6-.4-.2-.2-.4-.3-.6-.5-.2-.2-.4-.4-.6-.6-.2-.3-.5-.6-.7-.9-.3-.4-.5-.8-.7-1.2A8.38 8.38 0 0 1 3 10.5C3 6.36 6.36 3 10.5 3S18 6.36 18 10.5z" /></svg>
                            <span className="font-semibold text-lg">আবারও তথ্যের জন্য যোগাযোগ করুন</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400 text-2xl font-bold mb-2">
                            <svg width="28" height="28" fill="#FFC107" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" /></svg>
                            <span>{topberData.companyNumber}</span>
                        </div>
                    </div>
                    <hr className="border-yellow-600 my-4 opacity-60" />
                    <div className="flex flex-col items-center gap-2">
                        <Image src={topberData.image || sitelogo} alt="Logo" width={80} height={80} className="rounded-full bg-white p-1" />
                        <p className="text-center text-gray-200 text-sm mt-2">
                            আপনার পবিত্র হজ্ব ও ওমরাহ তীর্থযাত্রার পরিকল্পনা এবং বুকিংয়ের জন্য আপনার বিশ্বস্ত অংশীদার, প্রার্থনায় আপনাকে স্বাগতম।
                        </p>
                    </div>
                </div>
                {/* Center: Info & Services */}
                <div className="flex-[2] flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
                    <div>
                        <h4 className="font-bold mb-2">Information</h4>
                        <ul className="space-y-1 text-gray-200">
                            <li>হোম</li>
                            <li>আমাদের সম্পর্কে</li>
                            <li>সেবা</li>
                            <li>যোগাযোগ</li>
                            <li>আমাদের ব্লগ</li>
                            <li>গ্যালারি</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Our Services</h4>
                        <ul className="space-y-1 text-gray-200">
                            <li>ব্যবস্থা প্রস্তুতকারক</li>
                            <li>থাকার ব্যবস্থা</li>
                            <li>ফ্লাইট বুকিং</li>
                            <li>নিরাপত্তা সেবা</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Location</h4>
                        <p className="text-gray-200">{topberData.companyLocation}</p>
                        <a href={`mailto:${topberData.companyEmail}`} className="text-white underline font-bold block mt-2">{topberData.companyEmail}</a>
                    </div>
                </div>
                {/* Right: Social */}
                <div className="flex-1 flex flex-col items-center md:items-end gap-6 min-w-[200px]">
                    <div>
                        <span className="font-semibold mb-2 block">Follow On Us</span>
                        <div className="flex items-center gap-2 md:gap-3">
                            <a
                                href={topberData.facebookUrl || "#"}
                                className="w-8 h-8 flex items-center justify-center border border-white rounded bg-transparent hover:bg-white/10 transition-colors"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaFacebookF className="text-white text-base" />
                            </a>
                            <a
                                href={topberData.instagramUrl || "#"}
                                className="w-8 h-8 flex items-center justify-center border border-white rounded bg-transparent hover:bg-white/10 transition-colors"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-white text-base" />
                            </a>
                            <a
                                href={topberData.youtubeUrl || "#"}
                                className="w-8 h-8 flex items-center justify-center border border-white rounded bg-transparent hover:bg-white/10 transition-colors"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <Youtube className="text-white text-base" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 mt-8">
                <hr className="border-yellow-600 opacity-60 mb-2" />
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
                    <span>© {new Date().getFullYear()} {topberData.title}. All Rights Reserved.</span>
                    <span>Designed and Developed by <a href="https://mntechdigital.com" className="text-red-400 underline">MNTECH DIGITAL</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;