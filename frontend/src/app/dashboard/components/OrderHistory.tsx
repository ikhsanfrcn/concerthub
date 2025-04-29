import { useEffect, useState } from "react";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { useSession } from "next-auth/react";
import axios from "@/lib/axios";
import Skeleton from "@/components/atoms/sekeletonLoading";

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

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          `/tickets/purchased?userId=${session?.user.id}`,
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
  }, [session]);

  if (loading) return (
    <div className="space-y-4">
      <div>
        <p className="text-[20px] text-secondary-800">Active concerts</p>
        <div className="mt-[16px] space-y-4">
          <Skeleton width="w-full" height="h-20" circle={false} />
          <Skeleton width="w-full" height="h-20" circle={false} />
        </div>
      </div>
      
      <div className="mt-[48px]">
        <p className="text-[20px] text-secondary-800">Past concerts</p>
        <div className="mt-[16px] space-y-4">
          <Skeleton width="w-full" height="h-20" circle={false} />
          <Skeleton width="w-full" height="h-20" circle={false} />
        </div>
      </div>
    </div>
  );

  const currentDate = new Date();

  const activeConcerts = tickets.filter((ticket) => {
    const concertDate = new Date(ticket.session.date);
    return concertDate >= currentDate;
  });

  const pastConcerts = tickets.filter((ticket) => {
    const concertDate = new Date(ticket.session.date);
    return concertDate < currentDate;
  });

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
