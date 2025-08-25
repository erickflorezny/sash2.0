import { useState } from 'react';
import CyclingHeadings from '@/components/CyclingHeadings';
import ChatInterface from '@/components/ChatInterface';
import SuggestedPrompts from '@/components/SuggestedPrompts';

export default function Home() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState('');

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
      {/* Navigation */}
      <div className="floating-nav">
        <ul>
          <li><a href="#windows" data-testid="nav-windows">Windows</a></li>
          <li><a href="#siding" data-testid="nav-siding">Siding</a></li>
          <li><a href="#bath" data-testid="nav-bath">Bath</a></li>
          <li><a href="#doors" data-testid="nav-doors">Doors</a></li>
        </ul>
      </div>

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
