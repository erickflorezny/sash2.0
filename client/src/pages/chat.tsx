import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import gsap from 'gsap';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';
import MegaFooter from '../components/MegaFooter';

export default function Chat() {
  const [, setLocation] = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  const [visitorName, setVisitorName] = useState<string>('');

  useEffect(() => {
    // Get visitor name from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const nameFromUrl = urlParams.get('name');
    const nameFromStorage = localStorage.getItem('visitorName');
    
    if (nameFromUrl) {
      setVisitorName(nameFromUrl);
      localStorage.setItem('visitorName', nameFromUrl);
    } else if (nameFromStorage) {
      setVisitorName(nameFromStorage);
    }
    
    // Animate page in on mount
    gsap.fromTo(pageRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, []);

  const handleBackToHome = () => {
    // Animate page out before navigation
    gsap.to(pageRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setLocation('/');
      }
    });
  };

  return (
    <div ref={pageRef} className="main-container">
      <Header />
      <div className="main-content">
        <ChatInterface visitorName={visitorName} onBackToHome={handleBackToHome} />
      </div>
      <MegaFooter />
    </div>
  );
}