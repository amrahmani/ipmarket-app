import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>IPMARKET.com.au</title>
        <meta name="description" content="Online IP Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/* You can add a navigation bar here */}
        <nav>
          {/* Add nav links here */}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Your intellectual property marketplace.</p>
      </footer>
      <style jsx>{`
        header {
          width: 100%;
          padding: 20px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
        }
        main {
          min-height: calc(100vh - 120px);
          padding: 20px;
        }
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          color: #666;
        }
      `}</style>
    </>
  );
};

export default Layout;