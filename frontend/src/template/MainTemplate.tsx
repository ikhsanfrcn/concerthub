import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface MainTemplateProps {
  children: ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
};
