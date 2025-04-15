'use client'

import { MapPin } from 'lucide-react'

export default function Mapconcert() {
  const address = '1 MetLife Stadium Dr, East Rutherford, NJ 07073, USA'
  const googleMapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex items-start gap-2 mb-4">
        <MapPin className="text-pink-600 mt-1" />
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-medium">Address:</span> {address}
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-md relative">
        <iframe
          title="Concert Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-74.090%2C40.800%2C-73.990%2C40.860&layer=mapnik&marker=40.8146,-74.0741"
          className="w-full h-[300px] border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <a
          href={googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full shadow"
        >
          go to google map
        </a>
      </div>
    </div>
  )
}
