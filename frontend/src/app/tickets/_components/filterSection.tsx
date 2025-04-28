import React from "react";

interface FilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
  selectedArtist: string;
  setSelectedArtist: React.Dispatch<React.SetStateAction<string>>;
  concerts: { category: string; location: string; title: string }[];
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedArtist,
  setSelectedArtist,
  concerts,
}) => {
  const categories = Array.from(new Set(concerts.map((event) => event.category)));
  const locations = Array.from(new Set(concerts.map((event) => event.location)));

  return (
    <>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        value={selectedArtist}
        onChange={(e) => setSelectedArtist(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Artists</option>
        {Array.from(new Set(concerts.map((event) => event.title))).map((artist) => (
          <option key={artist} value={artist}>
            {artist}
          </option>
        ))}
      </select>
    </>
  );
};
