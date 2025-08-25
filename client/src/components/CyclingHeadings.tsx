import { useState, useEffect } from 'react';

interface CyclingHeadingsProps {
  onSubmit: (prompt: string) => void;
}

export default function CyclingHeadings({ onSubmit }: CyclingHeadingsProps) {
  const [inputValue, setInputValue] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(null);
  
  const fullText = "Welcome to New York Sash How Can We Help You Today?";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Start cursor blinking after typing is complete
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

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
          ref={setTextareaRef}
          className={`prompt-input-field ${!inputValue ? 'hide-cursor' : ''}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder=""
          rows={2}
          data-testid="input-question"
          autoFocus
        />
        {!inputValue && (
          <div 
            className="typewriter-overlay"
            onClick={() => textareaRef?.focus()}
          >
            {typewriterText}
            {showCursor && <span className="typewriter-cursor">|</span>}
          </div>
        )}
      </div>

      {/* Input Hint */}
      <div className="input-hint">
        Start typing above to ask our AI agent a question about your next project. Ready to get started?
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
