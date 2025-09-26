import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const MeetOurTeam: React.FC = () => {
  return (
    <div className="min-h-screen">
      <WordPressContent
        slug="meet-our-team"
        fallbackContent={<p>Content for Meet Our Team is coming soon.</p>}
      />
    </div>
  );
};

export default MeetOurTeam;