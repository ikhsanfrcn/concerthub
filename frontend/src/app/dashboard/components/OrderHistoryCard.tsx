import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";

export const OrderHistoryCard: React.FC = () => {
  return (
    <div className="flex items-center py-[9px] px-[8px] justify-between border border-neutral-400 rounded-2xl">
      <div className="flex items-center space-x-[8px]">
        <Image
          src={"/justinbieber.png"}
          width={0}
          height={0}
          sizes="100"
          alt=""
          className="w-[30px] h-[30px] rounded-full"
        />
        <p>Justin Bieber</p>
      </div>
      <p className="hidden min-[768px]:block">Order nr: #no.order</p>
      <div className="flex items-center space-x-[3.8px]">
        <FaCalendar />
        <p className="text-neutral-600">25 June 2024</p>
      </div>
      <div className="hidden min-[768px]:flex items-center space-x-[3.8px]">
        <FaLocationPinLock />
        <p className="text-neutral-600">New York</p>
      </div>
      <div className="hidden min-[768px]:flex items-center space-x-[3.8px]">
        <BiMoney />
        <p className="text-neutral-600">$ 200</p>
      </div>
      <Icon Component={BsThreeDotsVertical} />
    </div>
  );
};
