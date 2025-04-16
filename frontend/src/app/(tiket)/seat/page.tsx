import TicketCategoryPage from "@/components/tiket/category.tsx/category";
import Stepper from "@/components/tiket/stepper";
import TicketCard from "@/components/tiket/ticketcard";
import { MainTemplate } from "@/template/MainTemplate";

export default function orderPage() {
  return (
    <MainTemplate>
      <TicketCard />
      <Stepper />
      <TicketCategoryPage />
    </MainTemplate>
  );
}
