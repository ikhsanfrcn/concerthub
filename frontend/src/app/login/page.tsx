import { Sidebar } from "./components/LoginContent";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/concert.png')" }}
      />
      
      <div className=" bg-black bg-opacity-50" />

      {/* ============ Mobile View ============ */}
      <div className="relative z-10 flex flex-col justify-between h-full md:hidden">
        <div className="px-6 pt-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-pink-600">
            Welcome back
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-white">
            Discover millions of concerts, get alerts about your favorite artists,
            teams, plays and more — plus always-secure, effortless ticketing.
          </p>
          <span className="inline-block w-16 h-1 bg-pink-600 rounded" />
        </div>

        {/* White card login */}
        <div className="px-6 pb-12">
          <LoginForm className="bg-white rounded-xl p-6 shadow-lg" />
        </div>
      </div>

      {/* ============ Desktop View ============ */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen relative z-10">
        <Sidebar />
        <div className="flex items-center justify-center bg-white px-6 py-12">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
