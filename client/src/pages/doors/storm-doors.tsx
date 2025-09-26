import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const StormDoors: React.FC = () => {
  return (
    <WordPressContent
      slug="doors/storm-doors"
      fallbackContent={<p>Content for Storm Doors is coming soon.</p>}
    />
  );
};

export default StormDoors;