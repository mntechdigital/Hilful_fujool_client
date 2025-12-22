import React from "react";
import PackageDetails from "./_components/PackageDetails";
import HeroSection from "../../_components/HeroSection";
import { getPackagesById } from "@/services/package";

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
      <PackageDetails key={packageDetails.id} {...packageData} />
    </div>
  );
};

export default PackageDetailspage;
