import { Suspense } from "react";
import TicketClient from "./_components/organisms/ticketClient";
import { MainTemplate } from "@/template/MainTemplate";

export default function Page() {
  return (
    <MainTemplate>
      <Suspense fallback={<div>Loading...</div>}>
        <TicketClient />
      </Suspense>
    </MainTemplate>
  );
}
