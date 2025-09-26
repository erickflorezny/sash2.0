import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const DoubleHungWindows: React.FC = () => {
  return (
    <WordPressContent
      slug="windows/double-hung"
      fallbackContent={<p>Content for Double Hung Windows is coming soon.</p>}
    />
  );
};

export default DoubleHungWindows;