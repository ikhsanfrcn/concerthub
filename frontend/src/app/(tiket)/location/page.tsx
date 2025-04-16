
import Mapconcert from "@/components/tiket/locanddate/home/map";
import ReviewsSection from "@/components/tiket/locanddate/home/riviewssection";
import Suggestion from "@/components/tiket/locanddate/home/suggesstion";
import Ticketcomp from "@/components/tiket/locanddate/tiket";
import Stepper from "@/components/tiket/stepper";
import { MainTemplate } from "@/template/MainTemplate";

export default function TicketPage(){
    return (
        
<MainTemplate>
<Stepper/>
<Ticketcomp />
<Mapconcert/>
<ReviewsSection/>
<Suggestion/>
</MainTemplate>

        
    )
}