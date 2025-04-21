import { DesktopDashboard } from "./components/DesktopDashboard";
import { SessionProvider } from "next-auth/react";
import { Navbar } from "@/components/navbar/Navbar";
import { MobileDashboard } from "./components/MobileDashboard";

export default function Dashboard() {
  return (
    <SessionProvider>
      <Navbar />
      <div className="bg-neutral-50 min-h-screen">
        <div className="hidden min-[1024px]:block p-[24px] min-[1440px]:mx-[108px]">
          <DesktopDashboard />
        </div>
        <div className="block min-[1024px]:hidden">
          <MobileDashboard />
        </div>
      </div>
    </SessionProvider>
  );
}
