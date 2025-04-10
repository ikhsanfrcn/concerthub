'use client'

import { IoLogoGooglePlaystore } from "react-icons/io5"
import { RiAppleLine } from "react-icons/ri"
import Link from "next/link"
import { SocialIcons } from "./SocialIcons"

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col justify-center bg-neutral-800 max-[1288px]:p-[16px] px-[108px] pt-[54px] pb-[25px]">
            <div className="flex flex-col md:flex-row flex-wrap justify-between ">
                {/* Left Section */}
                <div>
                    <div className="md:max-w-[304px] text-white">
                        <p className="text-[16px] md:text-[18px] font-medium">{`Let's keep in touch`}</p>
                        <p className="text-[14px] md:text-[16px] mt-[4px]">
                            {`Stay updated with Concert Hub's latest news and exclusive offers!`}
                        </p>
                    </div>

                    <div className="mt-[24px] flex space-x-[10px]">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="flex-auto rounded-md bg-white/5 md:px-[14px] py-[8px] text-[16px] text-white placeholder:pl-3 placeholder:text-gray-500 outline outline-1 outline-white/10 focus:outline-2 focus:outline-offset-[-2px] focus:outline-indigo-500"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-primary-500 px-[14px] py-[10px] text-[14px] font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Subscribe
                        </button>
                    </div>

                    <p className="text-white mt-[8px] text-[10px] md:text-[12px] leading-[18px]">
                        By subscribing, you agree to our{' '}
                        <Link href="#" className="underline">
                            terms & conditions
                        </Link>{' '}
                        &{' '}
                        <Link href="#" className="underline">
                            Privacy Policy
                        </Link>
                    </p>

                    <ul className="flex justify-center space-x-[15px] md:space-x-[24px] mt-[18px]">
                        <li className="flex items-center bg-white rounded-2xl px-[20px] md:px-[41.5px] py-[8px]">
                            <IoLogoGooglePlaystore className="text-[24px] text-primary-500" />
                            <div className="ml-[8px] text-black">
                                <p className="text-[8px]">Download on the</p>
                                <p className="text-[12px] font-semibold">Google Play</p>
                            </div>
                        </li>
                        <li className="flex items-center bg-white rounded-2xl px-[20px] md:px-[41.5px] py-[8px]">
                            <RiAppleLine className="text-[24px] text-primary-500" />
                            <div className="ml-[8px]">
                                <p className="text-[8px]">Download on the</p>
                                <p className="text-[12px] font-semibold">App Store</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex flex-col min-[600px]:flex-row max-[992px]:mt-[24px] space-x-[24px] space-y-[17px]">
                    {/* Column 1 */}
                    <div className="flex flex-col text-white min-w-[160px]">
                        <p className="text-[18px] font-medium">Concert Hub</p>
                        <ul className="mt-[16px] space-y-[8px] text-[14px]">
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Press</Link></li>
                            <li><Link href="#">Event Organizer</Link></li>
                            <li><Link href="#">Getting there</Link></li>
                            <li><Link href="#">Privacy policy</Link></li>
                            <li><Link href="#">Terms & conditions</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col text-white min-w-[160px]">
                        <p className="text-[18px] font-medium">Looking For Help</p>
                        <ul className="mt-[16px] space-y-[8px] text-[14px]">
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Press</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Customer Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col text-white min-w-[160px]">
                        <p className="text-[18px] font-medium">Looking For More</p>
                        <ul className="mt-[16px] space-y-[8px] text-[14px]">
                            <li><Link href="#">Cancelled Concerts</Link></li>
                            <li><Link href="#">Cancellation Insurance</Link></li>
                            <li><Link href="#">Rescheduled Events</Link></li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <SocialIcons />
                    </div>
                </div>
            </div>
            <p className="mt-[40px] md:mt-[45px] text-white text-center">© ConcertHub All Rights Reserved</p>
        </footer>
    )
}
