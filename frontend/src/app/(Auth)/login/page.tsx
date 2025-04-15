import AuthLayout from "./_components/AuthLayout";
import WelcomeSection from "./_components/container";
import LoginForm from "./_components/form";


export default function LoginPage() {
  return (
    <AuthLayout>
      <WelcomeSection />
      <LoginForm />
    </AuthLayout>
  )
}
