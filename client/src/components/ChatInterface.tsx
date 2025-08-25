import { useState, useEffect, useRef } from 'react';
import chatLogo from '@assets/image_1756148189859.png';
import SuggestedPrompts from './SuggestedPrompts';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  initialPrompt: string;
  onClose: () => void;
  showPrompts?: boolean;
  onPromptClick?: (prompt: string) => void;
}

const mockResponses = {
  window: "I'd be happy to help with window installations! We offer vinyl, wood, and composite windows with energy-efficient features. Our team can provide a free estimate. What type of windows are you interested in?",
  bath: "Our bathroom remodeling services include complete renovations, tile work, fixtures, and plumbing. The typical timeline is 5-10 days depending on scope. Would you like to discuss your specific bathroom needs?",
  siding: "We install vinyl, fiber cement, and wood siding that's built to last. Our materials come with warranties and are designed to withstand harsh weather. What style of home do you have?",
  door: "We offer comprehensive door solutions! Our entry doors are available in 20-gauge steel (49% stronger) and fiberglass with multi-point locking systems. We also have 5 storm door series including Spectrum™ and Decorator™, plus sliding patio doors with LowE Argon glass. Are you interested in entry, storm, or patio doors?",
  default: "Thank you for your question! Our team specializes in windows, bathrooms, siding, and doors. We provide free estimates and have over 15 years of experience. How can we help transform your home?"
};

