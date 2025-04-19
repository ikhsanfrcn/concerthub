"use client";
import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { RiOrderPlayLine, RiProfileLine } from "react-icons/ri";
import { TbGiftCard } from "react-icons/tb";
import { ProfileForm } from "./ProfileForm";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import { OrderHistory } from "./OrderHistory";
import { GrDashboard } from "react-icons/gr";
import { OrganizerDashboard } from "./OrganizerDashboard";

export const DesktopDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading user data ...</p>;

  const user = session?.user;

  const handleActiveSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex space-x-[24px]">
      {/* SIDEBAR */}
      <aside className="rounded-2xl bg-white shadow-md min-w-[250px] min-h-[916px]">
        <div className="p-[32px]">
          <Image
            src={"/adele.png"}
            width={0}
            height={0}
            sizes="100"
            alt=""
            className="w-[48px] h-[48px] rounded-full"
          />
          <p className="mt-[16px] font-semibold">{`${user?.name} ${user?.lastName}`}</p>
        </div>
        <hr className="h-px bg-gray-200 border-0" />
        <div className="flex flex-col justify-between h-[calc(100%-170px)] mt-[16px] p-[32px]">
          <ul className="flex flex-col space-y-[18.5px]">
            <li>
              <button
                onClick={() => handleActiveSection("profile")}
                className="w-full text-left"
              >
                <Icon Component={RiProfileLine} label="My Profile" />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleActiveSection("orderHistory")}
                className="w-full text-left"
              >
                <Icon Component={RiOrderPlayLine} label="Order History" />
              </button>
            </li>
            <li>
              <Icon Component={TbGiftCard} link="#" label="Gift Card" />
            </li>
            <li>
              <Icon Component={CiSettings} link="#" label="Settings" />
            </li>
            <li>
              <Icon Component={FiHelpCircle} link="#" label="Help" />
            </li>
            <li>
              {session?.user.role === "ORGANIZER" ? (
                <button
                  onClick={() => handleActiveSection("organizerDashboard")}
                  className="w-full text-left"
                >
                  <Icon Component={GrDashboard} link="#" label="Dashboard" />
                </button>
              ) : null}
            </li>
          </ul>
          <ul className="flex flex-col space-y-[18.5px]">
            <li>
              <button onClick={handleLogout}>
                <Icon Component={BiLogOut} link="#" label="Log out" />
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="w-full">
        {/* PROFILE FORM */}
        {activeSection === "profile" && (
          <div className="bg-white p-6 rounded-2xl shadow-md min-h-[916px]">
            <p className="text-[20px] text-neutral-800 font-semibold">{`Hello ${user?.name} ${user?.lastName},`}</p>
            <p>Here you can find all information about your profile </p>
            <p className="mt-[48px] text-[20px]">Edit your profile</p>
            <ProfileForm isVisible={activeSection === "profile"} />
          </div>
        )}
        {/* ORDER HISTORY */}
        {activeSection === "orderHistory" && (
          <div className="bg-white p-6 rounded-2xl shadow-md min-h-[916px]">
            <p className="text-[20px] text-neutral-800 font-semibold">{`Hello ${user?.name} ${user?.lastName},`}</p>
            <p>Here you can find all your orders history</p>
            <OrderHistory isVisible={activeSection === "orderHistory"} />
          </div>
        )}
        {/* ORGANIZER */}
        {activeSection === "organizerDashboard" && (
          <div className="bg-white p-6 rounded-2xl shadow-md min-h-[916px]">
            <p className="text-[20px] text-neutral-800 font-semibold">{`Hello ${user?.name} ${user?.lastName},`}</p>
            <p>Here you can manage events</p>
            <OrganizerDashboard
              isVisible={activeSection === "organizerDashboard"}
            />
          </div>
        )}
      </div>
    </div>
  );
};
