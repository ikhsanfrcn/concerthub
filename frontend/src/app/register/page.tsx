import { RegisterContent } from "./components/RegisterContent";
import { RegisterForm } from "./components/RegisterForm";


export default function Register () {
    return (
        <main className="h-screen flex">
        <RegisterContent className="w-[calc(50%)]" />
        <RegisterForm className="w-[calc(50%)]"/>
        </main>
    )
}