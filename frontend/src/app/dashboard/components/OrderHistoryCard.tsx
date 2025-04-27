import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";

interface OrderHistoryCardProps {
  ticketId: string
  eventTitle: string;
  concertDate: string;
  location: string;
  price: number;
}

export const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  ticketId,
  eventTitle,
  concertDate,
  location,
  price,
}) => {
  const formattedDate = new Date(concertDate).toLocaleDateString();

  return (
    <div className="flex items-center py-[9px] px-[8px] justify-between border border-neutral-400 rounded-2xl">
      <div className="flex items-center space-x-[8px]">
        <Image
          src={"/justinbieber.png"}
          width={0}
          height={0}
          sizes="100"
          alt="Concert Image"
          className="w-[30px] h-[30px] rounded-full"
        />
        <p>{eventTitle}</p>
      </div>
      <p className="hidden min-[768px]:block">Ticket: #{ticketId}</p>
      <div className="flex items-center space-x-[3.8px]">
        <FaCalendar />
        <p className="text-neutral-600">{formattedDate}</p>
      </div>
      <div className="hidden min-[768px]:flex items-center space-x-[3.8px]">
        <FaLocationPinLock />
        <p className="text-neutral-600">{location}</p>
      </div>
      <div className="hidden min-[768px]:flex items-center space-x-[3.8px]">
        <BiMoney />
        <p className="text-neutral-600">Rp. {price}</p>
      </div>
      <Icon Component={BsThreeDotsVertical} />
    </div>
  );
};
