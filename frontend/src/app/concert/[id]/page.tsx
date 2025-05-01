import axios from "@/lib/axios";
import EventDetail from "./_components/eventDetails";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await axios.get(`/events?id=${id}`);
  const event = res.data[0];

  return {
    title: `${event.title} - Concerthubs`,
    description: `${event.title} will take place on ${event.date} at ${event.location}. Secure your tickets now!`,
    openGraph: {
      title: `${event.title} - Concerthubs`,
      description: `${event.title} on ${event.date}, at ${event.location}.`,
      images: [
        {
          url:
            event.image ||
            "https://res.cloudinary.com/dorrg2uue/image/upload/v1746094132/banner_db0pip.png",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EventDetail id={id} />;
}

