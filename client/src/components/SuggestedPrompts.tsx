interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
  conversationTopic?: string;
  userSelections?: string[];
  messageCount?: number;
}

// Featured upsell data based on conversation topics
const featuredContent = {
  windows: {
    title: "Premium Window Solutions",
    summary: "Energy-efficient windows with lifetime warranties",
    highlights: [
      "25% energy savings guarantee",
      "Lifetime warranty included", 
      "Professional installation",
      "0% financing available"
    ],
    upsells: [
      { 
        icon: "bi-shield-check", 
        title: "Extended Warranty", 
        description: "Lifetime protection on all components",
        cta: "Learn About Warranty",
        action: "Tell me about your window warranty coverage"
      },
      {
        icon: "bi-credit-card",
        title: "Flexible Financing",
        description: "0% APR for qualified customers",
        cta: "Check Financing",
        action: "What financing options do you offer for windows?"
      },
      {
        icon: "bi-calculator",
        title: "Free Estimate",
        description: "No-obligation in-home consultation",
        cta: "Get Free Quote",
        action: "I'd like to schedule a free window estimate"
      }
    ]
  },
  bathrooms: {
    title: "Complete Bathroom Transformation", 
    summary: "Full-service remodeling with designer finishes",
    highlights: [
      "5-day installation timeline",
      "Designer tile & fixtures",
      "Licensed plumbers & contractors",
      "Payment plans available"
    ],
    upsells: [
      {
        icon: "bi-tools",
        title: "Professional Installation",
        description: "Licensed contractors & lifetime craftsmanship warranty", 
        cta: "View Warranty",
        action: "Tell me about your bathroom remodeling warranty"
      },
      {
        icon: "bi-percent",
        title: "Special Financing",
        description: "12 months same as cash available",
        cta: "Apply Now",
        action: "What are the financing options for bathroom remodeling?"
      },
      {
        icon: "bi-house-check",
        title: "Free Consultation",
        description: "Design consultation & project estimate",
        cta: "Schedule Visit",
        action: "I want to schedule a free bathroom remodeling consultation"
      }
    ]
  },
  siding: {
    title: "Durable Exterior Siding",
    summary: "Weather-resistant siding with 50-year warranties",
    highlights: [
      "50-year material warranty",
      "Storm & hail damage protection",
      "Energy-efficient insulation",
      "Low-maintenance materials"
    ],
    upsells: [
      {
        icon: "bi-umbrella",
        title: "Weather Protection",
        description: "50-year warranty against storm damage",
        cta: "Protection Details", 
        action: "Tell me about siding warranty and storm protection"
      },
      {
        icon: "bi-cash-stack",
        title: "Easy Payments",
        description: "Monthly payment plans starting at $99",
        cta: "Payment Options",
        action: "What payment plans do you offer for siding?"
      },
      {
        icon: "bi-rulers",
        title: "Free Inspection",
        description: "Complete exterior assessment & quote",
        cta: "Book Inspection",
        action: "I'd like a free siding inspection and estimate"
      }
    ]
  },
  doors: {
    title: "Secure Entry & Patio Doors",
    summary: "Energy Star rated doors with security features", 
    highlights: [
      "Energy Star certification",
      "Multi-point locking systems",
      "Custom sizes & finishes",
      "Professional installation"
    ],
    upsells: [
      {
        icon: "bi-lock",
        title: "Security Features",
        description: "Multi-point locks & reinforced frames with warranty",
        cta: "Security Info",
        action: "Tell me about door security features and warranty"
      },
      {
        icon: "bi-calendar-check",
        title: "Financing Plans", 
        description: "Flexible payment options available",
        cta: "View Plans",
        action: "What financing is available for door installation?"
      },
      {
        icon: "bi-clipboard-check",
        title: "Free Quote",
        description: "Professional measurement & installation quote",
        cta: "Get Quote",
        action: "I need a free quote for door installation"
      }
    ]
  },
  general: {
    title: "Featured Home Solutions",
    summary: "Professional remodeling with guaranteed results",
    highlights: [
      "15+ years experience",
      "Licensed & insured",
      "Lifetime warranties available",
      "Flexible financing options"
    ],
    upsells: [
      {
        icon: "bi-award",
        title: "Warranty Protection",
        description: "Comprehensive warranties on all services",
        cta: "Learn More",
        action: "Tell me about your warranty coverage"
      },
      {
        icon: "bi-piggy-bank",
        title: "Flexible Financing",
        description: "Multiple payment options available",
        cta: "Check Options", 
        action: "What financing options do you offer?"
      },
      {
        icon: "bi-telephone",
        title: "Free Consultation",
        description: "No-obligation estimate & consultation",
        cta: "Schedule Now",
        action: "I'd like to schedule a free consultation"
      }
    ]
  }
};

export default function SuggestedPrompts({ 
  onPromptClick, 
  conversationTopic = 'general',
  userSelections = [],
  messageCount = 0 
}: SuggestedPromptsProps) {
  const content = featuredContent[conversationTopic as keyof typeof featuredContent] || featuredContent.general;
  
  // Generate conversation summary
  const getConversationSummary = () => {
    if (messageCount === 0) {
      return "Say Explore our home improvement services";
    } else if (userSelections.length > 0) {
      return `Discussing ${userSelections.join(', ')} solutions • ${messageCount} messages`;
    } else {
      return `${messageCount} messages exchanged • Ready to help with your project`;
    }
  };

  return (
    <section className="mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          {/* Modern Dashboard Header */}
          <div className="modern-dashboard-header mb-4">
            <div className="dashboard-content">
              <div className="dashboard-main">
                <div className="dashboard-icon">
                  <i className="bi bi-house-gear"></i>
                </div>
                <div className="dashboard-text">
                  <h2 className="dashboard-title">{content.title}</h2>
                  <p className="dashboard-subtitle">{content.summary}</p>
                </div>
              </div>
              <div className="dashboard-action">
                <div className="status-label">Ready to Start</div>
                {messageCount === 0 ? (
                  <button 
                    className="dashboard-cta-button"
                    onClick={() => onPromptClick("Explore our home improvement services")}
                    data-testid="button-explore-services"
                  >
                    <span className="dashboard-button-text">Get Started Now</span>
                    <div className="dashboard-button-icon">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </button>
                ) : (
                  <div className="conversation-status">{getConversationSummary()}</div>
                )}
              </div>
            </div>
          </div>

          {/* Featured Highlights */}
          <div className="featured-highlights mb-4">
            <div className="row g-2">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="col-md-3 col-6">
                  <div className="highlight-badge">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="small">{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Upsell CTAs */}
          <div className="row g-4">
            {content.upsells.map((upsell, index) => (
              <div key={index} className="col-md-4">
                <div 
                  className="modern-cta-card" 
                  onClick={() => onPromptClick(upsell.action)}
                  data-testid={`upsell-${conversationTopic}-${index}`}
                >
                  <div className="cta-card-inner">
                    <div className="cta-icon-wrapper">
                      <div className="cta-icon-bg">
                        <i className={`bi ${upsell.icon} cta-icon`}></i>
                      </div>
                    </div>
                    
                    <div className="cta-content">
                      <h3 className="cta-title">{upsell.title}</h3>
                      <p className="cta-description">{upsell.description}</p>
                      
                      <button className="cta-button">
                        <span className="cta-button-text">{upsell.cta}</span>
                        <div className="cta-button-icon">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </button>
                    </div>
                    
                    <div className="cta-decoration"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}