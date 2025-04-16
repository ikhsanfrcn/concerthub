import OrderSummary from "@/components/tiket/orderandoverview/ordersummary";
import TicketCard from "@/components/tiket/ticketcard";
import Stepper from "@/components/tiket/stepper";
import { MainTemplate } from "@/template/MainTemplate";

export default function orderPage() {
  return (
    <MainTemplate>
      <TicketCard />
      <Stepper />
      <OrderSummary />
    </MainTemplate>
  );
}
