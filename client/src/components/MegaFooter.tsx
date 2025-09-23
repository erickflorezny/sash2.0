import { Link } from 'wouter';
import logoImage from '@/assets/new-york-sash-logo.png';
import './MegaFooter.css';

export default function MegaFooter() {
  return (
    <footer className="mega-footer">
      <div className="footer-content">
        <div className="footer-sections">
          {/* About */}
          <div className="footer-section">
            <h4>About</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#certifications">Certifications</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-section">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link href="/windows">Windows</Link></li>
              <li><Link href="/doors">Doors</Link></li>
              <li><Link href="/siding">Siding</Link></li>
              <li><Link href="/bathrooms">Bathrooms</Link></li>
              <li><a href="#gallery">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><a href="#financing">Financing</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#maintenance">Maintenance Tips</a></li>
              <li><a href="#energy">Energy Savings</a></li>
              <li><a href="#consultation">Free Consultation</a></li>
            </ul>
          </div>

          {/* Blog */}
          <div className="footer-section">
            <h4>Blog</h4>
            <ul className="footer-links">
              <li><a href="#home-improvement">Home Improvement</a></li>
              <li><a href="#window-care">Window Care</a></li>
              <li><a href="#bathroom-trends">Bathroom Trends</a></li>
              <li><a href="#seasonal-tips">Seasonal Tips</a></li>
              <li><a href="#diy-guides">DIY Guides</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p className="contact-text">349 Oriskany Blvd, Whitesboro NY 13492</p>
              <p className="contact-text">
                <a href="mailto:info@newyorksash.com">info@newyorksash.com</a>
              </p>
              <p className="contact-text">
                <a href="tel:+13156247344">(315) 624-7344</a>
              </p>
            </div>
            
            {/* Social Links */}
            <div className="social-links">
              <a href="https://www.facebook.com/NYSash" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/newyorksash/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.youtube.com/@NewYorkSash" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@NewYorkSash" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>Copyright © 2025 All Rights Reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#terms">Terms & Condition</a>
            <span>|</span>
            <a href="#privacy">Privacy</a>
            <span>|</span>
            <a href="#support">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}