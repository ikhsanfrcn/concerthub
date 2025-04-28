interface SProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const SearchBox: React.FC<SProps> = ({ className, value, onChange }) => {
  return (
    <div className={`${className}`}>
      <input
        type="text"
        placeholder="Search concerts..."
        value={value}
        onChange={onChange}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
      />
    </div>
  );
};
