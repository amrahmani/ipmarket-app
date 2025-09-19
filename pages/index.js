import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import IPListingCard from '../components/IPListingCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IPMARKET.com.au - Online IP Marketplace</title>
        <meta name="description" content="A proposed online marketplace for intellectual property transactions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to IPMARKET.com.au</h1>
        <p>Your online marketplace for intellectual property transactions.</p>
        
        <SearchBar />

        <div className="listing-grid">
          <IPListingCard
            title="AI-Powered IP Valuation Engine"
            description="A novel AI model for automated IP valuation and portfolio management."
            ipType="Patent Application"
            jurisdiction="Australia"
          />
          <IPListingCard
            title="Sustainable Packaging Design"
            description="A new method for creating biodegradable and recyclable packaging."
            ipType="Industrial Design"
            jurisdiction="United States"
          />
          <IPListingCard
            title="Secure Data Encryption Algorithm"
            description="A cryptographic method for enhanced data security in cloud computing."
            ipType="Trade Secret"
            jurisdiction="Global"
          />
        </div>
      </main>

      <footer>
        <p>Powered by Next.js & your IP.</p>
      </footer>

      <style jsx>{`
        main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
        p {
          text-align: center;
        }
        .listing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 40px;
          padding: 0 20px;
        }
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}