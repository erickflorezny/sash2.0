import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const EngineeredWoodSiding: React.FC = () => {
  return (
    <WordPressContent
      slug="siding/engineered-wood-siding"
      fallbackContent={<p>Content for Engineered Wood Siding is coming soon.</p>}
    />
  );
};

export default EngineeredWoodSiding;