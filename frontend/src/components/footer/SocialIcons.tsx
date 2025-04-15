import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa"

import { FaXTwitter } from "react-icons/fa6"
import { Icon } from "../atoms/icon"

export const SocialIcons: React.FC = () => {
    return (
        <div className="flex flex-col max-[600px]:flex-row text-white text-[24px] gap-[8px]">
            <Icon Component={FaInstagram} />
            <Icon Component={FaYoutube} />
            <Icon Component={FaXTwitter} />
            <Icon Component={FaSpotify} />
            <Icon Component={FaFacebook} />
        </div>
    )
}