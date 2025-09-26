import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const HopperCasementWindows: React.FC = () => {
  return (
    <WordPressContent
      slug="windows/hopper-casement"
      fallbackContent={<p>Content for Hopper Windows is coming soon.</p>}
    />
  );
};

export default HopperCasementWindows;