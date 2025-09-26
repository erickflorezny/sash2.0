import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const SliderWindows: React.FC = () => {
  return (
    <WordPressContent
      slug="windows/slider-windows"
      fallbackContent={<p>Content for Slider Windows is coming soon.</p>}
    />
  );
};

export default SliderWindows;