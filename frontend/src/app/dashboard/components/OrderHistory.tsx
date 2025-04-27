import { useEffect, useState } from "react";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { useSession } from "next-auth/react";
import axios from "@/lib/axios";

interface OrderHistoryProps {
  isVisible: boolean;
}

interface Ticket {
  id: string;
  transactionId: string;
  ticket: {
    eventId: string;
    category: string;
    price: number;
  };
  session: {
    date: string;
    time: string;
    location: string;
    event: {
      title: string;
      description: string;
    };
  };
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({ isVisible }) => {
  const { data: session } = useSession();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  // Jangan masukkan isVisible ke dalam useEffect
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          `/tickets/my-purchased?userId=${session?.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
            },
          }
        );
        const data = response.data;

        if (data.tickets) {
          setTickets(data.tickets);
        }
      } catch (error) {
        console.error("Error fetching ticket data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <div>Loading...</div>;

  const currentDate = new Date();

  const activeConcerts = tickets.filter((ticket) => {
    const concertDate = new Date(ticket.session.date);
    return concertDate >= currentDate; // Concert yang belum lewat
  });

  const pastConcerts = tickets.filter((ticket) => {
    const concertDate = new Date(ticket.session.date);
    return concertDate < currentDate; // Concert yang sudah lewat
  });

  // Hanya tampilkan komponen jika isVisible bernilai true
  if (!isVisible) return null;

  return (
    <div className="mt-[48px]">
      <div>
        <p className="text-[20px] text-secondary-800">Active concerts</p>
        <div className="mt-[16px]">
          {activeConcerts.map((item) => (
            <OrderHistoryCard
              key={item.id}
              ticketId={item.id}
              eventTitle={item.session.event.title}
              concertDate={item.session.date}
              location={item.session.location}
              price={item.ticket.price}
            />
          ))}
        </div>
      </div>

      <div className="mt-[48px]">
        <p className="text-[20px] text-secondary-800">Past concerts</p>
        <div className="mt-[16px]">
          {pastConcerts.map((item) => (
            <OrderHistoryCard
              key={item.id}
              ticketId={item.id}
              eventTitle={item.session.event.title}
              concertDate={item.session.date}
              location={item.session.location}
              price={item.ticket.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
