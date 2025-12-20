
const BlogHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="flex items-center gap-2 mb-2">
                {/* Home icon SVG */}
                <svg width="36" height="36" fill="#FFC107" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="text-lg md:text-xl font-medium text-gray-700">
                    সাংস্কৃতিক ব্লগ
                </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d3e] text-center leading-tight">
                আপনার পবিত্র যাত্রার জন্য নির্দেশিকা, গল্প{" "}
                <br className="hidden md:block" /> এবং অনুপ্রেরণা
            </h2>
        </div>
    );
};

export default BlogHeader;