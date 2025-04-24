import { useState } from "react";
import { Icon } from "@/components/atoms/icon";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { BiMoney } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  price: number;
  attendeesCount: number;
  organizerName: string;
  image: string;
}

interface DashboardEventCardProps {
  event: Event;
  onDelete: (eventId: string) => void; // Callback untuk menghapus acara
}

export const DashboardEventCard: React.FC<DashboardEventCardProps> = ({ event, onDelete }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleDelete = () => {
    // Menangani penghapusan acara
    onDelete(event.id);
    setIsDropdownOpen(false); // Menutup dropdown setelah menghapus
  };

  return (
    <div className="flex items-center py-[9px] px-[8px] justify-between border border-neutral-400 rounded-2xl">
      <div className="flex items-center space-x-[8px]">
        <Image
          src={event.image || "/adele.png"}
          width={30}
          height={30}
          alt={event.title}
          className="w-[30px] h-[30px] rounded-full"
        />
        <p>{event.organizerName}</p>
      </div>
      <p className="hidden min-[768px]:block">{event.title}</p>
      <div className="flex items-center space-x-[3.8px]">
        <FaCalendar />
        <p className="text-neutral-600">{event.date} at {event.time}</p>
      </div>
      <div className="hidden min-[768px]:flex items-center space-x-[3.8px]">
        <FaLocationPinLock />
        <p className="text-neutral-600">{event.location}</p>
      </div>
      <div className="hidden min-[768px]:flex items-center space-x-[3.8px]">
        <BiMoney />
        <p className="text-neutral-600">Rp. {event.price}</p>
      </div>
      <div className="flex items-center space-x-[8px]">
        <p className="text-neutral-600">Attendees: {event.attendeesCount}</p>
      </div>
      <div className="relative">
        <button onClick={toggleDropdown}>
          <Icon Component={BsThreeDotsVertical} />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
            <button
              onClick={handleDelete}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 rounded-tl-lg rounded-tr-lg"
            >
              Delete Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
