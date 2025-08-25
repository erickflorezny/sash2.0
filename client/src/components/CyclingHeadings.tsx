import { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
}

export default function QuestionInput({ onSubmit }: QuestionInputProps) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="question-input-container">
      <h2 className="display-6 fw-bold text-center mb-4">
        What can we help you with today?
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-2 align-items-end">
          <textarea 
            className="form-control question-input"
            rows={2}
            placeholder="Ask about windows, siding, bathrooms, doors, or any remodeling question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            data-testid="input-main-question"
          />
          <button 
            type="submit"
            className="btn btn-flat"
            disabled={!question.trim()}
            data-testid="button-submit-question"
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
