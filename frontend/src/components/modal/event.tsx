import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function EventForm({ onClose }: { onClose: () => void }) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    price: 0,
    seats: 0,
    category: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Membuat FormData baru untuk mengirim data dalam format multipart/form-data
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("location", formData.location);
    form.append("date", formData.date);
    form.append("time", formData.time);
    form.append("price", formData.price.toString());
    form.append("seats", formData.seats.toString());
    form.append("category", formData.category);
    if (formData.image) form.append("image", formData.image);

    // Menambahkan organizerId ke FormData
    if (session?.user.id) {
      form.append("organizerId", session.user.id);
    }

    const token = session?.accessToken;

    try {
      const res = await axios.post("/events/create/cloud", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Tidak perlu JSON.stringify karena kita menggunakan FormData
        },
      });

      // Jika sukses, tutup form dan beri tahu user
      console.log("Event created:", res);
      onClose();
      alert("Event created successfully!");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4">Create a New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="description"
            placeholder="Event Description"
            rows={4}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="time"
            name="time"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="number"
            name="price"
            placeholder="Event Price"
            required
            min="0"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="number"
            name="seats"
            placeholder="Seats Available"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="category"
            placeholder="Event Category"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="file"
            name="image"
            required
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
