import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const PremiumShowerDoors: React.FC = () => {
  return (
    <WordPressContent
      slug="bathrooms/premium-shower-doors"
      fallbackContent={<p>Content for Premium Shower Doors is coming soon.</p>}
    />
  );
};

export default PremiumShowerDoors;