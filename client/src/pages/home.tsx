import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'wouter';
import { gsap } from 'gsap';
import CyclingHeadings from '@/components/CyclingHeadings';
import SuggestedPrompts from '@/components/SuggestedPrompts';
import logoImage from '@assets/new-york-sash_1756146470803.png';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate page in on mount
    gsap.fromTo(pageRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, []);

  const handleQuestionSubmit = (prompt: string) => {
    // Animate page out before navigation
    gsap.to(pageRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setLocation(`/chat?prompt=${encodeURIComponent(prompt)}`);
      }
    });
  };

  return (
    <div ref={pageRef} className="main-container">
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger-btn"
        onClick={() => setIsMenuOpen(true)}
        data-testid="hamburger-menu"
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Full Page Navigation Overlay */}
      {isMenuOpen && (
        <div className="nav-overlay">
          <button 
            className="close-btn"
            onClick={() => setIsMenuOpen(false)}
            data-testid="close-menu"
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="nav-links">
            <div className="nav-section">
              <Link href="/windows" className="nav-main" data-testid="nav-windows" onClick={() => setIsMenuOpen(false)}>Windows</Link>
              <div className="nav-submenu">
                <Link href="/window-replacement" onClick={() => setIsMenuOpen(false)}>Replacement Windows</Link>
                <Link href="/new-construction-windows" onClick={() => setIsMenuOpen(false)}>New Construction</Link>
                <Link href="/energy-efficient-windows" onClick={() => setIsMenuOpen(false)}>Energy Efficient</Link>
                <Link href="/window-types" onClick={() => setIsMenuOpen(false)}>Window Types</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/siding" className="nav-main" data-testid="nav-siding" onClick={() => setIsMenuOpen(false)}>Siding</Link>
              <div className="nav-submenu">
                <Link href="/vinyl-siding" onClick={() => setIsMenuOpen(false)}>Vinyl Siding</Link>
                <Link href="/fiber-cement-siding" onClick={() => setIsMenuOpen(false)}>Fiber Cement</Link>
                <Link href="/siding-installation" onClick={() => setIsMenuOpen(false)}>Siding Installation</Link>
                <Link href="/siding-repair" onClick={() => setIsMenuOpen(false)}>Siding Repair</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/bathroom" className="nav-main" data-testid="nav-bath" onClick={() => setIsMenuOpen(false)}>Bathrooms</Link>
              <div className="nav-submenu">
                <Link href="/bathroom-remodeling" onClick={() => setIsMenuOpen(false)}>Full Remodel</Link>
                <Link href="/walk-in-showers" onClick={() => setIsMenuOpen(false)}>Walk-in Showers</Link>
                <Link href="/tub-to-shower" onClick={() => setIsMenuOpen(false)}>Tub to Shower</Link>
                <Link href="/bathroom-repair" onClick={() => setIsMenuOpen(false)}>Bathroom Repair</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/doors" className="nav-main" data-testid="nav-doors" onClick={() => setIsMenuOpen(false)}>Doors</Link>
              <div className="nav-submenu">
                <Link href="/entry-doors" onClick={() => setIsMenuOpen(false)}>Entry Doors</Link>
                <Link href="/patio-doors" onClick={() => setIsMenuOpen(false)}>Patio Doors</Link>
                <Link href="/storm-doors" onClick={() => setIsMenuOpen(false)}>Storm Doors</Link>
                <Link href="/french-doors" onClick={() => setIsMenuOpen(false)}>French Doors</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/about" className="nav-main" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/gallery" className="nav-main" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link href="/testimonials" className="nav-main" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link href="/contact" className="nav-main" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/chat" className="nav-main" data-testid="nav-chat" onClick={() => setIsMenuOpen(false)}>Chat with AI</Link>
            </div>
          </nav>
        </div>
      )}

      <div className="main-content">
        <div className="hero-section">
          <main className="container-fluid">
            <CyclingHeadings onSubmit={handleQuestionSubmit} />
          </main>
        </div>

        {/* Suggested Prompts */}
        <div className="container py-5">
          <SuggestedPrompts onPromptClick={handleQuestionSubmit} />
        </div>
      </div>

      {/* Mega Footer */}
      <footer className="mega-footer">
        <div className="footer-content">
          <div className="footer-sections">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <img src={logoImage} alt="New York Sash" className="footer-logo" />
                <h3>New York Sash</h3>
              </div>
              <p className="footer-description">
                Premier home remodeling contractor serving New York with over 15 years of experience. 
                Specializing in windows, bathrooms, siding, and doors with exceptional quality and service.
              </p>
              <div className="footer-certifications">
                <span className="cert-badge">Licensed & Insured</span>
                <span className="cert-badge">BBB A+ Rated</span>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Our Services</h4>
              <div className="service-groups">
                <div className="service-group">
                  <h5><Link href="/windows">Windows</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/window-replacement">Replacement</Link></li>
                    <li><Link href="/new-construction-windows">New Construction</Link></li>
                    <li><Link href="/energy-efficient-windows">Energy Efficient</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h5><Link href="/siding">Siding</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/vinyl-siding">Vinyl Siding</Link></li>
                    <li><Link href="/fiber-cement-siding">Fiber Cement</Link></li>
                    <li><Link href="/siding-installation">Installation</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h5><Link href="/bathroom">Bathrooms</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/bathroom-remodeling">Full Remodel</Link></li>
                    <li><Link href="/walk-in-showers">Walk-in Showers</Link></li>
                    <li><Link href="/tub-to-shower">Tub to Shower</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h5><Link href="/doors">Doors</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/entry-doors">Entry Doors</Link></li>
                    <li><Link href="/patio-doors">Patio Doors</Link></li>
                    <li><Link href="/storm-doors">Storm Doors</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="footer-section">
              <h4>Service Areas</h4>
              <ul className="footer-links">
                <li><a href="#albany">Albany County</a></li>
                <li><a href="#schenectady">Schenectady County</a></li>
                <li><a href="#rensselaer">Rensselaer County</a></li>
                <li><a href="#saratoga">Saratoga County</a></li>
                <li><a href="#troy">Troy</a></li>
                <li><a href="#cohoes">Cohoes</a></li>
                <li><a href="#watervliet">Watervliet</a></li>
                <li><a href="#more">View All Areas</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#gallery">Project Gallery</a></li>
                <li><a href="#testimonials">Customer Reviews</a></li>
                <li><a href="#warranty">Warranty Info</a></li>
                <li><a href="#financing">Financing Options</a></li>
                <li><a href="#blog">Home Improvement Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#maintenance">Maintenance Tips</a></li>
                <li><a href="#energy">Energy Savings Guide</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <span className="contact-label">Call Us</span>
                    <a href="tel:+15184442321" className="contact-value">(518) 444-2321</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@newyorksash.com" className="contact-value">info@newyorksash.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <span className="contact-label">Address</span>
                    <span className="contact-value">1234 State Street<br />Albany, NY 12207</span>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock-fill"></i>
                  <div>
                    <span className="contact-label">Hours</span>
                    <span className="contact-value">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="social-links">
                <a href="#facebook" className="social-link"><i className="bi bi-facebook"></i></a>
                <a href="#instagram" className="social-link"><i className="bi bi-instagram"></i></a>
                <a href="#linkedin" className="social-link"><i className="bi bi-linkedin"></i></a>
                <a href="#youtube" className="social-link"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; 2025 New York Sash. All rights reserved.</p>
              </div>
              <div className="footer-legal">
                <a href="#privacy">Privacy Policy</a>
                <span>•</span>
                <a href="#terms">Terms of Service</a>
                <span>•</span>
                <a href="#accessibility">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
