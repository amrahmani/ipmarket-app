import React from 'react';

const IPListingCard = ({ title, description, ipType, jurisdiction }) => {
  const handleInquire = () => {
    alert(`You are inquiring about: ${title}`);
  };

  return (
    <div className="ip-card">
      <h3 className="ip-title">{title}</h3>
      <p className="ip-description">{description}</p>
      <div className="ip-details">
        <p>
          <strong>IP Type:</strong> {ipType}
        </p>
        <p>
          <strong>Jurisdiction:</strong> {jurisdiction}
        </p>
      </div>
      <button className="inquire-button" onClick={handleInquire}>
        Inquire
      </button>
      <style jsx>{`
        .ip-card {
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 20px;
          margin: 10px;
          max-width: 300px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .ip-card:hover {
          transform: translateY(-5px);
        }
        .ip-title {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
        .ip-description {
          font-size: 1rem;
          color: #666;
          margin-bottom: 15px;
        }
        .ip-details {
          font-size: 0.9rem;
          color: #333;
        }
        .inquire-button {
          width: 100%;
          padding: 10px;
          border: none;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
};

export default IPListingCard;