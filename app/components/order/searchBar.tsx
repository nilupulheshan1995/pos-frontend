import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search items..."
        className="border p-2 mr-2"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
