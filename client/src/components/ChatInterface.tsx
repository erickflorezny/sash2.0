import { useState, useEffect, useRef } from 'react';
import chatLogo from '@assets/image_1756148189859.png';
import SuggestedPrompts from './SuggestedPrompts';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  selections?: ServiceSelection[];
}

interface ServiceSelection {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: 'windows' | 'siding' | 'bathrooms' | 'doors';
}

interface ChatInterfaceProps {
  initialPrompt: string;
  onClose: () => void;
  showPrompts?: boolean;
  onPromptClick?: (prompt: string) => void;
}

// Comprehensive door knowledge base for contextual responses
const doorKnowledgeBase = {
  entry: {
    materials: "20-gauge steel (49% stronger than standard) and fiberglass with superior insulation",
    security: "Multi-point locking systems, kick-in-proof security plates, solid oak laminated construction",
    customization: "Wood and paint finishes, decorative glass, hardware in oil-rubbed bronze, satin nickel, bright brass",
    benefits: "Enhanced curb appeal, increased home value, improved energy efficiency and security"
  },
  storm: {
    series: ["Spectrum™ (retractable screens)", "Decorator™ (stylish designs)", "Deluxe™ (full/top screens)", "Duraguard™ (child/pet safe)", "Superview™ (style & value)"],
    materials: "Custom-sized aluminum construction",
    features: "Multiple colors, Inspirations™ Art Glass options, flexible ventilation",
    benefits: "Extra protection, enhanced curb appeal, improved ventilation and natural light"
  },
  patio: {
    construction: "Durable vinyl with 0.090\" wall thickness, fully welded panels and frames",
    operation: "Dual tandem rollers, smooth-gliding, fully interlocking panels",
    efficiency: "1\" LowE Argon-filled glass, vinyl thermal breaks, standard 4 9/16\" jamb depth",
    customization: "Woodgrain interiors, various exterior colors, optional stainless steel hardware"
  },
  general: {
    warranty: "All doors come with comprehensive warranties",
    energyStar: "Energy Star rated for efficiency",
    installation: "Professional installation by certified technicians",
    financing: "Flexible financing options available"
  }
};

const mockResponses = {
  window: "I'd be happy to help with window installations! We offer vinyl, wood, and composite windows with energy-efficient features. Our team can provide a free estimate. What type of windows are you interested in?",
  bath: "Our bathroom remodeling services include complete renovations, tile work, fixtures, and plumbing. The typical timeline is 5-10 days depending on scope. Would you like to discuss your specific bathroom needs?",
  siding: "We install vinyl, fiber cement, and wood siding that's built to last. Our materials come with warranties and are designed to withstand harsh weather. What style of home do you have?",
  door: "Ready to transform your home with beautiful, secure, and energy-efficient doors? We offer premium fiberglass and steel entry doors, custom storm doors, and smooth-gliding patio doors. All are Energy Star rated with endless customization options and come with warranties. What type of door transformation are you considering?",
  default: "Thank you for your question! Our team specializes in windows, bathrooms, siding, and doors. We provide free estimates and have over 15 years of experience. How can we help transform your home?"
};

