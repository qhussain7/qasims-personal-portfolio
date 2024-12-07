import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Qasim Hussain. All rights reserved. CWID: 884750746</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/qasim-hussain-a2b9a628b/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/qhussain7" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="/QasimHussain-Resume2025.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
