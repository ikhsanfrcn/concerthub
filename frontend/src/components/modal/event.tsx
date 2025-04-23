'use client';

import { useState } from 'react';

export default function EventForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    price: 0,
    seats: 0,
    category: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventData = {
      ...formData,
      // Add more details like organizerId, etc. if needed
      organizerId: "organizer-id-placeholder", // Assume you have an authenticated user and get their ID
    };

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (res.ok) {
      alert('Event created successfully!');
      onClose(); // Close modal or form
    } else {
      alert('Failed to create event');
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
            onChange={handleChange}
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
