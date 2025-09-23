import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before image',
  afterAlt = 'After image',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = e.clientX - containerRect.left;
    const percentage = (mouseX / containerWidth) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const touchX = e.touches[0].clientX - containerRect.left;
    const percentage = (touchX / containerWidth) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  useEffect(() => {
    // Cleanup event listeners when component unmounts
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-lg shadow-lg w-full ${className}`}
      style={{ paddingBottom: '80%' }} // 5:4 aspect ratio (4/5 = 0.8 = 80%)
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="absolute inset-0 z-10">
        <img 
          src={afterImage} 
          alt={afterAlt} 
          className="absolute w-full h-full object-cover" 
        />
      </div>
      <div 
        className="absolute inset-0 z-20 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt={beforeAlt} 
          className="absolute w-full h-full object-cover" 
        />
      </div>

      {/* Slider control */}
      <div 
        className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full shadow-md flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-1 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-40 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
        Before
      </div>
      <div className="absolute bottom-4 right-4 z-40 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;