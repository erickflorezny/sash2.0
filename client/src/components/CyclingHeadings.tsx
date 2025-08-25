import { useState, useEffect } from 'react';

interface CyclingHeadingsProps {
  onSubmit: (prompt: string) => void;
}

const headings = [
  'Ask About Our Window Installations',
  'Inquire About Bath Remodeling',
  'Explore Our Siding Options',
  'Discover Door Replacement Services'
];

export default function CyclingHeadings({ onSubmit }: CyclingHeadingsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isInputMode, setIsInputMode] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!isActive || isInputMode) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isActive, isInputMode]);

  const handleClick = () => {
    const currentHeading = headings[currentIndex];
    setInputValue(currentHeading);
    setIsActive(false);
    setIsInputMode(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (isInputMode) {
    return (
      <div className="question-input-container" data-testid="question-input-container">
        <form onSubmit={handleSubmit} className="w-100">
          <div className="input-group input-group-lg mb-3">
            <input
              type="text"
              className="form-control form-control-lg text-center fw-bold"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question here..."
              autoFocus
              data-testid="input-question"
              style={{
                fontSize: '2rem',
                border: '2px solid var(--elite-red)',
                borderRadius: '0'
              }}
            />
            <button 
              className="btn btn-flat"
              type="submit"
              disabled={!inputValue.trim()}
              data-testid="button-submit-question"
            >
              <i className="bi bi-arrow-right-circle-fill"></i> Ask
            </button>
          </div>
          <p className="text-muted small">
            Edit the question above or type your own, then click "Ask" to start chatting
          </p>
        </form>
      </div>
    );
  }

  return (
    <div 
      className="cycling-heading" 
      onClick={handleClick}
      data-testid="cycling-heading"
    >
      <h1 className="display-4 fw-bold text-center">
        {headings[currentIndex]}
      </h1>
      <p className="text-muted mt-2">
        <i className="bi bi-cursor-text me-2"></i>Click to ask your own question
      </p>
    </div>
  );
}
