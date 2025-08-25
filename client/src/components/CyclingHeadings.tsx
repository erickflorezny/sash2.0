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
      {/* Prompt Container */}
      <div className="prompt-container">
        <textarea 
          className="prompt-input-field" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Welcome to New York Sash How Can We Help You Today?"
          rows={2}
          data-testid="input-question"
        />
      </div>

      {/* Input Hint */}
      <div className="input-hint">
        Ask our new AI agent a question about your next project to get started!
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
