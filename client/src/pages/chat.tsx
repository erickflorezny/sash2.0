import { useLocation } from 'wouter';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ChatInterface from '@/components/ChatInterface';

export default function Chat() {
  const [, setLocation] = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate page in from bottom with GSAP
    gsap.fromTo(pageRef.current, 
      { y: "100vh", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, []);

  const handleCloseChat = () => {
    // Animate page out before navigation
    gsap.to(pageRef.current, {
      y: "100vh",
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setLocation('/');
      }
    });
  };

  // Get initial prompt from URL params if available
  const urlParams = new URLSearchParams(window.location.search);
  const initialPrompt = urlParams.get('prompt') || '';

  return (
    <div ref={pageRef} className="chat-page">
      <ChatInterface 
        initialPrompt={initialPrompt} 
        onClose={handleCloseChat}
      />
    </div>
  );
}