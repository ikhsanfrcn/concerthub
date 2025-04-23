'use client'
import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts'

type Event = {
  id: string
  title: string
  date: string
  attendees: number
}

const dummyEvents: Event[] = [
  { id: '1', title: 'Taylor Swift', date: '2025-04-01', attendees: 120 },
  { id: '2', title: 'Celine Dion', date: '2025-04-10', attendees: 80 },
  { id: '3', title: 'Justin Bieber', date: '2025-03-15', attendees: 150 },
  { id: '4', title: 'Adele', date: '2025-03-21', attendees: 95 },
  { id: '5', title: 'Jenifer Lopez', date: '2025-02-05', attendees: 200 },
]

interface OrganizerProps {
  isVisible: boolean;
}

export const OrganizerDashboard: React.FC<OrganizerProps> = (isVisible) => {
  const [filter, setFilter] = useState<'daily' | 'monthly' | 'yearly'>('monthly')

  const filteredEvents = dummyEvents.filter(event => {
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={e => setFilter(e.target.value as any)}
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
                {new Date(event.date).toLocaleDateString()} | Attendees: {event.attendees}
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