export default function ChatInterface({ initialPrompt, onClose, showPrompts = false, onPromptClick }: ChatInterfaceProps) {
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [detectedKeywords, setDetectedKeywords] = useState<string[]>([]);
  const [sidebarContent, setSidebarContent] = useState<string>('general');
  
  const slides = [
    { icon: 'bi-window', title: 'Energy-Efficient Windows', gradient: 'linear-gradient(135deg, #dc3545, #6f42c1)', category: 'window' },
    { icon: 'bi-droplet', title: 'Modern Bath Renovation', gradient: 'linear-gradient(135deg, #28a745, #17a2b8)', category: 'bath' },
    { icon: 'bi-house', title: 'Premium Siding Installation', gradient: 'linear-gradient(135deg, #fd7e14, #e83e8c)', category: 'siding' },
    { icon: 'bi-door-open', title: 'Custom Entry Doors', gradient: 'linear-gradient(135deg, #6610f2, #20c997)', category: 'door' }
  ];

  // Content data for different categories
  const contentData = {
    window: {
      title: "Window Solutions",
      sections: [
        {
          title: "Energy Efficient Windows",
          content: "Our triple-pane windows can reduce energy bills by up to 40%. Available in vinyl, wood, and composite materials with lifetime warranties."
        },
        {
          title: "Window Replacement Process", 
          content: "Complete installation in 1-2 days with minimal disruption. We handle permits, disposal, and cleanup as part of our full-service approach."
        },
        {
          title: "Popular Window Styles",
          content: "Double-hung, casement, bay, bow, and picture windows. All styles available in custom sizes and colors to match your home's aesthetic."
        }
      ]
    },
    bath: {
      title: "Bathroom Remodeling",
      sections: [
        {
          title: "Complete Renovations",
          content: "Full bathroom makeovers including plumbing, electrical, tiling, and fixtures. Transform your space with modern, functional designs."
        },
        {
          title: "Luxury Upgrades",
          content: "Heated floors, rainfall showers, smart toilets, and custom vanities. Create your personal spa experience at home."
        },
        {
          title: "Timeline & Process",
          content: "Most bathroom projects completed in 7-10 days. We provide detailed timelines and keep you informed at every step."
        }
      ]
    },
    siding: {
      title: "Siding Installation",
      sections: [
        {
          title: "Durable Materials",
          content: "Vinyl, fiber cement, and wood siding options. All materials come with comprehensive warranties and weather-resistant features."
        },
        {
          title: "Energy Benefits",
          content: "Proper siding installation improves insulation and reduces heating costs by up to 20%. We include energy-efficient backing materials."
        },
        {
          title: "Style Options",
          content: "Traditional lap, board & batten, shingle, and modern panel styles. Wide selection of colors and textures available."
        }
      ]
    },
    door: {
      title: "Door Solutions",
      sections: [
        {
          title: "Entry Doors - Enhance Curb Appeal & Security",
          content: "Available in 20-gauge steel (49% stronger than standard) and fiberglass materials. Features kick-in-proof security plates, multi-point locking systems, and solid oak laminated construction. Customize with wood finishes, decorative glass, and hardware in oil-rubbed bronze, satin nickel, or bright brass."
        },
        {
          title: "Storm Doors - Protection & Style",
          content: "Custom-sized aluminum storm doors in 5 series: Spectrum™ (retractable screens), Decorator™ (stylish designs), Deluxe™ (full/top screen options), Duraguard™ (child/pet safe), and Superview™ (style & value). Available in multiple colors with Inspirations™ Art Glass options."
        },
        {
          title: "Patio Doors - Indoor-Outdoor Living", 
          content: "Durable vinyl sliding doors with dual tandem rollers and fully interlocking panels. Features 1\" LowE Argon-filled glass, thermal breaks, and 0.090\" vinyl wall thickness. Available with woodgrain interiors, various exterior colors, and optional stainless steel hardware."
        },
        {
          title: "Professional Installation & Benefits",
          content: "Expert installation by certified technicians ensures proper fit and performance. All doors improve home value, energy efficiency, and security while offering extensive customization options to match your home's architectural style."
        }
      ]
    },
    general: {
      title: "Our Services",
      sections: [
        {
          title: "Windows",
          content: "Energy-efficient window installation and replacement with lifetime warranties and professional service."
        },
        {
          title: "Bathrooms", 
          content: "Complete bathroom renovations from design to completion with luxury fixtures and modern amenities."
        },
        {
          title: "Siding",
          content: "Durable siding installation with weather-resistant materials and energy-efficient backing systems."
        },
        {
          title: "Doors",
          content: "Entry, patio, and storm door installation with security features and energy-efficient designs."
        }
      ]
    }
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Function to analyze messages and detect keywords
  const analyzeKeywords = (messages: Message[]): string[] => {
    const keywords: string[] = [];
    const messageText = messages.map(m => m.content).join(' ').toLowerCase();
    
    const keywordMap = {
      'window': ['window', 'windows', 'glass', 'pane', 'sash', 'frame'],
      'bath': ['bath', 'bathroom', 'shower', 'tub', 'toilet', 'vanity', 'tile', 'plumbing'],
      'siding': ['siding', 'exterior', 'cladding', 'vinyl', 'fiber cement', 'weatherboard'],
      'door': ['door', 'doors', 'entry', 'patio', 'storm', 'french doors', 'sliding door', 'spectrum', 'decorator', 'deluxe', 'duraguard', 'superview', 'steel door', 'fiberglass door', 'multi-point locking', 'security plate', 'curb appeal', 'deadbolt']
    };

    Object.entries(keywordMap).forEach(([category, terms]) => {
      if (terms.some(term => messageText.includes(term))) {
        keywords.push(category);
      }
    });

    return keywords;
  };

  // Function to determine primary content category
  const getPrimaryCategory = (keywords: string[]): string => {
    if (keywords.length === 0) return 'general';
    
    // Get the most recent message that contains a keyword
    const recentMessages = messages.slice(-5).reverse();
    for (const message of recentMessages) {
      const messageText = message.content.toLowerCase();
      if (messageText.includes('window')) return 'window';
      if (messageText.includes('bath') || messageText.includes('bathroom')) return 'bath';
      if (messageText.includes('siding')) return 'siding';
      if (messageText.includes('door')) return 'door';
    }
    
    // Fallback to first detected keyword
    return keywords[0];
  };

  // Effect to analyze messages and update sidebar content
  useEffect(() => {
    const keywords = analyzeKeywords(messages);
    setDetectedKeywords(keywords);
    
    const primaryCategory = getPrimaryCategory(keywords);
    setSidebarContent(primaryCategory);
    
    // Update slider to match primary category
    const slideIndex = slides.findIndex(slide => slide.category === primaryCategory);
    if (slideIndex !== -1) {
      setCurrentSlide(slideIndex);
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

  // Auto-advance slider (only when no keywords are detected)
  useEffect(() => {
    // Don't auto-advance if we have detected keywords and are showing relevant content
    if (detectedKeywords.length > 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [slides.length, detectedKeywords]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const extractName = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();
    const namePatterns = [
      /my name is (\w+)/i,
      /i'm (\w+)/i,
      /i am (\w+)/i,
      /this is (\w+)/i,
      /hello,? i'?m (\w+)/i,
      /hi,? i'?m (\w+)/i,
      /^(\w+)$/i // Just a single word (likely a name)
    ];
    
    for (const pattern of namePatterns) {
      const match = message.match(pattern);
      if (match && match[1] && match[1].length > 1) {
        return match[1];
      }
    }
    return null;
  };

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    const extractedName = extractName(message);
    
    // If user introduced themselves, ask for location
    if (extractedName && (lowerMessage.includes('name is') || lowerMessage.includes("i'm") || lowerMessage.includes('i am') || lowerMessage.includes('hello') || lowerMessage.includes('hi') || message.trim().split(' ').length === 1)) {
      return `Nice to meet you ${extractedName}, where are you located?`;
    }
    
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
    const extractedName = extractName(message);
    
    const liveResponses = {
      window: "Great question about windows! I can connect you with our window specialist who can discuss energy-efficient options, pricing, and scheduling. Are you looking to replace specific windows or considering a whole-house upgrade?",
      bath: "Bathroom remodeling is one of our most popular services! I'd love to hear more about your vision. Are you thinking of a complete renovation or updating specific fixtures? Our team can typically complete most projects in 7-10 days.",
      siding: "Siding can really transform your home's appearance and energy efficiency! We work with vinyl, fiber cement, and wood options. What style of home do you have? I can share some recent project photos that might inspire you.",
      door: "Excellent! We have extensive door options. For entry doors, we offer 20-gauge steel and fiberglass with multi-point locking systems. Our 5 storm door series include Spectrum™, Decorator™, Deluxe™, Duraguard™, and Superview™. We also specialize in sliding patio doors with LowE Argon glass. Which type interests you most? I'd love to schedule a showroom visit so you can see the quality and customization options in person.",
      price: "I understand cost is important when planning home improvements. Our pricing varies based on materials, project scope, and timing. I can arrange for one of our estimators to provide you with a detailed, no-obligation quote. When would be a good time for them to visit?",
      timeline: "Great question about timing! Most of our projects are completed within 1-2 weeks, depending on scope. We're currently booking 2-3 weeks out for new projects. Would you like me to check our calendar for available consultation dates?",
      default: "Thanks for reaching out! I'm here to help with any questions about our services. We specialize in windows, bathrooms, siding, and doors. Is there a specific project you have in mind? I can connect you with the right specialist on our team."
    };
    
    // If user introduced themselves, ask for location
    if (extractedName && (lowerMessage.includes('name is') || lowerMessage.includes("i'm") || lowerMessage.includes('i am') || lowerMessage.includes('hello') || lowerMessage.includes('hi') || message.trim().split(' ').length === 1)) {
      return `Nice to meet you ${extractedName}, where are you located?`;
    }
    
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
              <i className="bi bi-chat-dots mobile-chat-icon"></i>
              <span className="live-agent-text">Talk to Live Person</span>
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
        
        {/* Add suggested prompts below chat if enabled */}
        {showPrompts && onPromptClick && (
          <div className="chat-prompts-area">
            <SuggestedPrompts onPromptClick={onPromptClick} />
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="chat-sidebar">
        <div className="sidebar-content">
          {/* Image Slider Section */}
          <div className="sidebar-slider">
            <h3>Recent Projects</h3>
            <div className="image-slider-container">
              {slides.map((slide, index) => (
                <div key={index} className={`slider-image ${index === currentSlide ? 'active' : ''}`}>
                  <div className="image-placeholder" style={{background: slide.gradient}}>
                    <i className={slide.icon}></i>
                  </div>
                  <p>{slide.title}</p>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-btn prev" onClick={prevSlide}>
                <i className="bi bi-chevron-left"></i>
              </button>
              <div className="slider-dots">
                {slides.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
              <button className="slider-btn next" onClick={nextSlide}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          
          {/* Dynamic Content Section */}
          <div className="sidebar-content-area">
            <div className="content-header">
              <h3>{contentData[sidebarContent as keyof typeof contentData]?.title || 'Related Information'}</h3>
              {detectedKeywords.length > 0 && (
                <div className="detected-keywords">
                  <span className="keywords-label">Topics:</span>
                  {detectedKeywords.map(keyword => (
                    <span key={keyword} className={`keyword-tag ${keyword}`}>
                      {keyword === 'bath' ? 'bathroom' : keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="dynamic-content">
              {contentData[sidebarContent as keyof typeof contentData]?.sections.map((section, index) => (
                <div key={index} className="content-section">
                  <h4>{section.title}</h4>
                  <p>{section.content}</p>
                </div>
              )) || (
                <div className="content-section">
                  <h4>Chat with our AI Assistant</h4>
                  <p>Start asking about windows, bathrooms, siding, or doors to see relevant information here!</p>
                </div>
              )}
              
              {/* Call to Action based on content */}
              <div className="content-cta">
                <button className="cta-button" data-testid={`button-learn-more-${sidebarContent}`}>
                  <i className="bi bi-info-circle"></i>
                  Learn More About {contentData[sidebarContent as keyof typeof contentData]?.title || 'Our Services'}
                </button>
                <button className="cta-button secondary" data-testid="button-get-quote">
                  <i className="bi bi-calculator"></i>
                  Get Free Quote
                </button>
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
