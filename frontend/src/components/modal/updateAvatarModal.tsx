import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Toastify } from "../atoms/toastify";

export default function UpdateaAvatarModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    avatar: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, avatar: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    if (formData.avatar) form.append("avatar", formData.avatar);

    if (session?.user.id) {
      form.append("userId", session.user.id);
    }

    const token = session?.accessToken;

    try {
      const res = await axios.patch("/users/avatar-update", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(res.data.message || "Profile updated successfully!");
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error updating profile:", error);
      const msg =
        error.response?.data?.message ||
        "Failed to update profile. Please try again.";
      toast.error(msg);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Toastify />
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4">Update Profile Photo</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="file"
            name="avatar"
            required
            accept="avatar/*"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
