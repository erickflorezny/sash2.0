import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const BayBowPictureWindows: React.FC = () => {
  return (
    <WordPressContent
      slug="windows/bay-bow-picture-windows"
      fallbackContent={<p>Content for Bay, Bow, and Picture Windows is coming soon.</p>}
    />
  );
};

export default BayBowPictureWindows;