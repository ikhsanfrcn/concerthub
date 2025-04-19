"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrDashboard } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

interface DropdownItemProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
  label: string;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  icon: Icon,
  href,
  label,
  onClick,
}) => {
  return href ? (
    <Link
      href={href}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    >
      <div className="flex items-center">
        {Icon && <Icon className="mr-2" />}
        {label}
      </div>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
    >
      <div className="flex items-center">
        {Icon && <Icon className="mr-2" />}
        {label}
      </div>
    </button>
  );
};

const Dropdown: React.FC = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const user = session?.user;

  if (status === "loading") return null;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      {session ? (
        <div className="relative inline-block flex items-center">
          <button
            className="inline-flex justify-center w-full rounded-2xl text-[16px] px-[16px] py-[6.5px] border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={toggleDropdown}
          >
            <Image
              src={"https://randomuser.me/api/portraits/men/1.jpg"}
              alt=""
              width={50}
              height={50}
              className="w-12 h-12 rounded-full"
            />
            <p className="flex items-center ml-[10px]">{user?.name}</p>
          </button>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <DropdownItem
                href="/dashboard"
                icon={GrDashboard}
                label="Dashboard"
              />
              <DropdownItem label="Logout" onClick={handleLogout} />
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="flex px-[15px] py-[16px] items-center bg-secondary-500 rounded-2xl text-white space-x-[8px]"
        >
          <IoPersonOutline className="text-[24px]" />
          <span className="text-[20px]">Login</span>
        </Link>
      )}
    </div>
  );
};

export default Dropdown;
