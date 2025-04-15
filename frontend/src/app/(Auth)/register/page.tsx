import AuthLayout from "./_components/AuthLayout";
import WelcomeSectionRegister from "./_components/container";
import RegisterForm from "./_components/form";




export default function RegisterPage() {
  return (
    <AuthLayout>
      <WelcomeSectionRegister />
      <RegisterForm />
    </AuthLayout>
  )
}
