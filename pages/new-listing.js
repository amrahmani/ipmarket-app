import { useState } from 'react';
import Layout from '../components/Layout';
import ListingForm from '../components/ListingForm';

export default function NewListing() {
  const handleSubmit = async (formData) => {
    // This function will handle submitting the form data to your API.
    const res = await fetch('/api/ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 201) {
      alert('Your IP listing has been submitted successfully!');
      // Redirect to the home page or a success page
    } else {
      alert('Failed to submit listing. Please try again.');
    }
  };

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
        <h1>List Your Intellectual Property</h1>
        <p>Fill out the form below to showcase your innovation to a global network of buyers and licensees.</p>
        <ListingForm onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
}