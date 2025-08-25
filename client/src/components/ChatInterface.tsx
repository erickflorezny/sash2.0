import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  initialPrompt: string;
  onClose: () => void;
}

const mockResponses = {
  window: "I'd be happy to help with window installations! We offer vinyl, wood, and composite windows with energy-efficient features. Our team can provide a free estimate. What type of windows are you interested in?",
  bath: "Our bathroom remodeling services include complete renovations, tile work, fixtures, and plumbing. The typical timeline is 5-10 days depending on scope. Would you like to discuss your specific bathroom needs?",
  siding: "We install vinyl, fiber cement, and wood siding that's built to last. Our materials come with warranties and are designed to withstand harsh weather. What style of home do you have?",
  door: "We install entry doors, patio doors, and storm doors in various materials and styles. All installations include proper weatherproofing and hardware. Are you looking for interior or exterior doors?",
  default: "Thank you for your question! Our team specializes in windows, bathrooms, siding, and doors. We provide free estimates and have over 15 years of experience. How can we help transform your home?"
};

export default function ChatInterface({ initialPrompt, onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Welcome to New York Sash How Can We Help You Today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialPrompt) {
      setInputValue(initialPrompt);
      setTimeout(() => {
        sendMessage(initialPrompt);
      }, 500);
    }
  }, [initialPrompt]);

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('window')) {
      return mockResponses.window;
    } else if (lowerMessage.includes('bath') || lowerMessage.includes('bathroom')) {
      return mockResponses.bath;
    } else if (lowerMessage.includes('siding')) {
      return mockResponses.siding;
    } else if (lowerMessage.includes('door')) {
      return mockResponses.door;
    }
    
    return mockResponses.default;
  };

  const sendMessage = (messageText?: string) => {
    const message = messageText || inputValue.trim();
    
    if (!message) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      const response = generateResponse(message);
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="mb-5 fade-in" data-testid="chat-section">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card chat-container card-flat">
            <div className="card-header bg-light border-bottom-0 p-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-robot text-danger me-2"></i>
                <h5 className="card-title mb-0 fw-bold">Elite Remodeling AI Assistant</h5>
                <button 
                  className="btn-close ms-auto" 
                  onClick={onClose}
                  data-testid="button-close-chat"
                  aria-label="Close chat"
                />
              </div>
            </div>
            
            <div className="chat-messages" data-testid="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message-bubble message-${message.role}`}
                  data-testid={`message-${message.role}-${index}`}
                >
                  {message.content}
                </div>
              ))}
              
              {isTyping && (
                <div className="typing-indicator" data-testid="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="chat-input-container">
              <div className="input-group">
                <textarea 
                  ref={textareaRef}
                  className="form-control chat-input"
                  rows={2}
                  placeholder="Type your question about windows, siding, baths, or doors..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  data-testid="input-chat-message"
                />
                <button 
                  className="btn btn-flat"
                  onClick={() => sendMessage()}
                  disabled={!inputValue.trim()}
                  data-testid="button-send-message"
                >
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
