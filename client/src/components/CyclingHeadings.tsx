import { useState } from 'react';

interface HeroSectionProps {
  onSubmit: (question: string) => void;
}

export default function HeroSection({ onSubmit }: HeroSectionProps) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question.trim());
      setQuestion(''); // Clear input after submission
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="hero-content">
      <div className="company-logo text-center mb-4">
        <i className="bi bi-house-gear-fill"></i> Elite Home Remodeling
      </div>
      
      <h1 className="display-3 fw-bold text-center mb-4">
        Transform Your Home with Expert Remodeling
      </h1>
      
      <p className="lead text-center text-muted mb-5">
        Professional windows, siding, bathroom, and door installations. 
        Get instant answers from our AI assistant.
      </p>

      <div className="hero-cta-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group hero-input-group">
            <input 
              type="text"
              className="form-control hero-input"
              placeholder="What remodeling project are you considering?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              data-testid="input-main-question"
            />
            <button 
              type="submit"
              className="btn btn-flat btn-lg"
              disabled={!question.trim()}
              data-testid="button-submit-question"
            >
              Get Instant Help
            </button>
          </div>
        </form>
        
        <div className="text-center mt-3">
          <small className="text-muted">
            <i className="bi bi-shield-check text-success me-1"></i>
            Licensed & Insured • Free Estimates • 15+ Years Experience
          </small>
        </div>
      </div>
    </div>
  );
}
