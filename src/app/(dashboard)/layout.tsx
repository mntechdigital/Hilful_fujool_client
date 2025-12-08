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
          name: "Services",
          index: 2,
          path: "/services",
          isChecked: true,
        },
        {
          id: "rf-003",
          name: "Packages",
          index: 3,
          path: "/packages",
          isChecked: true,
        },
        {
          id: "rf-004",
          name: "Five Pillars of Islam",
          index: 4,
          path: "/fivePillarsOfIslam",
          isChecked: true,
        },
        {
          id: "rf-005",
          name: "Contacts",
          index: 5,
          path: "/contacts",
          isChecked: true,
        },
        {
          id: "rf-006",
          name: "Gallery",
          index: 6,
          path: "/gallery",
          isChecked: true,
        },
        {
          id: "rf-007",
          name: "Reviews",
          index: 7,
          path: "/reviews",
          isChecked: true,
        },
        {
          id: "rf-008",
          name: "Blogs",
          index: 8,
          path: "/blogs",
          isChecked: true,
        },
        {
          id: "rf-009",
          name: "Roles & Permissions",
          index: 9,
          path: "/roles_permissions",
          isChecked: true,
        },
        {
          id: "rf-010",
          name: "Settings",
          index: 10,
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
