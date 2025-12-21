
import { Home } from "lucide-react";

const ServiceHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="flex items-center gap-2 mb-2">
        <Home size={24} color="#C89A0C" />
        <span className="text-sm text-[#0f3d3e] font-medium">আমাদের সেবাসমূহ</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f3d3e] text-center leading-tight">
        আমাদের বিস্তৃত হজ ও ওমরাহ পরিবেশবাগুলি<br />
        আবিষ্কার করুন
      </h2>
    </div>
  );
};

export default ServiceHeader;
