import type { Metadata } from "next";
import { Bonheur_Royale, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bonheur = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonheur",
});

export const metadata: Metadata = {
  title: "Concerthub - Book Concerts Easily",
  description: "Discover and book your favorite concerts with ease. Concerthub offers a seamless platform to explore upcoming events, buy tickets, and connect with the music you love.",
  keywords: ["concert", "ticket booking", "live music", "events", "music app", "Concerthub", "buy concert tickets"],
  authors: [{ name: "Concerthub Team", url: "https://concerthubs.vercel.app" }],
  openGraph: {
    title: "Concerthub - Book Concerts Easily",
    description: "Your go-to platform for booking live music events. Find concerts, reserve your tickets, and never miss a show.",
    url: "https://concerthubs.vercel.app",
    siteName: "Concerthub",
    images: [
      {
        url: "https://res.cloudinary.com/dorrg2uue/image/upload/v1746094132/banner_db0pip.png",
        width: 1200,
        height: 630,
        alt: "Concerthub concert booking app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concerthub - Book Concerts Easily",
    description: "Easily discover and book tickets to your favorite live concerts.",
    images: ["https://res.cloudinary.com/dorrg2uue/image/upload/v1746094132/banner_db0pip.png"],
  },
  metadataBase: new URL("https://concerthubs.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bonheur.variable} container mx-auto max-w-[2560px] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
