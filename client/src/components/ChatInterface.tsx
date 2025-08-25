import { useState, useEffect, useRef } from 'react';
import chatLogo from '@assets/image_1756148189859.png';

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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (chatContainerRef.current) {
      const elementTop = chatContainerRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ 
        top: elementTop - 10, // 10px margin from top
        behavior: 'smooth' 
      });
    }
  };

  useEffect(() => {
    // Only scroll to top when chat is first activated, not on every message
    if (messages.length === 1) {
      scrollToTop();
    }
  }, [messages]);

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
    <div className="chat-page-layout" data-testid="chat-section">
      {/* Main Chat Area */}
      <div className="chat-main-area">
        <div className="chat-header-modern">
          <div className="chat-header-content">
            <div className="chat-brand">
              <img src={chatLogo} alt="New York Sash" className="chat-logo" />
              <span>New York Sash AI Assistant</span>
            </div>
          </div>
        </div>
        
        <div ref={chatContainerRef} className="chat-messages-modern" data-testid="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-modern message-${message.role}`}
              data-testid={`message-${message.role}-${index}`}
            >
              <div className="message-content">
                {message.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="typing-indicator-modern" data-testid="typing-indicator">
              <div className="typing-dots">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-modern">
          <div className="input-container-modern">
            <textarea 
              ref={textareaRef}
              className="chat-input-field"
              rows={1}
              placeholder="Continue the conversation..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              data-testid="input-chat-message"
            />
            <button 
              className="send-button-modern"
              onClick={() => sendMessage()}
              disabled={!inputValue.trim()}
              data-testid="button-send-message"
            >
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="chat-sidebar">
        <div className="sidebar-content">
          {/* Image Slider Section */}
          <div className="sidebar-slider">
            <div className="slider-placeholder">
              <i className="bi bi-images"></i>
              <span>Related Images</span>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="sidebar-content-area">
            <h3>Related Information</h3>
            <div className="content-placeholder">
              <p>This sidebar will display relevant page content related to your conversation with our AI assistant.</p>
              <div className="content-sections">
                <div className="content-section">
                  <h4>Windows</h4>
                  <p>Learn about our energy-efficient window solutions.</p>
                </div>
                <div className="content-section">
                  <h4>Siding</h4>
                  <p>Discover our durable siding options.</p>
                </div>
                <div className="content-section">
                  <h4>Doors</h4>
                  <p>Explore our entry and patio door selections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
