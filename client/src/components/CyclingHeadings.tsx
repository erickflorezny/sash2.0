import { useState } from 'react';

interface CyclingHeadingsProps {
  onSubmit: (prompt: string) => void;
}

export default function CyclingHeadings({ onSubmit }: CyclingHeadingsProps) {
  const [inputValue, setInputValue] = useState('');

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

  return (
    <div className="text-center">
      {/* AI Badge */}
      <div className="ai-badge">
        <div className="ai-pulse"></div>
        AI-Powered Home Consultation
      </div>

      {/* Prompt Container */}
      <div className="prompt-container">
        <textarea 
          className="prompt-input-field" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What home improvement project can we help you with today?"
          rows={2}
          data-testid="input-question"
        />
      </div>

      {/* Input Hint */}
      <div className="input-hint">
        Ask about windows, bathrooms, siding, costs, timelines, or anything else
      </div>

      {/* Ask Button */}
      <div className="ask-button">
        <button 
          className="btn-ask"
          onClick={handleSubmit}
          disabled={!inputValue.trim()}
          data-testid="button-submit-question"
        >
          Ask Our AI Assistant
        </button>
      </div>
    </div>
  );
}
