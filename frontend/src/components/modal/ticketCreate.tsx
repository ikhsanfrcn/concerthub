/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { useSession } from 'next-auth/react'

interface TicketCreateProps {
  onClose: () => void
}

export default function TicketCreate({ onClose }: TicketCreateProps) {
  const { data: session } = useSession()
  const [formData, setFormData] = useState({
    eventId: '',
    sessionId: '',
    price: '',
    seatAvailable: '',
    category: 'REGULAR'
  })
  const [events, setEvents] = useState<any[]>([])
  const [eventSessions, setEventSessions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`/events?organizerId=${session?.user.id}`, {
          headers: {
            'Authorization': `Bearer ${session?.accessToken}`,
          },
        })
        setEvents(res.data || [])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching events:', error)
        setLoading(false)
      }
    }

    fetchEvents()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.accessToken])

  useEffect(() => {
    const selectedEvent = events.find(event => event.id === formData.eventId)
    if (selectedEvent) {
      setEventSessions(selectedEvent.eventSessions)
    }
  }, [formData.eventId, events])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.eventId || !formData.sessionId || !formData.price || !formData.seatAvailable) {
      alert('Please fill in all required fields')
      return
    }

    const newTicket = {
      sessionId: formData.sessionId,
      eventId: formData.eventId,
      price: formData.price,
      seatAvailable: formData.seatAvailable,
      category: formData.category
    }

    try {
      setLoading(true)
      const res = await axios.post('/tickets', newTicket, {
        headers: {
          'Authorization': `Bearer ${session?.accessToken}`,
        },
      })

      if (res.status === 201) {
        alert('Ticket created successfully!')
        onClose()
      } else {
        alert('Failed to create ticket')
      }
      
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create ticket')
    } finally {
      setLoading(false)
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
        <h2 className="text-2xl font-semibold mb-4">Create Ticket</h2>

        {loading && <p>Loading events...</p>}

        {!loading && (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Event Select */}
            <div>
              <label className="block text-sm font-medium">Event</label>
              <select
                name="eventId"
                value={formData.eventId}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="">Select Event</option>
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

            {/* Event Session Select */}
            <div>
              <label className="block text-sm font-medium">Event Session</label>
              <select
                name="sessionId"
                value={formData.sessionId}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="">Select Event Session</option>
                {eventSessions.length > 0 ? (
                  eventSessions.map((session) => (
                    <option key={session.id} value={session.id}>
                      {new Date(session.date).toLocaleDateString()} {session.time} - {session.location}
                    </option>
                  ))
                ) : (
                  <option disabled>No event sessions available</option>
                )}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Seat Available */}
            <div>
              <label className="block text-sm font-medium">Seat Available</label>
              <input
                type="number"
                name="seatAvailable"
                value={formData.seatAvailable}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Ticket Category */}
            <div>
              <label className="block text-sm font-medium">Ticket Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="REGULAR">Regular</option>
                <option value="PREMIUM">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Create Ticket
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
