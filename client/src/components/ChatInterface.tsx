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
  const [isLiveAgentOpen, setIsLiveAgentOpen] = useState(false);
  const [liveAgentMessages, setLiveAgentMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Sarah, your live agent. I'm here to help with your home improvement needs. What can I assist you with today?"
    }
  ]);
  const [liveAgentInput, setLiveAgentInput] = useState('');
  const [isLiveAgentTyping, setIsLiveAgentTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);


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

  const sendLiveMessage = () => {
    const message = liveAgentInput.trim();
    if (!message) return;

    // Add user message to live chat
    const userMessage: Message = { role: 'user', content: message };
    setLiveAgentMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setLiveAgentInput('');
    
    // Show typing indicator
    setIsLiveAgentTyping(true);
    
    // Generate live agent response
    setTimeout(() => {
      setIsLiveAgentTyping(false);
      const response = generateLiveAgentResponse(message);
      const agentMessage: Message = { role: 'assistant', content: response };
      setLiveAgentMessages(prev => [...prev, agentMessage]);
    }, 1200);
  };

  const generateLiveAgentResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    const liveResponses = {
      window: "Great question about windows! I can connect you with our window specialist who can discuss energy-efficient options, pricing, and scheduling. Are you looking to replace specific windows or considering a whole-house upgrade?",
      bath: "Bathroom remodeling is one of our most popular services! I'd love to hear more about your vision. Are you thinking of a complete renovation or updating specific fixtures? Our team can typically complete most projects in 7-10 days.",
      siding: "Siding can really transform your home's appearance and energy efficiency! We work with vinyl, fiber cement, and wood options. What style of home do you have? I can share some recent project photos that might inspire you.",
      door: "New doors make such a difference in both curb appeal and security! Are you interested in entry doors, patio doors, or interior doors? We have a showroom where you can see and feel different materials and styles.",
      price: "I understand cost is important when planning home improvements. Our pricing varies based on materials, project scope, and timing. I can arrange for one of our estimators to provide you with a detailed, no-obligation quote. When would be a good time for them to visit?",
      timeline: "Great question about timing! Most of our projects are completed within 1-2 weeks, depending on scope. We're currently booking 2-3 weeks out for new projects. Would you like me to check our calendar for available consultation dates?",
      default: "Thanks for reaching out! I'm here to help with any questions about our services. We specialize in windows, bathrooms, siding, and doors. Is there a specific project you have in mind? I can connect you with the right specialist on our team."
    };
    
    if (lowerMessage.includes('window')) {
      return liveResponses.window;
    } else if (lowerMessage.includes('bath') || lowerMessage.includes('bathroom')) {
      return liveResponses.bath;
    } else if (lowerMessage.includes('siding')) {
      return liveResponses.siding;
    } else if (lowerMessage.includes('door')) {
      return liveResponses.door;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('$')) {
      return liveResponses.price;
    } else if (lowerMessage.includes('time') || lowerMessage.includes('schedule') || lowerMessage.includes('when')) {
      return liveResponses.timeline;
    }
    
    return liveResponses.default;
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
            <button 
              className="live-agent-button"
              onClick={() => setIsLiveAgentOpen(true)}
              data-testid="button-live-agent"
            >
              <div className="live-indicator"></div>
              <span>Talk to Live Person</span>
            </button>
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

      {/* Live Agent Dialog */}
      {isLiveAgentOpen && (
        <div className="live-agent-dialog-overlay" onClick={() => setIsLiveAgentOpen(false)}>
          <div className="live-agent-dialog" onClick={e => e.stopPropagation()}>
            <div className="live-agent-header">
              <div className="live-agent-title">
                <div className="live-indicator"></div>
                <span>Connect with Live Agent</span>
              </div>
              <button 
                className="dialog-close-button"
                onClick={() => setIsLiveAgentOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            
            <div className="live-agent-content">
              <p>Ready to speak with one of our home improvement specialists?</p>
              <div className="contact-options">
                <div className="contact-option">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <strong>Call Now</strong>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-option">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <strong>Email Us</strong>
                    <p>info@newyorksash.com</p>
                  </div>
                </div>
              </div>
              
              {/* Live Chat Messages */}
              <div className="live-chat-messages">
                {liveAgentMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`live-chat-message live-chat-message-${message.role}`}
                  >
                    <div className="live-chat-content">
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {isLiveAgentTyping && (
                  <div className="live-chat-typing">
                    <div className="typing-dots">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                    <span>Sarah is typing...</span>
                  </div>
                )}
              </div>
              
              {/* Live Chat Input */}
              <div className="live-chat-input-area">
                <div className="live-chat-input-container">
                  <input
                    type="text"
                    className="live-chat-input"
                    placeholder="Type your message..."
                    value={liveAgentInput}
                    onChange={(e) => setLiveAgentInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendLiveMessage()}
                  />
                  <button 
                    className="live-chat-send-button"
                    onClick={sendLiveMessage}
                    disabled={!liveAgentInput.trim()}
                  >
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
