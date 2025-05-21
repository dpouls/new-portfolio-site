import { h } from 'preact';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {new Date().getFullYear()} Dallin Poulson. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://github.com/dpouls" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/dallin-poulson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 