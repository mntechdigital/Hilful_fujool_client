import React from 'react';
import PackageCard from './PackageCard';

interface PackageCardProps {
    id: string | number;
    title: string;
    image: string;
    imageAlt?: string;
    journey: string;
    location: string;
    duration: string;
}

const PackageSection = ({ packages = [] }: { packages: PackageCardProps[] }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.length === 0 ? (
                <div className="col-span-full py-4 text-center text-gray-500">
                    No packages found
                </div>
            ) : (
                packages.map((item) => (
                    <PackageCard key={item.id} {...item} />
                ))
            )}
        </div>
    );
};

export default PackageSection;