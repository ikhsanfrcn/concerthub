"use client";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import {
  IoPersonOutline,
  IoTicketOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Icon } from "../atoms/icon";
import { DropdownMenu } from "./DropdownMenu";
import Link from "next/link";
import LoginRegister from "./LoginRegister";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { SearchBox } from "../atoms/SearchBox";
import { GrDashboard } from "react-icons/gr";

export const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tickets?search=${searchTerm}`);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center max-[1288px]:px-[16px] py-[10.5px] px-[108px]">
        <Link
          href={"/"}
          className="font-bonheur text-primary-500 text-3xl md:text-[48px]"
        >
          Concerthubs
        </Link>
        {pathname !== "/tickets" && (
          <div className="hidden min-[600px]:flex flex-1 justify-center mx-8">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <SearchBox value={searchTerm} onChange={handleSearchChange} />
            </form>
          </div>
        )}
        <div className="max-[1024px]:hidden flex items-center gap-x-6">
          <Icon Component={BsTelephone} link="contact" label="Contact" />
          <Icon Component={IoTicketOutline} link="tickets" label="Tickets" />
          <Icon Component={TiDocumentText} link="#" label="Blogs" />
          <DropdownMenu />
          <LoginRegister />
        </div>

        {/* burger icon */}
        <div className="min-[1024px]:hidden flex items-center space-x-[16px]">
          <Image
            src={
              session?.user.avatar ||
              "https://res.cloudinary.com/dbq88i6pk/image/upload/v1744257650/profile-default-icon-512x511-v4sw4m29_cyf3m5.png"
            }
            alt=""
            width={50}
            height={50}
            className="w-12 h-12 rounded-full"
          />
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>

      {/* mobile searchbar */}
      {pathname !== "/tickets" && (
        <div className="min-[600px]:hidden p-[16px] pb-2">
          <form onSubmit={handleSearchSubmit}>
            <SearchBox value={searchTerm} onChange={handleSearchChange} />
          </form>
        </div>
      )}

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="min-[1024px]:hidden px-6 pb-4 space-y-4">
          <div className="flex flex-col gap-y-4">
            <Icon Component={BsTelephone} link="/contact" label="Contact" />
            <Icon
              Component={IoTicketOutline}
              link="tickets"
              label="Tickets"
            />
            <Icon Component={TiDocumentText} link="#" label="Blogs" />
            <DropdownMenu />
            {session ? (
              <div className="flex space-x-[10px]">
                <Link
                  href={"/dashboard"}
                  className="flex w-full justify-center px-4 py-3 bg-neutral-500 rounded-2xl text-white items-center space-x-2"
                >
                  <GrDashboard className="text-[24px]" />
                  <span className="text-[20px]">Dashboard</span>
                </Link>
                <button onClick={handleLogout} className="bg-red-500 w-full rounded-2xl text-white">
                  Log out
                </button>
              </div>
            ) : (
              <Link
                href={"/login"}
                className="flex w-full justify-center px-4 py-3 bg-secondary-500 rounded-2xl text-white items-center space-x-2"
              >
                <IoPersonOutline className="text-[24px]" />
                <span className="text-[20px]">Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
