import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { gsap } from 'gsap';
import CyclingHeadings from '@/components/CyclingHeadings';
import SuggestedPrompts from '@/components/SuggestedPrompts';

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
            <a href="#windows" data-testid="nav-windows" onClick={() => setIsMenuOpen(false)}>Windows</a>
            <a href="#siding" data-testid="nav-siding" onClick={() => setIsMenuOpen(false)}>Siding</a>
            <a href="#bath" data-testid="nav-bath" onClick={() => setIsMenuOpen(false)}>Bath</a>
            <a href="#doors" data-testid="nav-doors" onClick={() => setIsMenuOpen(false)}>Doors</a>
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

        {/* Footer */}
        <footer className="bg-dark text-light py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-danger">New York Sash</h5>
                <p className="mb-1">Professional home improvement services</p>
                <p className="mb-0">Licensed • Insured • Trusted</p>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="mb-1"><i className="bi bi-telephone-fill text-danger me-2"></i>(555) 123-4567</p>
                <p className="mb-0"><i className="bi bi-envelope-fill text-danger me-2"></i>info@newyorksash.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
