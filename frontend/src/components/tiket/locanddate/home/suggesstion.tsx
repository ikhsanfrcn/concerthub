import React from 'react';

const suggestionsData = [
    {
        artist: 'Adele',
        location: 'Las Vegas',
        date: 'Dec 03, 20:00',
        imageUrl: 'https://www.nme.com/wp-content/uploads/2022/11/adelevegasgetty5.jpg', 
    },
    {
        artist: 'Celine Dion',
        location: 'New York City',
        date: 'Dec 13, 21:00',
        imageUrl: 'https://magnifissance.com/wp-content/uploads/2021/10/Celine-Dion_My-heart-will-go-on_Incredible_07.jpg', 
    },
    {
        artist: 'Justin Bieber',
        location: 'San Francisco',
        date: 'Dec 16, 20:00',
        imageUrl: 'https://www.listenherereviews.com/wp-content/uploads/2015/01/Justin-Bieber.jpg', 
    },
    {
        artist: 'Sila Gencoglu',
        location: 'Boston',
        date: 'Dec 18, 22:00',
        imageUrl: 'https://iv1.lisimg.com/image/3405462/740full-sila-gencoglu.jpg', 
    },
];

export default function Suggestion() {
    return (
        <div className="px-4 max-w-6xl mx-auto my-12"> {/* <- Sama kayak MapConcert tadi */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-bold">Suggestions for you</p>
                <p className="text-base text-gray-400 cursor-pointer hover:underline">See all</p>
            </div>

            <div className="flex flex-nowrap space-x-6 overflow-x-auto scrollbar-hide">
                {suggestionsData.map((suggestion, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[300px] rounded-lg shadow-md overflow-hidden bg-white"
                    >
                        <img
                            src={suggestion.imageUrl}
                            alt={suggestion.artist}
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{suggestion.artist}</h3>
                            <p className="text-sm text-gray-600">{suggestion.location}</p>
                            <p className="text-sm text-gray-600">{suggestion.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
