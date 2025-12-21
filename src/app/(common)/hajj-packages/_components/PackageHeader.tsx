import { Home } from 'lucide-react';
import React from 'react';

const PackageHeader = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-8">
            <div className="flex items-center gap-2 mb-2">
                <Home size={24} color="#C89A0C" />
                <span className="text-lg md:text-xl font-medium text-gray-700">
                    আপনার হজ্জ প্যাকেজ
                </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d3e] text-center leading-tight">
                নিখুঁত হজ এবং ওমরাহ প্যাকেজটি খুঁজে নিন
            </h2>
        </div>
        </div>
    );
};

export default PackageHeader;