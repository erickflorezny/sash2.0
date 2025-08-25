import { useState } from 'react';
import CyclingHeadings from '@/components/CyclingHeadings';
import ChatInterface from '@/components/ChatInterface';
import SuggestedPrompts from '@/components/SuggestedPrompts';

export default function Home() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleQuestionSubmit = (prompt: string) => {
    setInitialPrompt(prompt);
    setIsChatActive(true);
  };

  const handleCloseChat = () => {
    setIsChatActive(false);
    setInitialPrompt('');
  };

  return (
    <div>
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

      <div className="hero-section">
        <main className="container-fluid">
          <CyclingHeadings onSubmit={handleQuestionSubmit} />
        </main>
      </div>

      {/* Chat Interface */}
      {isChatActive && (
        <div className="container py-5">
          <ChatInterface 
            initialPrompt={initialPrompt} 
            onClose={handleCloseChat}
          />
        </div>
      )}

      {/* Suggested Prompts */}
      <div className="container py-5">
        <SuggestedPrompts onPromptClick={handleQuestionSubmit} />
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-danger">Elite Home Remodeling</h5>
              <p className="mb-1">Professional home improvement services</p>
              <p className="mb-0">Licensed • Insured • Trusted</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-1"><i className="bi bi-telephone-fill text-danger me-2"></i>(555) 123-4567</p>
              <p className="mb-0"><i className="bi bi-envelope-fill text-danger me-2"></i>info@elitehomeremodeling.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
