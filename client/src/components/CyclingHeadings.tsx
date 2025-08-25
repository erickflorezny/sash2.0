import { useState, useEffect } from 'react';
import logoImage from '@assets/new-york-sash_1756146470803.png';

interface CyclingHeadingsProps {
  onSubmit: (prompt: string) => void;
}

export default function CyclingHeadings({ onSubmit }: CyclingHeadingsProps) {
  const [inputValue, setInputValue] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(null);
  
  const firstText = "Welcome to New York Sash How Can We Help You Today?";
  const secondText = "How about we start with your name? Go ahead and type!";

  useEffect(() => {
    let index = 0;
    let phase = 'typing'; // 'typing', 'pausing', 'deleting', 'typing-second'
    let pauseCounter = 0;
    
    const typingInterval = setInterval(() => {
      if (phase === 'typing') {
        // Type first message
        if (index < firstText.length) {
          setTypewriterText(firstText.slice(0, index + 1));
          index++;
        } else {
          phase = 'pausing';
          pauseCounter = 0;
        }
      } 
      else if (phase === 'pausing') {
        // Pause for 1 second (30 intervals at 30ms each = 900ms)
        pauseCounter++;
        if (pauseCounter >= 30) {
          phase = 'deleting';
        }
      }
      else if (phase === 'deleting') {
        // Delete first message
        if (index > 0) {
          index--;
          setTypewriterText(firstText.slice(0, index));
        } else {
          phase = 'typing-second';
          index = 0;
        }
      }
      else if (phase === 'typing-second') {
        // Type second message
        if (index < secondText.length) {
          setTypewriterText(secondText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          // Start cursor blinking after typing is complete
          const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
          }, 500);
          return () => clearInterval(cursorInterval);
        }
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Always submit, even with empty input - chat can handle the greeting
    onSubmit(inputValue.trim() || 'Hello');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="text-center">
      {/* Logo and Heading Section */}
      <div className="logo-heading-container">
        <img 
          src={logoImage} 
          alt="New York Sash"
          className="company-logo"
        />
      </div>

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
        Tell us your name and what brings you to New York Sash today!
      </div>

      {/* Ask Button */}
      <div className="ask-button">
        <button 
          className="btn-ask"
          onClick={handleSubmit}
          data-testid="button-submit-question"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
}
