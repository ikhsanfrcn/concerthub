import { LoginContent } from "./components/LoginContent";
import { LoginForm } from "./components/LoginForm";

export default function Login () {
    return (
        <main className="h-screen flex">
        <LoginContent className="w-[calc(50%)]" />
        <LoginForm className="w-[calc(50%)]"/>
        </main>
    )
}