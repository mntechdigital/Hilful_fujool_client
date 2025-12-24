import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  image: string;
  title: string;
  shortDescription?: string;
  description?: string;
  createdAt: string;
  status: boolean;
}

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <div className="relative shadow-lg bg-white rounded-3xl px-8 py-10 flex flex-col items-center text-center max-w-md mx-auto min-h-[420px] hover:shadow-2xl transition-all duration-300 group/card">
      {/* Badge */}
      <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#F7ECD3] to-[#E5D5A0] flex items-center justify-center text-[#0f3d3e] text-sm font-bold select-none shadow-sm">
        {String(index + 1).padStart(2, '0')}
      </span>
      
      {/* Icon/Image Container with Background */}
      <div className="mb-8 relative w-44 h-44 flex items-center justify-center">
        {/* Decorative background circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7ECD3]/30 to-[#E5D5A0]/20 rounded-full scale-110 group-hover/card:scale-115 transition-transform duration-300"></div>
        
        {/* Image */}
        <div className="relative w-full h-full z-10 rounded-full overflow-hidden">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            className="object-cover drop-shadow-lg"
            unoptimized
          />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-[#0f3d3e] mb-4 leading-tight min-h-[64px] flex items-center justify-center">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-base text-[#4A4A4A] font-normal mb-8 leading-relaxed flex-grow">
        {service.shortDescription || service.description || 'No description available'}
      </p>
      
      {/* Read More Link */}
      <Link 
        href={`/services/${service.id}`}
        className="w-full flex items-center justify-between bg-gradient-to-r from-[#C89A0C] to-[#D4A72C] hover:from-[#b08a0a] hover:to-[#C89A0C] text-lg font-semibold rounded-full px-8 py-3.5 transition-all duration-300 group shadow-md hover:shadow-xl no-underline"
      >
        <span className="text-white">Read More</span>
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight size={22} strokeWidth={2.5} className="text-white" />
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;