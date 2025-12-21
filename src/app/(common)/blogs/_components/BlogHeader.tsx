import { Home } from "lucide-react";

const BlogHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="flex items-center gap-2 mb-2">
                <Home size={24} color="#C89A0C" />
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