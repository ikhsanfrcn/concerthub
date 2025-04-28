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
      className="border p-2 rounded mt-4"
    >
      <option value="none">None</option>
      <option value="closest">Date: Closest</option>
    </select>
  );
};
