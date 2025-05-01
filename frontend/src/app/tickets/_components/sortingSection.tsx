import React from "react";

interface SortingSectionProps {
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

export const SortingSection: React.FC<SortingSectionProps> = ({
  selectedSort,
  setSelectedSort,
}) => {
  return (
    <select
      value={selectedSort}
      onChange={(e) => setSelectedSort(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="closest">Date: Closest</option>
      <option value="popular">Most Popular</option>
    </select>
  );
};
