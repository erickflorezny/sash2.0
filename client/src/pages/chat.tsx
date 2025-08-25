import { useLocation } from 'wouter';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ChatInterface from '@/components/ChatInterface';
import SuggestedPrompts from '@/components/SuggestedPrompts';
import logoImage from '@assets/new-york-sash_1756146470803.png';

export default function Chat() {
  const [, setLocation] = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

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
      <ChatInterface 
        initialPrompt={initialPrompt} 
        onClose={handleCloseChat}
        showPrompts={true}
        onPromptClick={handlePromptClick}
        userName={userName}
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
              <ul className="footer-links">
                <li><a href="#windows">Window Installation</a></li>
                <li><a href="#replacement">Window Replacement</a></li>
                <li><a href="#bathroom">Bathroom Remodeling</a></li>
                <li><a href="#siding">Siding Installation</a></li>
                <li><a href="#doors">Entry Doors</a></li>
                <li><a href="#patio">Patio Doors</a></li>
                <li><a href="#storm">Storm Doors</a></li>
                <li><a href="#consultation">Free Consultation</a></li>
              </ul>
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