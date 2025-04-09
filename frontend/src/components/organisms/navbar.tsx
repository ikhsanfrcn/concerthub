import { BsTelephone } from "react-icons/bs"
import { Icon } from "../atoms/icon"
import { IoPersonOutline, IoTicketOutline } from "react-icons/io5"
import { TiDocumentText } from "react-icons/ti"
import { Bonheur_Royale } from "next/font/google"
import DropdownMenu from "../molecules/dropdownMenu"

const bonheur = Bonheur_Royale({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bonheur"
})

export const Navbar: React.FC = () => {
    return (
        <div className={`${bonheur.variable}`}>
            <div className="flex flex-cols justify-between py-[40px] px-[108px]">
                <p className="flex items-center font-bonheur text-primary-500 text-[48px]">ConcertHub</p>
                <div className="flex flex-cols gap-x-[24px]">
                    <Icon Component={BsTelephone} link="#" label="Contact"></Icon>
                    <Icon Component={IoTicketOutline} link='#' label="Tickets" />
                    <Icon Component={TiDocumentText} link="#" label="Blogs" />
                    <DropdownMenu />
                    <div>
                        <button className="flex px-[19.5px] py-[16px] items-center bg-secondary-500 rounded-2xl text-white space-x-[8px]">
                            {/* <Icon Component={IoPersonOutline} className=" text-white" link="/login" /> <span className="text-white">Login</span> */}
                            <IoPersonOutline className="text-[24px]"/> <span className="text-[20px]">Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}