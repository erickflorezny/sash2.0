import React from 'react';
import ShareButton from './ShareButton';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
  showShareButton?: boolean;
  shareTitle?: string;
  shareDescription?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
  children,
  showShareButton = false,
  shareTitle,
  shareDescription
}) => {
  // Mock hero images based on common page types
  const getMockHeroImage = (pageTitle: string) => {
    const title = pageTitle.toLowerCase();

    if (title.includes('window')) {
      return 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80';
    } else if (title.includes('door')) {
      return 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    } else if (title.includes('bathroom')) {
      return 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    } else if (title.includes('siding')) {
      return 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    } else if (title.includes('about')) {
      return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    } else if (title.includes('contact')) {
      return 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    }

    // Default hero image
    return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  };

  const heroImage = backgroundImage || getMockHeroImage(title);

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {showShareButton && (
            <div className="mb-8">
              <ShareButton
                title={shareTitle || title}
                description={shareDescription || `Learn more about ${title.toLowerCase()}`}
                variant="secondary"
                size="lg"
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;