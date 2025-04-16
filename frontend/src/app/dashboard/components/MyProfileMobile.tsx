"use client";
import { useState } from "react";
import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { RiOrderPlayLine, RiProfileLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { ProfileForm } from "./MyProfileForm";
import { TbGiftCard } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { signOut } from "next-auth/react";

export const MyProfileMobile: React.FC = () => {
  const [showProfileForm, setShowProfileForm] = useState(false);

  const toggleProfileForm = () => {
    setShowProfileForm((prev) => !prev);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <section className="pt-12">
      {/* Avatar & Nama */}
      <div className="flex flex-col items-center">
        <Image
          src="/adele.png"
          width={70}
          height={70}
          alt="User"
          className="rounded-full"
        />
        <p className="mt-2 text-sm text-neutral-700">Nama</p>
      </div>

      {/* Menu */}
      <div className="mt-10 mx-4 bg-white rounded-2xl">
        <ul className="space-y-5 p-4">
          <li className="border-b border-neutral-300">
            <button
              onClick={toggleProfileForm}
              className="flex justify-between items-center w-full py-1"
            >
              <Icon Component={RiProfileLine} link="#" label="My Profile" />
              <Icon
                Component={IoIosArrowForward}
                className={`text-lg text-neutral-300 transition-transform duration-300 ${
                  showProfileForm ? "rotate-90" : ""
                }`}
              />
            </button>
            <ProfileForm isVisible={showProfileForm} />
          </li>

          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="border-b border-neutral-300 flex justify-between items-center py-1"
            >
              <Icon Component={item.icon} link="#" label={item.label} />
              <Icon
                Component={IoIosArrowForward}
                className="text-lg text-neutral-300"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-10 bg-white rounded-2xl mx-4">
        <button
          onClick={handleLogout}
          className="p-4 text-red-500 w-full text-left"
        >
          Log out
        </button>
      </div>
    </section>
  );
};

// Data menu selain "My Profile"
const menuItems = [
  { label: "Order History", icon: RiOrderPlayLine },
  { label: "Gift Card", icon: TbGiftCard },
  { label: "Settings", icon: CiSettings },
  { label: "Help", icon: FiHelpCircle },
];
