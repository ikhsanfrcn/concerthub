
import { Footer } from "@/components/footer/Footer"
import { Navbar } from "@/components/navbar/Navbar"
import { ReactNode } from "react"

interface MainTemplateProps {
    children: ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}