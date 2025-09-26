import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const PatioDoors: React.FC = () => {
  return (
    <WordPressContent
      slug="doors/patio-doors"
      fallbackContent={<p>Content for Patio Doors is coming soon.</p>}
    />
  );
};

export default PatioDoors;