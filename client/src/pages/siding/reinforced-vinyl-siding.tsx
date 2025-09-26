import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const ReinforcedVinylSiding: React.FC = () => {
  return (
    <WordPressContent
      slug="siding/reinforced-vinyl-siding"
      fallbackContent={<p>Content for Reinforced Vinyl Siding is coming soon.</p>}
    />
  );
};

export default ReinforcedVinylSiding;