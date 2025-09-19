import React from 'react';

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>IP Type:</label>
        <select>
          <option>All</option>
          <option>Patents</option>
          <option>Trademarks</option>
          <option>Industrial Designs</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Jurisdiction:</label>
        <input type="text" placeholder="e.g., Australia" />
      </div>
      <style jsx>{`
        .filter-panel {
          padding: 20px;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .filter-group {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default FilterPanel;