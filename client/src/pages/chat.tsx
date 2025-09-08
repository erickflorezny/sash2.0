import { useLocation, Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ChatInterface from '@/components/ChatInterface';
import SuggestedPrompts from '@/components/SuggestedPrompts';
import logoImage from '@assets/new-york-sash_1756146470803.png';

export default function Chat() {
  const [, setLocation] = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animate page in from bottom with GSAP
    gsap.fromTo(pageRef.current, 
      { y: "100vh", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, []);

  const handleCloseChat = () => {
    // Animate page out before navigation
    gsap.to(pageRef.current, {
      y: "100vh",
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setLocation('/');
      }
    });
  };

  // Get initial prompt and username from URL params if available
  const urlParams = new URLSearchParams(window.location.search);
  const initialPrompt = urlParams.get('prompt') || '';
  const userName = urlParams.get('userName') || urlParams.get('name') || '';

  const handlePromptClick = (prompt: string) => {
    // Could be used to add new messages to the existing chat
    // For now, we'll reload the chat with the new prompt
    const urlParams = new URLSearchParams();
    urlParams.set('prompt', prompt);
    window.history.pushState({}, '', `/chat?${urlParams.toString()}`);
    window.location.reload();
  };

  return (
    <div ref={pageRef} className="chat-page">
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
              <Link href="/about" className="nav-main" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <div className="nav-submenu">
                <Link href="/showroom" onClick={() => setIsMenuOpen(false)}>Showroom</Link>
                <Link href="/staff" onClick={() => setIsMenuOpen(false)}>Meet Our Team</Link>
                <Link href="/jobs" onClick={() => setIsMenuOpen(false)}>Job Openings</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/windows" className="nav-main" data-testid="nav-windows" onClick={() => setIsMenuOpen(false)}>Windows</Link>
              <div className="nav-submenu">
                <Link href="/windows/double-hung" onClick={() => setIsMenuOpen(false)}>Double Hung Windows</Link>
                <Link href="/windows/bay-bow-picture-windows" onClick={() => setIsMenuOpen(false)}>Bay, Bow and Picture Windows</Link>
                <Link href="/windows/slider-windows" onClick={() => setIsMenuOpen(false)}>Slider Windows</Link>
                <Link href="/windows/vinyl-awning-windows" onClick={() => setIsMenuOpen(false)}>Awning Windows</Link>
                <Link href="/windows/hopper-casement" onClick={() => setIsMenuOpen(false)}>Hopper Windows</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/siding" className="nav-main" data-testid="nav-siding" onClick={() => setIsMenuOpen(false)}>Siding</Link>
              <div className="nav-submenu">
                <Link href="/siding/engineered-wood-siding" onClick={() => setIsMenuOpen(false)}>Engineered Wood Siding</Link>
                <Link href="/siding/reinforced-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Reinforced Vinyl Siding</Link>
                <Link href="/siding/monogram-46-vinyl-clapboard-siding" onClick={() => setIsMenuOpen(false)}>Traditional Vinyl Siding</Link>
                <Link href="/siding/shake-shingle-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Cedar Shake Vinyl Siding</Link>
                <Link href="/siding/board-batten-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Board & Batten Vertical Vinyl Siding</Link>
                <Link href="/siding/exteria-stacked-stone-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Stacked Stone</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/bathrooms" className="nav-main" data-testid="nav-bath" onClick={() => setIsMenuOpen(false)}>Baths</Link>
              <div className="nav-submenu">
                <Link href="/bathrooms/tub-shower-conversion" onClick={() => setIsMenuOpen(false)}>Tub To Shower Conversion</Link>
                <Link href="/bathrooms/safety-tubs" onClick={() => setIsMenuOpen(false)}>Safety Tubs</Link>
                <Link href="/bathrooms/premium-shower-doors" onClick={() => setIsMenuOpen(false)}>Shower Doors</Link>
                <Link href="/bathrooms/toilets" onClick={() => setIsMenuOpen(false)}>Toilets</Link>
                <Link href="/bathrooms/bathroom-accessories" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
                <Link href="/bathrooms/bathroom-color-texture-wall-options" onClick={() => setIsMenuOpen(false)}>Color & Texture Options</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/doors" className="nav-main" data-testid="nav-doors" onClick={() => setIsMenuOpen(false)}>Doors</Link>
              <div className="nav-submenu">
                <Link href="/doors/entry-doors" onClick={() => setIsMenuOpen(false)}>Entry Doors</Link>
                <Link href="/doors/storm-doors" onClick={() => setIsMenuOpen(false)}>Storm Doors</Link>
                <Link href="/doors/patio-doors" onClick={() => setIsMenuOpen(false)}>Patio Doors</Link>
              </div>
            </div>
            
            <div className="nav-section">
              <Link href="/quote" className="nav-main" onClick={() => setIsMenuOpen(false)}>Free Quote</Link>
              <Link href="/financing" className="nav-main" onClick={() => setIsMenuOpen(false)}>Financing</Link>
              <Link href="/review-new-york-sash" className="nav-main" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link href="/chat" className="nav-main" data-testid="nav-chat" onClick={() => setIsMenuOpen(false)}>Chat with AI</Link>
            </div>
          </nav>
        </div>
      )}

      <ChatInterface 
        initialPrompt={initialPrompt} 
        onClose={handleCloseChat}
        showPrompts={true}
        onPromptClick={handlePromptClick}
        userName={userName}
        onMenuOpen={() => setIsMenuOpen(true)}
      />
      
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
                    <li><Link href="/windows/double-hung">Double Hung</Link></li>
                    <li><Link href="/windows/bay-bow-picture-windows">Bay, Bow & Picture</Link></li>
                    <li><Link href="/windows/slider-windows">Slider Windows</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h5><Link href="/siding">Siding</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/siding/engineered-wood-siding">Engineered Wood</Link></li>
                    <li><Link href="/siding/reinforced-vinyl-siding">Reinforced Vinyl</Link></li>
                    <li><Link href="/siding/monogram-46-vinyl-clapboard-siding">Traditional Vinyl</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h5><Link href="/bathrooms">Baths</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/bathrooms/tub-shower-conversion">Tub to Shower</Link></li>
                    <li><Link href="/bathrooms/safety-tubs">Safety Tubs</Link></li>
                    <li><Link href="/bathrooms/premium-shower-doors">Shower Doors</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h5><Link href="/doors">Doors</Link></h5>
                  <ul className="footer-sub-links">
                    <li><Link href="/doors/entry-doors">Entry Doors</Link></li>
                    <li><Link href="/doors/storm-doors">Storm Doors</Link></li>
                    <li><Link href="/doors/patio-doors">Patio Doors</Link></li>
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