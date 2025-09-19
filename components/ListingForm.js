import React, { useState } from 'react';

const ListingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ipType: '',
    jurisdiction: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title of IP Asset</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Brief Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="ipType">Type of IP</label>
        <select id="ipType" name="ipType" value={formData.ipType} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Patent">Patent</option>
          <option value="Trademark">Trademark</option>
          <option value="Industrial Design">Industrial Design</option>
          <option value="Trade Secret">Trade Secret</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="jurisdiction">Jurisdiction</label>
        <input type="text" id="jurisdiction" name="jurisdiction" value={formData.jurisdiction} onChange={handleChange} required />
      </div>
      <button type="submit">Submit Listing</button>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .form-group label {
          font-weight: bold;
          margin-bottom: 5px;
          display: block;
        }
        input, textarea, select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 10px;
          border: none;
          background-color: #0070f3;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

export default ListingForm;