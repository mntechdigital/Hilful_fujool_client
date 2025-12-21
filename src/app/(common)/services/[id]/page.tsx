import React from "react";
import ServiceDetails from "./_components/ServiceDetails";
import { getServiceById } from "@/services/service";
import HeroSection from "../../_components/HeroSection";

interface EditBlogPageProps {
  params: { id: string };
}
const ServiceDetailspage = async ({ params }: EditBlogPageProps) => {
  const { id } = params;
  const serviceDetails = await getServiceById(id);
  const serviceData = serviceDetails?.data;
  return (
    <div>
      <HeroSection title="Services" subtitle="Services" />
      <ServiceDetails service={serviceData} key={serviceData.id} />
    </div>
  );
};

export default ServiceDetailspage;
