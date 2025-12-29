import React from "react";
import Image from "next/image";
import { Plane, MapPin, Clock, ArrowUpRight } from "lucide-react";
import package1 from "../../../../../public/package-1.png"
interface Package {
  id: number;
  title: string;
  image: typeof package1;
  route: string;
  location: string;
  duration: string;
  isFeatured?: boolean;
}

const PACKAGES: Package[] = [
  {
    id: 1,
    title: "হজ ভিআইপি প্যাকেজ",
    image: package1,
    route: "মক্কা, মদিনা ভ্রমণ",
    location: "সৌদি আরব",
    duration: "২৭ দিন ২৫ রাত",
    isFeatured: false,
  },
  {
    id: 2,
    title: "হজ স্পেশাল প্যাকেজ",
    image: package1,
    route: "মক্কা, মদিনা ভ্রমণ",
    location: "সৌদি আরব",
    duration: "৪৪ দিন ৪২ রাত",
    isFeatured: true,
  },
  {
    id: 3,
    title: "হজ 'এ' ক্যাটাগরি প্যাকেজ",
    image: package1,
    route: "মক্কা, মদিনা ভ্রমণ",
    location: "সৌদি আরব",
    duration: "৪৪ দিন ৪২ রাত",
    isFeatured: false,
  },
];

const DashboardPackage = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg my-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Latest Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  );
};

const PackageCard = ({ package: pkg }: { package: Package }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" unoptimized/>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-800">{pkg.title}</h3>
          <span className="text-amber-500">💎</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Plane className="w-4 h-4 text-amber-500" />
            <span>{pkg.route}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>{pkg.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>{pkg.duration}</span>
        </div>

        <div className="border-t border-dashed border-gray-300 pt-4">
          {pkg.isFeatured ? (
            <button className="w-full flex items-center justify-between px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors cursor-pointer">
              <span>বিস্তারিত পড়ুন</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          ) : (
            <button className="w-full flex items-center justify-between px-4 py-3 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <span>বিস্তারিত পড়ুন</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPackage;
