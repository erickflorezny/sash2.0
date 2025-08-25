import { useState } from 'react';
import CyclingHeadings from '@/components/CyclingHeadings';
import ChatInterface from '@/components/ChatInterface';
import SuggestedPrompts from '@/components/SuggestedPrompts';

export default function Home() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState('');

  const handleHeadingClick = (prompt: string) => {
    setInitialPrompt(prompt);
    setIsChatActive(true);
  };

  const handleCloseChat = () => {
    setIsChatActive(false);
    setInitialPrompt('');
  };

  return (
    <div>
      {/* Floating Navigation */}
      <nav className="floating-nav d-none d-md-block">
        <div className="d-flex">
          <a href="#windows" data-testid="nav-windows">Windows</a>
          <a href="#siding" data-testid="nav-siding">Siding</a>
          <a href="#bath" data-testid="nav-bath">Bath</a>
          <a href="#doors" data-testid="nav-doors">Doors</a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="container-fluid d-md-none">
        <nav className="floating-nav">
          <div className="d-flex flex-wrap justify-content-center">
            <a href="#windows" data-testid="nav-mobile-windows">Windows</a>
            <a href="#siding" data-testid="nav-mobile-siding">Siding</a>
            <a href="#bath" data-testid="nav-mobile-bath">Bath</a>
            <a href="#doors" data-testid="nav-mobile-doors">Doors</a>
          </div>
        </nav>
      </div>

      <div className="container py-5">
        <main>
          {/* Hero Section */}
          <section className="text-center mb-5">            
            <CyclingHeadings onClick={handleHeadingClick} />
            
            <p className="lead text-muted mt-3">
              Transform your home with our expert remodeling services. Click above to get started with our AI assistant.
            </p>
          </section>

          {/* Chat Interface */}
          {isChatActive && (
            <ChatInterface 
              initialPrompt={initialPrompt} 
              onClose={handleCloseChat}
            />
          )}

          {/* Suggested Prompts */}
          <SuggestedPrompts onPromptClick={handleHeadingClick} />
        </main>
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
