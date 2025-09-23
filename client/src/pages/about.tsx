import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="about"
          fallbackContent={
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About New York Sash</h1>
              <p className="text-lg text-gray-700 mb-4">
                New York Sash is your premier destination for high-quality windows, doors, and home improvement solutions.
                With decades of experience serving homeowners and businesses throughout New York, we pride ourselves on
                delivering exceptional craftsmanship and personalized service.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team of skilled professionals specializes in energy-efficient windows, custom doors, siding solutions,
                and bathroom renovations. We work with premium materials and cutting-edge technology to ensure every
                project meets the highest standards of quality and durability.
              </p>
              <p className="text-lg text-gray-700">
                When you choose New York Sash, you're choosing a partner who understands that your home is more than
                just a building—it's where memories are made. Let us help you create the home you've always dreamed of.
              </p>
            </div>
          }
        />
    </div>
  );
};

export default About;