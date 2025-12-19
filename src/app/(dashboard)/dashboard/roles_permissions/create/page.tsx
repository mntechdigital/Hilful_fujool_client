import React from "react";
import CreateRoleForm from "./_components/CreateRoleForm";

const CreateRolePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0f3d3e] mb-6">Create Admin User</h1>
      <CreateRoleForm />
    </div>
  );
};

export default CreateRolePage;
