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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi Justin! Welcome to New York Sash - we're glad to serve customers in Central New York! How can we help you today? Please select the service you're interested in:`,
      selections: [
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
      ]
    }
  ]);
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

  // Removed initialPrompt handling - Pure bubble interface

  // Initialize user as Justin
  useEffect(() => {
    if (!userName) {
      setUserName('Justin');
      
      // Try to get location and update the message if possible
      requestUserLocation().then(location => {
        if (location && location !== 'Central New York') {
          setUserLocation(location);
          setMessages(prev => prev.map((msg, index) => {
            if (index === 0 && msg.role === 'assistant') {
              return {
                ...msg,
                content: `Hi Justin! Welcome to New York Sash - we're glad to serve customers in ${location}! How can we help you today? Please select the service you're interested in:`
              };
            }
            return msg;
          }));
        }
      });
    }
  }, []);

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

  // Handle service selection
  const handleServiceSelection = (serviceId: string) => {
    // Get service data from the initial message selections
    const initialMessage = messages[0];
    const service = initialMessage.selections?.find(s => s.id === serviceId);
    if (!service) return;

    // Handle special actions first
    if (serviceId === 'back-to-services') {
      setMessages([messages[0]]); // Reset to initial message
      return;
    }
    
    // Handle quote requests
    if (serviceId.includes('-quote')) {
      const userMessage: Message = { role: 'user', content: 'I\'d like to get a free quote' };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const quoteMessage: Message = {
          role: 'assistant',
          content: 'Great! We\'d love to provide you with a free estimate. Our team will assess your needs and provide detailed pricing.',
          selections: [
            { id: 'schedule-estimate', title: 'Schedule Estimate', icon: 'bi-calendar-plus', description: 'Book your free consultation', category: 'windows' },
            { id: 'contact-info', title: 'Contact Information', icon: 'bi-person-lines-fill', description: 'Get our contact details', category: 'siding' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'bathrooms' }
          ]
        };
        setMessages(prev => [...prev, quoteMessage]);
      }, 800);
      return;
    }
    
    // Handle contact requests
    if (serviceId === 'contact-phone' || serviceId === 'contact-info') {
      const userMessage: Message = { role: 'user', content: 'How can I contact you?' };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const contactMessage: Message = {
          role: 'assistant',
          content: 'You can reach us by phone at (555) 123-4567 or email us at info@newyorksash.com. We\'re here Monday-Friday 8AM-6PM.',
          selections: [
            { id: 'schedule-estimate', title: 'Schedule Estimate', icon: 'bi-calendar-plus', description: 'Book your free consultation', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'siding' }
          ]
        };
        setMessages(prev => [...prev, contactMessage]);
      }, 800);
      return;
    }

    // Handle service information requests
    if (serviceId === 'service-warranty') {
      const userMessage: Message = { role: 'user', content: 'Tell me about warranty coverage' };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const warrantyMessage: Message = {
          role: 'assistant',
          content: 'We offer comprehensive warranty protection! Our products come with manufacturer warranties ranging from 10-50 years, plus our 2-year installation warranty. We stand behind our work completely.',
          selections: [
            { id: 'service-financing', title: 'Financing Options', icon: 'bi-credit-card', description: 'Flexible payment solutions', category: 'windows' },
            { id: 'service-quote', title: 'Get Free Quote', icon: 'bi-calculator', description: 'Schedule your free estimate', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'windows' }
          ]
        };
        setMessages(prev => [...prev, warrantyMessage]);
      }, 800);
      return;
    }

    if (serviceId === 'service-financing') {
      const userMessage: Message = { role: 'user', content: 'What financing options are available?' };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const financingMessage: Message = {
          role: 'assistant',
          content: 'We make home improvements affordable! Options include 0% interest for 12 months, low monthly payments up to 120 months, and same-day approval. No prepayment penalties.',
          selections: [
            { id: 'service-warranty', title: 'Warranty Information', icon: 'bi-shield-check', description: 'Learn about our warranty coverage', category: 'windows' },
            { id: 'service-quote', title: 'Get Free Quote', icon: 'bi-calculator', description: 'Schedule your free estimate', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'windows' }
          ]
        };
        setMessages(prev => [...prev, financingMessage]);
      }, 800);
      return;
    }

    if (serviceId === 'service-quote') {
      const userMessage: Message = { role: 'user', content: 'I\'d like to get a free quote' };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const quoteMessage: Message = {
          role: 'assistant',
          content: 'Perfect! Our specialists will provide a detailed quote at no cost. We\'ll measure, assess your needs, and provide transparent pricing with no hidden fees. When works best for you?',
          selections: [
            { id: 'schedule-estimate', title: 'Schedule Estimate', icon: 'bi-calendar-plus', description: 'Book your free consultation', category: 'windows' },
            { id: 'contact-info', title: 'Contact Information', icon: 'bi-person-lines-fill', description: 'Get our contact details', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'windows' }
          ]
        };
        setMessages(prev => [...prev, quoteMessage]);
      }, 800);
      return;
    }

    // Handle back navigation to specific product categories
    if (serviceId === 'back-to-windows') {
      const userMessage: Message = { role: 'user', content: 'Show me other window types' };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const backMessage: Message = {
          role: 'assistant',
          content: 'Here are all our window options. Each type offers unique benefits for your home.',
          selections: [
            { id: 'window-double-hung', title: 'Double-Hung Windows', icon: 'bi-window', description: 'Classic style, easy to clean', category: 'windows' },
            { id: 'window-casement', title: 'Casement Windows', icon: 'bi-window-sidebar', description: 'Side-hinged, great ventilation', category: 'windows' },
            { id: 'window-bay', title: 'Bay Windows', icon: 'bi-house-door', description: 'Adds space and natural light', category: 'windows' },
            { id: 'window-sliding', title: 'Sliding Windows', icon: 'bi-arrows-move', description: 'Space-saving, smooth operation', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'windows' }
          ]
        };
        setMessages(prev => [...prev, backMessage]);
      }, 800);
      return;
    }

    // Handle product type selections - show service information
    if (serviceId.startsWith('window-') || serviceId.startsWith('siding-') || serviceId.startsWith('bath-') || serviceId.startsWith('door-')) {
      const productTypes: Record<string, string> = {
        'window-double-hung': 'Double-Hung Windows are our most popular choice! They feature two movable sashes and tilt inward for easy cleaning.',
        'window-casement': 'Casement Windows are hinged on one side and open outward, providing excellent ventilation and unobstructed views.',
        'window-bay': 'Bay Windows extend outward from your home, creating additional interior space and flooding rooms with natural light.',
        'window-sliding': 'Sliding Windows are perfect for tight spaces and feature smooth horizontal operation with minimal maintenance.',
        'siding-vinyl': 'Vinyl Siding offers exceptional durability and low maintenance with a wide variety of colors and styles.',
        'siding-fiber-cement': 'Fiber Cement Siding provides the look of wood with superior durability and resistance to fire, insects, and rot.',
        'siding-wood': 'Wood Siding delivers timeless natural beauty with customizable stain and paint options for a unique look.',
        'siding-metal': 'Metal Siding offers unmatched durability and a sleek, modern appearance that lasts for decades.',
        'bath-full-remodel': 'Complete Bathroom Remodel transforms your entire space with new fixtures, flooring, lighting, and custom design.',
        'bath-shower-replacement': 'Shower Replacement gives you a brand new shower with modern fixtures, tile work, and efficient drainage.',
        'bath-tub-to-shower': 'Tub to Shower Conversion creates a spacious, accessible walk-in shower perfect for daily use.',
        'bath-vanity-upgrade': 'Vanity Upgrade refreshes your bathroom with new cabinetry, countertops, and modern storage solutions.',
        'door-entry': 'Entry Doors are your home\'s first impression, combining security, energy efficiency, and beautiful design.',
        'door-storm': 'Storm Doors provide an extra layer of protection while allowing natural light and ventilation when desired.',
        'door-patio': 'Patio Doors connect indoor and outdoor living with smooth operation and excellent energy efficiency.',
        'door-interior': 'Interior Doors enhance your home\'s style and functionality with quality craftsmanship and modern designs.'
      };
      
      const userMessage: Message = { role: 'user', content: `Tell me about ${service.title}` };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const productMessage: Message = {
          role: 'assistant',
          content: productTypes[serviceId] || 'Great choice! Let me tell you about this product.',
          selections: [
            { id: 'service-warranty', title: 'Warranty Information', icon: 'bi-shield-check', description: 'Learn about our warranty coverage', category: 'windows' },
            { id: 'service-financing', title: 'Financing Options', icon: 'bi-credit-card', description: 'Flexible payment solutions', category: 'windows' },
            { id: 'service-quote', title: 'Get Free Quote', icon: 'bi-calculator', description: 'Schedule your free estimate', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'windows' }
          ]
        };
        setMessages(prev => [...prev, productMessage]);
      }, 800);
      return;
    }

    // Add user message for the selection
    const userMessage: Message = { 
      role: 'user', 
      content: `I'm interested in ${service.title.toLowerCase()}` 
    };
    setMessages(prev => [...prev, userMessage]);

    // Generate appropriate response with selection bubbles
    setTimeout(() => {
      let response = '';
      let nextSelections: ServiceSelection[] = [];
      
      switch (serviceId) {
        case 'windows':
          response = 'Perfect choice! We offer premium windows to improve your home\'s energy efficiency and appearance. What type of windows are you interested in?';
          nextSelections = [
            { id: 'window-double-hung', title: 'Double-Hung Windows', icon: 'bi-window', description: 'Classic style, easy to clean', category: 'windows' },
            { id: 'window-casement', title: 'Casement Windows', icon: 'bi-window-sidebar', description: 'Side-hinged, great ventilation', category: 'windows' },
            { id: 'window-bay', title: 'Bay Windows', icon: 'bi-house-door', description: 'Adds space and natural light', category: 'windows' },
            { id: 'window-sliding', title: 'Sliding Windows', icon: 'bi-arrows-move', description: 'Space-saving, smooth operation', category: 'windows' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'windows' }
          ];
          break;
        case 'siding':
          response = 'Excellent! Our siding solutions protect and beautify your home while improving energy efficiency. Which siding material interests you most?';
          nextSelections = [
            { id: 'siding-vinyl', title: 'Vinyl Siding', icon: 'bi-house', description: 'Low maintenance, affordable', category: 'siding' },
            { id: 'siding-fiber-cement', title: 'Fiber Cement', icon: 'bi-bricks', description: 'Durable, fire-resistant', category: 'siding' },
            { id: 'siding-wood', title: 'Wood Siding', icon: 'bi-tree', description: 'Natural beauty, timeless appeal', category: 'siding' },
            { id: 'siding-metal', title: 'Metal Siding', icon: 'bi-shield', description: 'Ultra-durable, modern look', category: 'siding' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'siding' }
          ];
          break;
        case 'bathrooms':
          response = 'Great choice! We transform bathrooms into beautiful, functional spaces. What type of bathroom renovation are you considering?';
          nextSelections = [
            { id: 'bath-full-remodel', title: 'Complete Remodel', icon: 'bi-house-gear', description: 'Full bathroom transformation', category: 'bathrooms' },
            { id: 'bath-shower-replacement', title: 'Shower Replacement', icon: 'bi-droplet', description: 'New shower installation', category: 'bathrooms' },
            { id: 'bath-tub-to-shower', title: 'Tub to Shower', icon: 'bi-arrows-angle-expand', description: 'Convert tub to walk-in shower', category: 'bathrooms' },
            { id: 'bath-vanity-upgrade', title: 'Vanity Upgrade', icon: 'bi-cabinet', description: 'New vanity and countertop', category: 'bathrooms' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'bathrooms' }
          ];
          break;
        case 'doors':
          response = 'Perfect! New doors enhance security, energy efficiency, and curb appeal. What type of door are you looking for?';
          nextSelections = [
            { id: 'door-entry', title: 'Entry Doors', icon: 'bi-door-closed', description: 'Front door replacement options', category: 'doors' },
            { id: 'door-storm', title: 'Storm Doors', icon: 'bi-shield', description: 'Extra protection and ventilation', category: 'doors' },
            { id: 'door-patio', title: 'Patio Doors', icon: 'bi-door-open', description: 'Sliding and French patio doors', category: 'doors' },
            { id: 'door-interior', title: 'Interior Doors', icon: 'bi-house-door', description: 'Indoor door replacement', category: 'doors' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'doors' }
          ];
          break;
        default:
          response = mockResponses.default;
          nextSelections = [
            { id: 'contact-phone', title: 'Call Us', icon: 'bi-telephone', description: 'Speak with specialist', category: 'windows' },
            { id: 'contact-info', title: 'Email Us', icon: 'bi-envelope', description: 'Send us a message', category: 'siding' },
            { id: 'back-to-services', title: 'Back to Services', icon: 'bi-arrow-left', description: 'Choose different service', category: 'bathrooms' }
          ];
      }
      
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response,
        selections: nextSelections.length > 0 ? nextSelections : undefined
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 800);
  };

  const generateResponse = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase();
    
    // Skip name extraction logic since we auto-initialize with Justin's greeting
    
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

  // Removed sendMessage and handleKeyPress - Pure bubble interface

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
        
        {/* Text input removed - Pure bubble selection interface */}
        
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
