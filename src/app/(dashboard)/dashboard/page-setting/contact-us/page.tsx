import React from "react";
import { DashboardWrapper } from "../../_components/DashboardWrapper";
import ContactUsCRUD from "./_components/ContactUsCRUD";
import { getContactUs } from "@/services/contactus";

const ContactUsPage = async() => {
  const contactUsData = await getContactUs([]);
  
  // Safely extract the first item if it exists, handling both { data: [...] } and { data: { data: [...] } } shapes
  const firstContactUs = Array.isArray(contactUsData?.data) 
    ? contactUsData.data[0] 
    : contactUsData?.data?.data?.[0];

  return (
    <DashboardWrapper>
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">Contact Us</h1>
      <ContactUsCRUD contactUsData={firstContactUs} />
    </DashboardWrapper>
  );
};

export default ContactUsPage;
