import { useState, useEffect } from 'react';
import IPListingCard from '../components/IPListingCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; // Assuming you create this CSS module

export default function Home() {
  const [ipListings, setIpListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // This function will be triggered whenever searchQuery or filters change
    const fetchListings = async () => {
      // You will need to construct a proper API endpoint for your serverless function
      const res = await fetch(`/api/ip?search=${searchQuery}&...`);
      const data = await res.json();
      setIpListings(data);
    };
    fetchListings();
  }, [searchQuery, filters]);

  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Discover and Trade Australian Intellectual Property</h1>
        <p>Your online marketplace for patents, trademarks, and more.</p>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className={styles.mainContent}>
        <FilterPanel onFilterChange={setFilters} />
        <div className={styles.listingsGrid}>
          {ipListings.length > 0 ? (
            ipListings.map(ip => <IPListingCard key={ip.id} ip={ip} />)
          ) : (
            <p>No intellectual property listings found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}