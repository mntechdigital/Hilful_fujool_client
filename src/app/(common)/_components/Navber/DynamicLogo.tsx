import { getContactUs } from '@/services/contactus';
import React from 'react';

import siteLogo from "../../../../../public/hilful_fujul.png"
import { Link } from 'lucide-react';
import Image from 'next/image';
const DynamicLogo = async () => {
    const topberResponse = await getContactUs([]);
    const topberData = topberResponse?.data?.data[0];
    if (!topberResponse) return null;
    return (
        <div className="flex items-center gap-2">
            <Link href="/">
                <div className="w-12 h-12 rounded-full border-2 border-[#0E595C] overflow-hidden">
                    <Image
                        src={topberData.image || siteLogo}
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </Link>
        </div>
    );
};

export default DynamicLogo;