export default function ChatInterface({ initialPrompt, onClose, showPrompts = false, onPromptClick }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
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
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  
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
      title: "Energy-Efficient Doors from New York Sash",
      sections: [
        {
          title: "Secure & Stylish Entry Doors",
          content: "Time for a new front door? Choose from premium fiberglass and steel entry doors with endless customization options. Select finishes, glass options, and hardware to match your unique style. All doors are Energy Star rated with advanced security features and come with a warranty for peace of mind."
        },
        {
          title: "Custom Storm Doors for Curb Appeal",
          content: "Need extra protection? Our storm doors are custom-made for both function and curb appeal. Choose from various styles, finishes, and glass options that complement your home's architecture and reflect your personal taste while providing additional security."
        },
        {
          title: "Smooth-Gliding & Energy-Efficient Patio Doors", 
          content: "Want easy access to the outdoors? Customize your patio doors to perfectly match your home with superior energy efficiency. Features LowE Argon-filled glass for year-round comfort and smooth-gliding operation for seamless indoor-outdoor living."
        },
        {
          title: "Why Choose New York Sash Doors?",
          content: "Imagine lower energy bills, increased comfort, and a boost to your home's value. Our expert design team provides personalized guidance to help you explore our extensive collections. Plus, flexible financing options make upgrading easier than ever!"
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

  // Auto-initialize with personalized greeting for Justin
  useEffect(() => {
    if (messages.length === 0 && !initialPrompt && !userName) {
      const initializeChat = async () => {
        setUserName('Justin');
        
        // Request location
        const location = await requestUserLocation();
        setUserLocation(location);
        
        // Add the personalized welcome message with service selections
        const welcomeMessage: Message = {
          role: 'assistant',
          content: `Hi Justin! Welcome to New York Sash - we're glad to serve customers in ${location}! How can we help you today? Please select the service you're interested in:`,
          selections: serviceSelections
        };
        setMessages([welcomeMessage]);
      };
      
      initializeChat();
    }
  }, [messages.length, initialPrompt, userName]);

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

  // Geolocation functions
  const requestUserLocation = async (): Promise<string | null> => {
    if (!navigator.geolocation) {
      return 'Location not supported';
    }

    return new Promise((resolve) => {
      setIsDetectingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const locationName = await reverseGeocode(latitude, longitude);
            setIsDetectingLocation(false);
            resolve(locationName);
          } catch (error) {
            setIsDetectingLocation(false);
            resolve('Central New York');
          }
        },
        (error) => {
          setIsDetectingLocation(false);
          console.log('Location access denied or failed:', error);
          resolve('your area');
        },
        { timeout: 10000 }
      );
    });
  };

  const reverseGeocode = async (lat: number, lon: number): Promise<string> => {
    try {
      // Using a free geocoding service (OpenStreetMap Nominatim)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`
      );
      const data = await response.json();
      
      if (data && data.address) {
        const city = data.address.city || data.address.town || data.address.village;
        const state = data.address.state;
        if (city && state) {
          return `${city}, ${state}`;
        } else if (city) {
          return city;
        } else if (state) {
          return state;
        }
      }
      return 'Central New York';
    } catch (error) {
      console.log('Reverse geocoding failed:', error);
      return 'Central New York';
    }
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

  // Service selections data
  const serviceSelections: ServiceSelection[] = [
    {
      id: 'windows',
      title: 'Windows',
      icon: 'bi-window',
      description: 'Energy-efficient window installation & replacement',
      category: 'windows'
    },
    {
      id: 'siding',
      title: 'Siding',
      icon: 'bi-house',
      description: 'Durable siding installation & repair',
      category: 'siding'
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms',
      icon: 'bi-droplet',
      description: 'Complete bathroom renovation & remodeling',
      category: 'bathrooms'
    },
    {
      id: 'doors',
      title: 'Doors',
      icon: 'bi-door-open',
      description: 'Entry, patio & storm door installation',
      category: 'doors'
    }
  ];

  // Handle service selection
  const handleServiceSelection = (serviceId: string) => {
    const service = serviceSelections.find(s => s.id === serviceId);
    if (!service) return;

    // Add user message for the selection
    const userMessage: Message = { 
      role: 'user', 
      content: `I'm interested in ${service.title.toLowerCase()}` 
    };
    setMessages(prev => [...prev, userMessage]);

    // Generate appropriate response based on service
    setTimeout(() => {
      let response = '';
      switch (serviceId) {
        case 'windows':
          response = mockResponses.window;
          break;
        case 'siding':
          response = mockResponses.siding;
          break;
        case 'bathrooms':
          response = mockResponses.bath;
          break;
        case 'doors':
          response = mockResponses.door;
          break;
        default:
          response = mockResponses.default;
      }
      
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    }, 800);
  };

  const generateResponse = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase();
    const extractedName = extractName(message);
    
    // If user introduced themselves, get location and provide personalized greeting
    if (extractedName && !userName && (lowerMessage.includes('name is') || lowerMessage.includes("i'm") || lowerMessage.includes('i am') || lowerMessage.includes('hello') || lowerMessage.includes('hi') || message.trim().split(' ').length === 1)) {
      setUserName(extractedName);
      
      // Request location
      const location = await requestUserLocation();
      setUserLocation(location);
      
      // Create welcome message with selections
      setTimeout(() => {
        const welcomeMessage: Message = {
          role: 'assistant',
          content: `Hi ${extractedName}! Welcome to New York Sash${location ? ` - we're glad to serve customers in ${location}` : ''}! How can we help you today? Please select the service you're interested in:`,
          selections: serviceSelections
        };
        setMessages(prev => [...prev, welcomeMessage]);
      }, isDetectingLocation ? 2000 : 500);
      
      return isDetectingLocation ? 
        `Nice to meet you ${extractedName}! Let me get your location to better serve you...` :
        `Nice to meet you ${extractedName}! Let me show you our services...`;
    }
    
    // Enhanced door response logic using knowledge base
    if (lowerMessage.includes('door')) {
      // Specific door type questions
      if (lowerMessage.includes('entry') || lowerMessage.includes('front')) {
        return `Great choice! Our entry doors feature ${doorKnowledgeBase.entry.materials}. They offer ${doorKnowledgeBase.entry.security} for maximum security. You can customize with ${doorKnowledgeBase.entry.customization}. Would you like to know more about our security features or customization options?`;
      } else if (lowerMessage.includes('storm')) {
        return `Perfect for extra protection! We offer 5 storm door series: ${doorKnowledgeBase.storm.series.join(', ')}. All feature ${doorKnowledgeBase.storm.materials} with ${doorKnowledgeBase.storm.features}. Which series sounds most interesting to you?`;
      } else if (lowerMessage.includes('patio') || lowerMessage.includes('sliding')) {
        return `Excellent for indoor-outdoor living! Our patio doors feature ${doorKnowledgeBase.patio.construction} with ${doorKnowledgeBase.patio.operation}. They include ${doorKnowledgeBase.patio.efficiency} for superior energy efficiency. Interested in customization options?`;
      } else if (lowerMessage.includes('security') || lowerMessage.includes('safe')) {
        return `Security is our priority! Our doors feature ${doorKnowledgeBase.entry.security}. All materials are ${doorKnowledgeBase.entry.materials} for maximum strength. Plus, ${doorKnowledgeBase.general.installation} ensures proper security setup.`;
      } else if (lowerMessage.includes('energy') || lowerMessage.includes('efficient')) {
        return `Great question about efficiency! All our doors are ${doorKnowledgeBase.general.energyStar}. Our patio doors feature ${doorKnowledgeBase.patio.efficiency}, while entry doors use ${doorKnowledgeBase.entry.materials}. This can significantly lower your energy bills!`;
      } else {
        return mockResponses.door;
      }
    } else if (lowerMessage.includes('window')) {
      return mockResponses.window;
    } else if (lowerMessage.includes('bath') || lowerMessage.includes('bathroom')) {
      return mockResponses.bath;
    } else if (lowerMessage.includes('siding')) {
      return mockResponses.siding;
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
    
    // Generate AI response with async support
    setTimeout(async () => {
      try {
        const response = await generateResponse(message);
        setIsTyping(false);
        const assistantMessage: Message = { role: 'assistant', content: response };
        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        setIsTyping(false);
        const assistantMessage: Message = { role: 'assistant', content: mockResponses.default };
        setMessages(prev => [...prev, assistantMessage]);
      }
    }, 800);
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
      door: "Fantastic! Ready to transform your home? We specialize in beautiful, secure, and energy-efficient doors that can lower your energy bills and boost your home's value. Whether you need a stylish entry door, custom storm door for extra protection, or smooth-gliding patio doors, we have endless customization options. All our doors are Energy Star rated with warranties. Our design team provides personalized guidance to help you find your perfect match. Would you like to explore entry, storm, or patio doors?",
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
              {/* Service Selection Bubbles */}
              {message.selections && (
                <div className="service-selections" data-testid="service-selections">
                  {message.selections.map((selection) => (
                    <div 
                      key={selection.id}
                      className="service-selection-bubble"
                      onClick={() => handleServiceSelection(selection.id)}
                      data-testid={`selection-${selection.id}`}
                    >
                      <div className="selection-icon">
                        <i className={`bi ${selection.icon}`}></i>
                      </div>
                      <div className="selection-content">
                        <h4>{selection.title}</h4>
                        <p>{selection.description}</p>
                      </div>
                      <div className="selection-arrow">
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
