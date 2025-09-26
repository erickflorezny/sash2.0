import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const SafetyTubs: React.FC = () => {
  return (
    <WordPressContent
      slug="bathrooms/safety-tubs"
      fallbackContent={<p>Content for Safety Tubs is coming soon.</p>}
    />
  );
};

export default SafetyTubs;