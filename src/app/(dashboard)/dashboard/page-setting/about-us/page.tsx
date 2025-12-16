import React from "react";
import { DashboardWrapper } from "../../_components/DashboardWrapper";

const AboutUsPage = () => {
  return (
    <DashboardWrapper>
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">About Us</h1>
      <AboutUsCRUD />
    </DashboardWrapper>
  );
};

export default AboutUsPage;
import AboutUsCRUD from "./_components/AboutUsCRUD";
