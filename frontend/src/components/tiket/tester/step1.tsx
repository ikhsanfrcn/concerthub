'use client';
import { useState, useEffect } from "react";
import Mapconcert from "@/components/tiket/locanddate/home/map";
import ReviewsSection from "@/components/tiket/locanddate/home/riviewssection";
import Suggestion from "@/components/tiket/locanddate/home/suggesstion";
import axios from "@/lib/axios";

export default function Step1({ onComplete }: { onComplete: () => void }) {
  const [concerts, setConcerts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get("/events");
        setConcerts(res.data);
      } catch (error) {
        console.error("Failed to fetch concerts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  const filteredConcerts = concerts.filter((concert) => {
    return (
      concert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concert.status?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto">
        <div className="mb-6">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search concerts (Artist, Location, Date, Status)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 mb-4 border border-gray-300 rounded-lg"
          />

          <div className="rounded-xl overflow-hidden mb-6">
            <div
              className="w-full h-[280px] sm:h-[300px] flex items-end bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/taylor.png')",
                backgroundPositionY: "-0px",
              }}
            >
              <div className="flex justify-between w-full px-4 sm:px-6 pb-4 text-white hidden sm:block">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">Taylor</h2>
                  <p className="text-base md:text-lg">Concerts</p>
                </div>
                <div className="text-xs md:text-sm self-end">🎵 pop</div>
              </div>
            </div>
          </div>

          {/* Concert Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loading ? (
              <p className="text-center text-gray-500">Loading concerts...</p>
            ) : filteredConcerts.length > 0 ? (
              filteredConcerts.map((concert, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row bg-white border rounded-xl p-4 shadow-sm`}
                >
                  <div
                    className={`w-full sm:w-28 h-28 rounded-xl flex flex-col justify-center items-center font-semibold mb-4 sm:mb-0`}
                  >
                    <div className="text-lg">{concert.date.split(" ")[0]}</div>
                    <div className="text-sm">{concert.date.split(" ")[1]}</div>
                    <div className="text-sm">{concert.date.split(" ")[2]}</div>
                  </div>

                  <div className="sm:ml-4 flex-1">
                    <h3 className="font-semibold text-lg">{concert.title}</h3> {/* Show artist name */}
                    <p className="text-sm">{concert.status}</p>
                    <p className="text-sm">🗓 {concert.time}</p>
                    <p className="text-sm">📍 {concert.location}</p>
                  </div>

                  <div className="mt-4 sm:mt-0 sm:self-center">
                    <button
                      onClick={() => {
                        const selectedConcert = {
                          date: concert.date,
                          location: concert.location,
                          time: concert.time,
                        };
                        localStorage.setItem(
                          "selectedConcert",
                          JSON.stringify(selectedConcert)
                        );
                        onComplete(); // lanjut ke step 2
                      }}
                      className={`w-full sm:w-auto px-4 py-2 rounded-full text-white font-semibold bg-pink-500 hover:bg-pink-600`}
                    >
                      View Ticket
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No concerts found.</p>
            )}
          </div>
        </div>
      </div>

      <Mapconcert />
      <ReviewsSection />
      <Suggestion />
    </div>
  );
}
