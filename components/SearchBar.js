import React from 'react';

const SearchBar = () => {
  const handleSearch = () => {
    alert('Search button clicked! This is where your search logic will go.');
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for patents, trademarks, or ideas..."
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <style jsx>{`
        .search-bar-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eaeaea;
        }
        .search-input {
          width: 60%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .search-button {
          padding: 10px 20px;
          margin-left: 10px;
          border: none;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;