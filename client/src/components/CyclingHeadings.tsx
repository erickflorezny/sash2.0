import { useState, useEffect } from 'react';

interface CyclingHeadingsProps {
  onClick: (prompt: string) => void;
}

const headings = [
  'Ask About Our Window Installations',
  'Inquire About Bath Remodeling',
  'Explore Our Siding Options',
  'Discover Door Replacement Services'
];

export default function CyclingHeadings({ onClick }: CyclingHeadingsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isActive]);

  const handleClick = () => {
    const currentHeading = headings[currentIndex];
    setIsActive(false);
    onClick(currentHeading);
  };

  return (
    <div 
      className="cycling-heading" 
      onClick={handleClick}
      data-testid="cycling-heading"
    >
      <h1 className="display-4 fw-bold text-center">
        {headings[currentIndex]}
      </h1>
    </div>
  );
}
