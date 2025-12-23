import React from "react";
import { DashboardWrapper } from "../../_components/DashboardWrapper";
import MainAboutUsForm from "./_components/MainAboutUsForm";
import OthersAboutUsForm from "./_components/OthersAboutUsForm";
import { getAboutus } from "@/services/About-us";

const AboutUsPage = async() => {
  const aboutUsMainFormData = await getAboutus([]);// Fetch about us data if needed
  return (
    <DashboardWrapper>
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">About Us</h1>
      <MainAboutUsForm aboutusData={aboutUsMainFormData?.data}/>
      <OthersAboutUsForm/>
    </DashboardWrapper>
  );
};

export default AboutUsPage;
