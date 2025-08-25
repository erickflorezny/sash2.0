import { useLocation } from 'wouter';
import ChatInterface from '@/components/ChatInterface';

export default function Chat() {
  const [, setLocation] = useLocation();

  const handleCloseChat = () => {
    setLocation('/');
  };

  // Get initial prompt from URL params if available
  const urlParams = new URLSearchParams(window.location.search);
  const initialPrompt = urlParams.get('prompt') || '';

  return (
    <div className="chat-page">
      <ChatInterface 
        initialPrompt={initialPrompt} 
        onClose={handleCloseChat}
      />
    </div>
  );
}