import React from "react";
import PackageDetails from "./_components/PackageDetails";
import HeroSection from "../../_components/HeroSection";
import { getPackagesById } from "@/services/package";
import PackageContactForm from "./_components/PackageContactForm";

interface EditBlogPageProps {
  params: { id: string };
}

const PackageDetailspage = async ({ params }: EditBlogPageProps) => {
  const { id } = params;
  const packageDetails = await getPackagesById(id);
  const packageData = packageDetails?.data;
  return (
    <div>
      <HeroSection title="Package Details" subtitle="Package Information" />
      <div className="max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
        <PackageDetails key={packageDetails.id} {...packageData} dynamicClassName="col-span-2"/>
        <PackageContactForm dynamicClassName="col-span-1"/>
      </div>
    </div>
  );
};

export default PackageDetailspage;
