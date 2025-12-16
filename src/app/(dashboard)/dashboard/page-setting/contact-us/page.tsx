import React from "react";
import { DashboardWrapper } from "../../_components/DashboardWrapper";
import ContactUsCRUD from "./_components/ContactUsCRUD";

const ContactUsPage = () => {
  return (
    <DashboardWrapper>
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">Contact Us</h1>
      <ContactUsCRUD />
    </DashboardWrapper>
  );
};

export default ContactUsPage;
