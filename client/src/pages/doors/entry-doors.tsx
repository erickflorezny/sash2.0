import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const EntryDoors: React.FC = () => {
  return (
    <WordPressContent
      slug="doors/entry-doors"
      fallbackContent={<p>Content for Entry Doors is coming soon.</p>}
    />
  );
};

export default EntryDoors;