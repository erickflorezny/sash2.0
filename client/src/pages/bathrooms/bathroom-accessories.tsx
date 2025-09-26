import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const BathroomAccessories: React.FC = () => {
  return (
    <WordPressContent
      slug="bathrooms/bathroom-accessories"
      fallbackContent={<p>Content for Bathroom Accessories is coming soon.</p>}
    />
  );
};

export default BathroomAccessories;