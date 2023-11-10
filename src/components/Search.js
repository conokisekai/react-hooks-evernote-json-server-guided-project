import React, { useState } from 'react';

const Search = ({ onSearch, onBodySearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bodySearchTerm, setBodySearchTerm] = useState("");

  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => onSearch(searchTerm)}>Search</button>

      <input
        id="search-bar-body"
        type="text"
        placeholder="Search Notes by Body"
        value={bodySearchTerm}
        onChange={(e) => setBodySearchTerm(e.target.value)}
      />
      <button onClick={() => onBodySearch(bodySearchTerm)}>Search</button>
    </div>
  );
};

export default Search;
