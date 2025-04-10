"use client"

import { useState } from "react"
import { BsTelephone } from "react-icons/bs"
import { IoPersonOutline, IoTicketOutline, IoMenu, IoClose, IoPersonCircleOutline } from "react-icons/io5"
import { TiDocumentText } from "react-icons/ti"
import { Bonheur_Royale } from "next/font/google"
import DropdownMenu from "../molecules/DropdownMenu"
import { Icon } from "../atoms/Icon"

const bonheur = Bonheur_Royale({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bonheur"
})

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className={`${bonheur.variable}`}>
            <div className="flex justify-between items-center max-[1288px]:px-[16px] py-[10.5px] px-[108px]">
                <p className="font-bonheur text-primary-500 text-3xl md:text-[48px]">ConcertHub</p>
                <div className="hidden min-[600px]:flex flex-1 justify-center mx-8">
                    <input
                        type="text"
                        placeholder="Search concerts..."
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    />
                </div>
                <div className="max-[1024px]:hidden flex items-center gap-x-6">
                    <Icon Component={BsTelephone} link="#" label="Contact" />
                    <Icon Component={IoTicketOutline} link="#" label="Tickets" />
                    <Icon Component={TiDocumentText} link="#" label="Blogs" />
                    <DropdownMenu />
                    <button className="flex px-5 py-3 items-center bg-secondary-500 rounded-2xl text-white space-x-2">
                        <IoPersonOutline className="text-[24px]" />
                        <span className="text-[20px]">Login</span>
                    </button>
                </div>

                {/* burger icon */}
                <div className="min-[1024px]:hidden flex items-center space-x-[16px]">
                    <button>
                        <IoPersonCircleOutline size={24} />
                    </button>
                    <button onClick={toggleMenu}>
                        {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* mobile searchbar */}
            <div className="min-[600px]:hidden p-[16px] pb-2">
                <input
                    type="text"
                    placeholder="Search concerts..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
            </div>

            {/* mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-6 pb-4 space-y-4">
                    <div className="flex flex-col gap-y-4">
                        <Icon Component={BsTelephone} link="#" label="Contact" />
                        <Icon Component={IoTicketOutline} link="#" label="Tickets" />
                        <Icon Component={TiDocumentText} link="#" label="Blogs" />
                        <DropdownMenu />
                        <button className="flex w-full justify-center px-4 py-3 bg-secondary-500 rounded-2xl text-white items-center space-x-2">
                            <IoPersonOutline className="text-[24px]" />
                            <span className="text-[20px]">Login</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
