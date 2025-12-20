import Image from 'next/image';
import foolterImage from "../../../public/footerimage.png"
import sitelogo from "../../../public/hilful_fujul.png"
const Footer = () => {
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
                            <span>+1 (212) 555-7890</span>
                        </div>
                    </div>
                    <hr className="border-yellow-600 my-4 opacity-60" />
                    <div className="flex flex-col items-center gap-2">
                        <Image src={sitelogo} alt="Logo" width={80} height={80} className="rounded-full bg-white p-1" />
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
                        <p className="text-gray-200">Al-Masjid Al-Haram Street No. 27,<br />Makkah, Saudi Arabia</p>
                        <a href="mailto:contact@gmail.com" className="text-white underline font-bold block mt-2">contact@gmail.com</a>
                    </div>
                </div>
                {/* Right: Social */}
                <div className="flex-1 flex flex-col items-center md:items-end gap-6 min-w-[200px]">
                    <div>
                        <span className="font-semibold mb-2 block">Follow On Us</span>
                        <div className="flex gap-3 mt-2">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M17.707 7.293a1 1 0 0 0-1.414 0l-1.293 1.293A6.978 6.978 0 0 0 12 8c-1.657 0-3.156.672-4.293 1.707l-1.293-1.293a1 1 0 0 0-1.414 1.414l1.293 1.293A6.978 6.978 0 0 0 8 12c0 1.657.672 3.156 1.707 4.293l-1.293 1.293a1 1 0 0 0 1.414 1.414l1.293-1.293A6.978 6.978 0 0 0 12 16c1.657 0 3.156-.672 4.293-1.707l1.293 1.293a1 1 0 0 0 1.414-1.414l-1.293-1.293A6.978 6.978 0 0 0 16 12c0-1.657-.672-3.156-1.707-4.293l1.293-1.293a1 1 0 0 0 0-1.414z" /></svg></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186c-.835.37-1.732.62-2.675.732.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.906-2.062-1.474-3.404-1.474-2.577 0-4.667 2.09-4.667 4.667 0 .366.041.723.12 1.066-3.88-.195-7.318-2.054-9.62-4.88-.402.69-.632 1.49-.632 2.347 0 1.62.825 3.05 2.08 3.89-.765-.025-1.484-.234-2.113-.584v.06c0 2.263 1.61 4.15 3.747 4.58-.392.107-.805.164-1.23.164-.301 0-.593-.029-.877-.083.594 1.853 2.318 3.2 4.363 3.236-1.599 1.253-3.617 2.001-5.813 2.001-.378 0-.75-.022-1.116-.065 2.072 1.33 4.533 2.106 7.184 2.106 8.62 0 13.344-7.144 13.344-13.344 0-.204-.005-.408-.014-.61.916-.661 1.71-1.49 2.34-2.436z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 mt-8">
                <hr className="border-yellow-600 opacity-60 mb-2" />
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
                    <span>© 2025 Hilful Fujool Tours and Travels. All Rights Reserved.</span>
                    <span>Designed and Developed by <a href="https://mntechdigital.com" className="text-red-400 underline">MNTECH DIGITAL</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;