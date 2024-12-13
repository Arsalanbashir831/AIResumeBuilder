import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'orange', color: 'white', padding: '20px', textAlign: 'center' }}>
      <nav>
        <a 
          href="/terms-and-conditions" 
          style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}
        >
          Terms and Conditions
        </a>
        <a 
          href="/refund-policy" 
          style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}
        >
          Refund Policy
        </a>
        <a 
          href="/privacy-policy" 
          style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}
        >
          Privacy Policy
        </a>
      </nav>
      <p style={{ marginTop: '10px' }}>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
