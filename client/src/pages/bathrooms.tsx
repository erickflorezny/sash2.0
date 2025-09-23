import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const Bathrooms: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="bathrooms"
          fallbackContent={
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Bathroom Renovations</h1>
              <p className="text-lg text-gray-700 mb-4">
                Transform your bathroom into a luxurious retreat with our comprehensive renovation services. From concept
                to completion, we handle every aspect of your bathroom remodel with expert craftsmanship and attention to detail.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Services Include</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Complete bathroom remodels</li>
                    <li>• Tile installation and design</li>
                    <li>• Plumbing and electrical work</li>
                    <li>• Custom vanities and cabinets</li>
                    <li>• Shower and tub installations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Finishing Touches</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Premium lighting fixtures</li>
                    <li>• High-end faucets and hardware</li>
                    <li>• Custom mirrors and shelving</li>
                    <li>• Heated floors and towel bars</li>
                    <li>• Ventilation systems</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                We work closely with you to bring your vision to life while staying within your budget and timeline.
                Every project includes our quality guarantee and professional cleanup.
              </p>
            </div>
          }
        />
    </div>
  );
};

export default Bathrooms;