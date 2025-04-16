import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { RiOrderPlayLine, RiProfileLine } from "react-icons/ri";
import { TbGiftCard } from "react-icons/tb";

export const SidebarDashboard: React.FC = () => {
  return (
    <>
      <aside className="mt-[24px] mb-[108px] rounded-md border border-black h-[916px]">
        <div className="">
          <div className="p-[32px]">
            <Image
              src={"/adele.png"}
              width={0}
              height={0}
              sizes="100"
              alt=""
              className="w-[48px] h-[48px] rounded-full"
            />
            <p className="mt-[16px]">Name</p>
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="mt-[16px] p-[32px]">
            <ul className="space-y-[18.5px]">
              <li>
                <Icon Component={RiProfileLine} link="#" label="My Profile" />
              </li>
              <li>
                <Icon
                  Component={RiOrderPlayLine}
                  link="#"
                  label="Order History"
                />
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
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
