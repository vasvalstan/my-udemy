import { ReactNode } from "react"; // Import ReactNode type

import { Sidebar } from "./_components/sidebar";
import { SidebarRoutes } from "./_components/sidebar-routes";
import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // Use ReactNode type for children prop
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
