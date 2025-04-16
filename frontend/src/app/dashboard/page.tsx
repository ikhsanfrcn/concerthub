import { MainTemplate } from "@/template/MainTemplate";
import { SidebarDashboard } from "./components/Sidebar";
import { MyProfile } from "./components/MyProfile";
import { MyProfileMobile } from "./components/MyProfileMobile";
import { SessionProvider } from "next-auth/react";

export default function Dashboard() {
  return (
    <MainTemplate>
      <SessionProvider>
        <div className="hidden lg:block flex justify-between max-w-[1224px] mx-auto bg-neutral-300">
          <SidebarDashboard />
          <MyProfile />
        </div>
        <div className="bg-neutral-100 h-screen">
          <MyProfileMobile />
        </div>
      </SessionProvider>
    </MainTemplate>
  );
}
