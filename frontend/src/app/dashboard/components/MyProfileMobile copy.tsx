import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { RiOrderPlayLine, RiProfileLine } from "react-icons/ri";
import { TbGiftCard } from "react-icons/tb";

export const MyProfileMobile: React.FC = () => {
  return (
    <section className="pt-[48px] ">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/adele.png"}
          width={0}
          height={0}
          sizes="100"
          alt=""
          className="w-[70px] h-[70px] rounded-full"
        />
        <p className="mt-[8px] text-[14px] text-neutral-700">Nama</p>
      </div>
      <div className="mt-[40px] mx-[16px] bg-white rounded-2xl">
        <ul className="space-y-[18.5px] p-[16px]">
          <li className="border-b border-neutral-300">
            <div className="flex justify-between items-center py-[5px]">
              <Icon Component={RiProfileLine} link="#" label="My Profile" />
              <Icon Component={IoIosArrowForward} className="text-[18px] text-neutral-300" />
            </div>
          </li>
          <li className="border-b border-neutral-300">
            <div className="flex justify-between items-center py-[5px]">
              <Icon
                Component={RiOrderPlayLine}
                link="#"
                label="Order History"
              />
              <Icon Component={IoIosArrowForward} className="text-[18px] text-neutral-300" />
            </div>
          </li>
          <li className="border-b border-neutral-300">
            <div className="flex justify-between items-center py-[5px]">
              <Icon Component={TbGiftCard} link="#" label="Gift Card" />
              <Icon Component={IoIosArrowForward} className="text-[18px] text-neutral-300" />
            </div>
          </li>
          <li className="border-b border-neutral-300">
            <div className="flex justify-between items-center py-[5px]">
              <Icon Component={CiSettings} link="#" label="Settings" />
              <Icon Component={IoIosArrowForward} className="text-[18px] text-neutral-300" />
            </div>
          </li>
          <li className="border-b border-neutral-300">
            <div className="flex justify-between items-center py-[5px]">
              <Icon Component={FiHelpCircle} link="#" label="Help" />
              <Icon Component={IoIosArrowForward} className="text-[18px] text-neutral-300" />
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-[40px] bg-white rounded-2xl mx-[16px]">
        <button className="p-[16px] text-red-500">Log out</button>
      </div>
    </section>
  );
};
