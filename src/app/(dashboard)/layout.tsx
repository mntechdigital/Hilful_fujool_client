export const dynamic = "force-dynamic";

import { Navbar } from "./_components/DashboardNavbar";
import { Sidebar } from "./_components/DashboardSidebar";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const demoData = {
    id: "admin-001",
    fullName: "John Doe",
    email: "john.doe@example.com",
    password: "hashed_password_here",
    profilePhoto: "/images/profile.png",
    coverPhoto: "/images/cover.png",

    // 👇 This is now a literal type, NOT generic string
    status: "ACTIVE",

    isDeleted: false,
    roleId: "role-001",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),

    role: {
      id: "role-001",
      name: "Super Admin",
      status: "ACTIVE", // also typed correctly

      roleFeature: [
        {
          id: "rf-001",
          name: "Dashboard",
          index: 1,
          path: "/dashboard",
          isChecked: true,
        },
        {
          id: "rf-002",
          name: "Manage Users",
          index: 2,
          path: "/dashboard/users",
          isChecked: true,
        },
        {
          id: "rf-003",
          name: "Settings",
          index: 3,
          path: "/dashboard/settings",
          isChecked: false,
        },
      ],

      adminUser: [], // optional
    },
  };
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar adminData={demoData} />
      <div className="flex flex-1">
        <Sidebar adminData={demoData} />
        <main className="flex-1 overflow-auto ml-0 md:ml-56 pt-0 mt-0">
          {children}
        </main>
      </div>
    </section>
  );
}
