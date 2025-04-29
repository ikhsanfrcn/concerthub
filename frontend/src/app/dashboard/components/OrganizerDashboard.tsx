/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import axios from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts'

type Event = {
  id: string
  title: string
  date: string | null // null jika tidak ada sesi
  attendees: number
}

interface OrganizerProps {
  isVisible: boolean;
}

export const OrganizerDashboard: React.FC<OrganizerProps> = ({ isVisible }) => {
  const { data: session } = useSession()
  const [filter, setFilter] = useState<'daily' | 'monthly' | 'yearly'>('monthly')
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`/events?organizerId=${session?.user.id}`, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`
          }
        })

        const fetchedEvents = response.data.map((event: any) => {
          const sessionDates = event.eventSessions?.map((s: any) => new Date(s.date))
          const earliestDate = sessionDates?.length
            ? new Date(Math.min(...sessionDates.map((d: { getTime: () => any }) => d.getTime())))
            : null

          return {
            id: event.id,
            title: event.title,
            date: earliestDate ? earliestDate.toISOString() : null,
            attendees: event.attendees
          }
        })

        setEvents(fetchedEvents)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [session])

  const filteredEvents = events.filter(event => {
    if (!event.date) return false
    const eventDate = new Date(event.date)
    const now = new Date()

    if (filter === 'daily') {
      return (
        eventDate.getDate() === now.getDate() &&
        eventDate.getMonth() === now.getMonth() &&
        eventDate.getFullYear() === now.getFullYear()
      )
    }
    if (filter === 'monthly') {
      return (
        eventDate.getMonth() === now.getMonth() &&
        eventDate.getFullYear() === now.getFullYear()
      )
    }
    if (filter === 'yearly') {
      return eventDate.getFullYear() === now.getFullYear()
    }
    return true
  })

  if (!isVisible) return null

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Event Management Dashboard</h1>

      {/* Filter */}
      <div className="flex gap-4 items-center">
        <label className="font-medium">Report Range:</label>
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={e => setFilter(e.target.value as 'daily' | 'monthly' | 'yearly')}
        >
          <option value="daily">Per Day</option>
          <option value="monthly">Per Month</option>
          <option value="yearly">Per Year</option>
        </select>
      </div>

      {/* Event List */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Event List</h2>
        <ul className="divide-y">
          {filteredEvents.length === 0 && <p className="text-gray-500">No events for this range.</p>}
          {filteredEvents.map(event => (
            <li key={event.id} className="py-2">
              <div className="font-medium">{event.title}</div>
              <div className="text-sm text-gray-500">
                {event.date ? new Date(event.date).toLocaleDateString() : 'No session date'} | Attendees: {event.attendees}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Statistics */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Attendee Statistics</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredEvents}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendees" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
