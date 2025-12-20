
import kabaimage from "../../../../public/BG (2).png";
const HeroSection = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <section
            className="relative w-full h-48 md:h-56 flex items-center justify-center bg-black/80 overflow-hidden"
            style={{ minHeight: '180px' }}
        >
            {/* Background image (replace src as needed) */}
            <img
                src={kabaimage.src}
                alt="Kaaba background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                style={{ zIndex: 1 }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70" style={{ zIndex: 2 }} />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center drop-shadow-lg">{title}</h1>
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <a href="/" className="text-yellow-400 flex items-center gap-1 hover:underline">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.364 17.364a9 9 0 1 1 3.272 0l-.636-2.45A6.978 6.978 0 0 0 19 12a7 7 0 1 0-7 7c.85 0 1.67-.13 2.364-.364z" />
                        </svg>
                        Home
                    </a>
                    <span className="text-white">&#187;</span>
                    <span className="text-white">{subtitle}</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;