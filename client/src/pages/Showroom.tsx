import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const Showroom: React.FC = () => {
  return (
    <div className="min-h-screen">
      <WordPressContent
        slug="showroom"
        fallbackContent={<p>Content for Showroom is coming soon.</p>}
      />
    </div>
  );
};

export default Showroom;