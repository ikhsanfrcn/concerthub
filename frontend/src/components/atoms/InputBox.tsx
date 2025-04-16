interface SProps {
    className?: string;
    placeholder?: string;
}

export const SearchBox: React.FC<SProps> = ({className, placeholder}) => {
  return (
    <div className={`${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
      />
    </div>
  );
};
