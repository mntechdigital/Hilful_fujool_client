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
    <div className="relative shadow-lg bg-white rounded-3xl px-8 py-12 flex flex-col items-center text-center max-w-md mx-auto min-h-[450px] hover:shadow-2xl transition-shadow duration-300">
      {/* Badge */}
      <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F7ECD3] flex items-center justify-center text-slate-600 text-md font-bold select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      
      {/* Icon/Image */}
      <div className="mb-6 relative w-28 h-28">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      
      {/* Title */}
      <h3 className="text-3xl font-bold text-[#0f3d3e] mb-4 leading-tight">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-lg text-[#4A4A4A] font-normal mb-10 leading-relaxed flex-grow">
        {service.shortDescription || service.description || 'No description available'}
      </p>
      
      {/* Read More Link */}
      <Link 
        href={`/services/${service.id}`}
        className="w-full flex items-center justify-between bg-gradient-to-r from-[#C89A0C] to-[#D4A72C] hover:from-[#b08a0a] hover:to-[#C89A0C] text-xl font-semibold rounded-full px-8 py-2 transition-all duration-300 group shadow-md no-underline"
      >
        <span className="text-white">Read More</span>
        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#E5A50A] to-[#C89A0C] group-hover:scale-110 transition-transform duration-300">
          <ArrowUpRight size={26} strokeWidth={2.5} className="text-white" />
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;