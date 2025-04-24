import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "@/lib/axios";

interface OrganizerProps {
  isVisible: boolean;
}

export const CustomerDashboard: React.FC<OrganizerProps> = ({ isVisible }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    const accessToken = session?.accessToken;
    console.log("Access Token:", accessToken);

    if (!accessToken) {
      console.error("No access token.");
      return;
    }
    try {
      const response = await axios.post(
        "/auth/register/organizer",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Registrasion Success:", response.data);
      setClicked(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div>
      <button onClick={handleRegister} disabled={loading || clicked} className="hover:text-blue-600 cursor-pointer">
        {loading ? "loading..." : clicked ? "Please check your email" : "REGISTER AS AN ORGANIZER"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
