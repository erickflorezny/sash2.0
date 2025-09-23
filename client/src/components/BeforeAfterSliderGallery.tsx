import React, { useState, useEffect } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

// Define the types for our before/after image pairs
interface BeforeAfterPair {
  id: string;
  title: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  category?: string;
}

interface BeforeAfterSliderGalleryProps {
  imagePairs: BeforeAfterPair[];
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  interval?: number;
}

const BeforeAfterSliderGallery: React.FC<BeforeAfterSliderGalleryProps> = ({
  imagePairs,
  className = '',
  style,
  autoPlay = false,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imagePairs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagePairs.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    
    if (isPlaying && imagePairs.length > 1) {
      intervalId = setInterval(goToNext, interval);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, interval, imagePairs.length]);

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Ensure we have valid imagePairs
  if (!imagePairs || imagePairs.length === 0) {
    return (
      <div className="p-6 bg-gray-100 rounded-lg text-center">
        <p className="text-gray-500">No before/after images available</p>
      </div>
    );
  }

  const currentPair = imagePairs[currentIndex];

  return (
    <div className={`before-after-slider-gallery ${className}`} style={style}>
      {/* Main Slider */}
      <div className="relative mb-4">
        <BeforeAfterSlider
          beforeImage={currentPair.beforeImage}
          afterImage={currentPair.afterImage}
          beforeAlt={currentPair.beforeAlt || `Before: ${currentPair.title}`}
          afterAlt={currentPair.afterAlt || `After: ${currentPair.title}`}
          className="w-full"
        />
        
        {/* Title and Description */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900">{currentPair.title}</h3>
          {currentPair.description && (
            <p className="text-gray-600 mt-2">{currentPair.description}</p>
          )}
        </div>

        {/* Navigation Arrows */}
        {imagePairs.length > 1 && (
          <>
            <button 
              onClick={goToPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {imagePairs.length > 1 && (
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 max-w-full">
            {imagePairs.map((pair, index) => (
              <button
                key={pair.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex ? 'border-red-600 scale-110' : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img 
                  src={pair.beforeImage} 
                  alt={`Thumbnail for ${pair.title}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Auto Play Control */}
          <button
            onClick={toggleAutoPlay}
            className={`ml-4 p-2 rounded-full transition-colors ${
              isPlaying ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      )}
      
      {/* Progress Indicator */}
      {imagePairs.length > 1 && (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-red-600 h-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentIndex + 1) / imagePairs.length) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSliderGallery;