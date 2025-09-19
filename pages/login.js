import Layout from '../components/Layout';
import { useState } from 'react';
// Netlify Identity library
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>; 

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    netlifyIdentity.open(); // Opens the Netlify Identity modal
  };

  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>Log in or Sign up</h1>
        <p>To list your IP or contact sellers, you must be a registered user.</p>
        <button onClick={handleLogin}>Log in / Sign up</button>
      </div>
    </Layout>
  );
}