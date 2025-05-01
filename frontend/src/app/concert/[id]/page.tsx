import { Metadata } from "next";
import axios from "@/lib/axios";
import EventDetail from "../_components/eventDetails";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const res = await axios.get(`/events?id=${params.id}`);
    const event = res.data[0];
    console.log(event);
    

    return {
      title: `${event.title} - Concerthub`,
      description: `${event.title} will take place on ${event.date} at ${event.location}. Secure your tickets now!`,
      openGraph: {
        title: `${event.title} - Concerthub`,
        description: `${event.title} on ${event.date}, at ${event.location}.`,
        images: [
          {
            url: event.image || "https://res.cloudinary.com/dorrg2uue/image/upload/v1746094132/banner_db0pip.png",
            width: 1200,
            height: 630,
            alt: event.title,
          },
        ],
      },
    };
  } catch (err) {
    console.log(err);
    return {
      title: "Concert Not Found - Concerthub",
      description: "The concert you're looking for does not exist or has been removed.",
    };
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return <EventDetail id={params.id} />;
}
