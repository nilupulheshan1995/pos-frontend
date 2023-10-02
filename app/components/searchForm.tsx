import React, { useState } from 'react';

const items = [
  'ABCV',
  '1239',
  'HGXW',
  'POPV',
  'MACH',
  // ...more items
];

type searchProps = {
    onSearch:any
}

const SearchBar = ({ onSearch} : searchProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border rounded p-2 mr-2"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

type itemProps = {
    filteredItems:any
}

const ItemList = ({ filteredItems }:itemProps) => {
  return (
    <ul className="list-disc pl-8">
      {filteredItems.map((item:any, index:number) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Bar and List with Tailwind CSS</h1>
      <div className="flex mb-4">
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <ItemList filteredItems={filteredItems} />
    </div>
  );
};

export default SearchBox;
