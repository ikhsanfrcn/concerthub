'use client'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { useSession } from 'next-auth/react'

interface EventSessionCreateProps {
  onClose: () => void
}

export default function EventSessionCreate({ onClose }: EventSessionCreateProps) {
  const { data: session } = useSession()
  const [formData, setFormData] = useState({
    eventId: '',
    date: '',
    time: '',
    location: '',
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`/events/organizer?organizerId=${session?.user.id}`)
        setEvents(res.data || [])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching events:', error)
        setLoading(false)
      }
    }

    fetchEvents()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.eventId || !formData.date || !formData.time || !formData.location) {
      alert('Please fill in all required fields')
      return
    }

    const newSession = {
      eventId: formData.eventId,
      date: formData.date,
      time: formData.time,
      location: formData.location,
    }

    try {
      const res = await axios.post('/event-session', newSession, {
        headers: {
          'Authorization': `Bearer ${session?.accessToken}`,
        },
      })

      if (res.status === 201) {
        alert('Event session created successfully!')
        onClose()
      } else {
        alert('Failed to create event session')
      }
      
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create event session')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4">Create Event Session</h2>

        {loading && <p>Loading events...</p>}

        {!loading && (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium">Event</label>
              <select
                name="eventId"
                value={formData.eventId}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="">Select an Event</option>
                {events.length > 0 ? (
                  events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.title}
                    </option>
                  ))
                ) : (
                  <option disabled>No events available</option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
              disabled={loading}
            >
              Create Session
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
