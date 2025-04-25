<<<<<<< HEAD
/* eslint-disable react-hooks/exhaustive-deps */
=======
>>>>>>> c731dd36f7d47cb617a42af95e7dc1b99e9ed13a
"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

<<<<<<< HEAD
export default function VerifyOrganizerPage({token}: { token: string}) {
  const [msg, setMsg] = useState<string>("");
=======
export default function VerifyOrganizerPage({ token }: { token: string }) {
  const [msg, setMsg] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

>>>>>>> c731dd36f7d47cb617a42af95e7dc1b99e9ed13a
  const onVerify = async () => {
    try {
      setMsg("Waiting ...");
      const { data } = await axios.patch("/auth/verify/organizer", {}, {
        headers: {
<<<<<<< HEAD
            Authorization: `Bearer ${token}`
        }
      });
      console.log(data);
      setMsg(data.message)
    } catch (error) {
      console.log(error);
      setMsg("Verification Failed")
=======
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setMsg(data.message);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setMsg("Verification Failed");
      setIsSuccess(false);
>>>>>>> c731dd36f7d47cb617a42af95e7dc1b99e9ed13a
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    onVerify()
  }, [])
  return (
    <div>
        <h1 className="text-6xl">{msg}</h1>
    </div>
  )
=======
    onVerify();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`p-6 rounded-lg shadow-xl max-w-md w-full text-center transition-all duration-500 ${
          isSuccess === null
            ? "bg-white"
            : isSuccess
            ? "bg-green-100 border-l-4 border-green-500 text-green-700"
            : "bg-red-100 border-l-4 border-red-500 text-red-700"
        }`}
      >
        <p className="text-3xl font-semibold">{msg}</p>
      </div>
    </div>
  );
>>>>>>> c731dd36f7d47cb617a42af95e7dc1b99e9ed13a
}
