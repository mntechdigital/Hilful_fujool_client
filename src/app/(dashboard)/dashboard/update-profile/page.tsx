import React from "react";
import UpdateProfileCRUD from "./_components/UpdateProfileCRUD";
import { DashboardWrapper } from "../_components/DashboardWrapper";

const UpdateProfilePage = () => {
  return (
    <DashboardWrapper>
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">Update Profile</h1>
      <UpdateProfileCRUD />
    </DashboardWrapper>
  );
};

export default UpdateProfilePage;
