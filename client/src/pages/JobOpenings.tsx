import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const JobOpenings: React.FC = () => {
  return (
    <div className="min-h-screen">
      <WordPressContent
        slug="job-openings"
        fallbackContent={<p>Content for Job Openings is coming soon.</p>}
      />
    </div>
  );
};

export default JobOpenings;