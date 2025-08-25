interface QuickConnectProps {
  onPromptClick: (prompt: string) => void;
  conversationTopic?: string;
  userSelections?: string[];
  messageCount?: number;
}

export default function QuickConnect({ 
  onPromptClick, 
  conversationTopic = 'general',
  userSelections = [],
  messageCount = 0 
}: QuickConnectProps) {
  
  // Generate context-aware prompts based on conversation
  const getContextualPrompt = (action: 'warranty' | 'financing' | 'consultation') => {
    const topic = conversationTopic === 'general' ? '' : conversationTopic;
    const topicName = topic === 'bath' ? 'bathroom' : topic;
    
    const prompts = {
      warranty: {
        general: "Tell me about your warranty coverage and protection plans",
        specific: `Tell me about your ${topicName} warranty coverage and what's included`
      },
      financing: {
        general: "What financing options and payment plans do you offer?",
        specific: `What financing options do you have for ${topicName} projects?`
      },
      consultation: {
        general: "I'd like to schedule a free consultation for my home improvement project",
        specific: `I'd like to schedule a free ${topicName} consultation and estimate`
      }
    };
    
    return topic ? prompts[action].specific : prompts[action].general;
  };

  // Get topic display name
  const getTopicDisplay = () => {
    if (conversationTopic === 'general') return '';
    const topicName = conversationTopic === 'bath' ? 'Bathroom' : conversationTopic.charAt(0).toUpperCase() + conversationTopic.slice(1);
    return topicName;
  };

  const topicDisplay = getTopicDisplay();

  return (
    <div className="quick-connect-bar" data-testid="quick-connect-bar">
      <div className="container-fluid">
        <div className="quick-connect-content">
          {/* Context Indicator */}
          {topicDisplay && (
            <div className="context-indicator">
              <i className="bi bi-chat-dots"></i>
              <span>Discussing {topicDisplay}</span>
            </div>
          )}
          
          {/* Quick Connect Actions */}
          <div className="quick-actions">
            <button 
              className="quick-action-btn warranty-btn"
              onClick={() => onPromptClick(getContextualPrompt('warranty'))}
              data-testid="quick-connect-warranty"
            >
              <div className="action-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="action-content">
                <span className="action-title">Warranty</span>
                <span className="action-subtitle">
                  {topicDisplay ? `${topicDisplay} protection` : 'Coverage info'}
                </span>
              </div>
            </button>

            <button 
              className="quick-action-btn financing-btn"
              onClick={() => onPromptClick(getContextualPrompt('financing'))}
              data-testid="quick-connect-financing"
            >
              <div className="action-icon">
                <i className="bi bi-credit-card"></i>
              </div>
              <div className="action-content">
                <span className="action-title">Financing</span>
                <span className="action-subtitle">
                  {topicDisplay ? `${topicDisplay} payments` : 'Payment options'}
                </span>
              </div>
            </button>

            <button 
              className="quick-action-btn consultation-btn"
              onClick={() => onPromptClick(getContextualPrompt('consultation'))}
              data-testid="quick-connect-consultation"
            >
              <div className="action-icon">
                <i className="bi bi-calendar-check"></i>
              </div>
              <div className="action-content">
                <span className="action-title">Free Quote</span>
                <span className="action-subtitle">
                  {topicDisplay ? `${topicDisplay} estimate` : 'Schedule visit'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}