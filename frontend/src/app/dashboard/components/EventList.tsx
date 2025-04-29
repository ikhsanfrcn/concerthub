import { useState, useEffect } from "react";
import { EventCard } from "./EventCard"; // Pastikan pathnya sesuai dengan lokasi file
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";

interface Props {
  isVisible: boolean;
}

export const EventList: React.FC<Props> = ({ isVisible }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]); // Awalnya kosong, karena kita akan ambil dari API
  const { data: session } = useSession();

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        // Ambil data dari API
        const response = await axios.get("/organizer/myevents", {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });

        const { data } = response;

        // Cek apakah respons memiliki properti 'vouchers' dan itu adalah array
        if (data.vouchers && Array.isArray(data.vouchers)) {
          setEvents(data.vouchers); // Set data 'vouchers' ke state events
        } else {
          console.error("Data tidak sesuai format: ", data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (session?.accessToken) {
      fetchEventList();
    }
  }, [session?.accessToken]); // Mengambil data setiap kali session berubah

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId)); // Menghapus event dari state
  };

  if (!isVisible) return null;

  return (
    <div className="dashboard-container space-y-6">
      <h2 className="text-2xl font-semibold">Your Events</h2>
      {events.length === 0 ? (
        <p>{`You don't have any events yet.`}</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDelete={handleDeleteEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
};
