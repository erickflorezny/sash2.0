import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const Windows: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="windows"
          fallbackContent={
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Transform your home with our premium window solutions. We offer a wide range of energy-efficient windows
                designed to enhance both the beauty and functionality of your home.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy-Efficient Options</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Double and triple-pane glass</li>
                    <li>• Low-E coatings for better insulation</li>
                    <li>• Argon gas filled for superior thermal performance</li>
                    <li>• Custom sizes and configurations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Styles Available</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Casement windows</li>
                    <li>• Double-hung windows</li>
                    <li>• Sliding windows</li>
                    <li>• Bay and bow windows</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                All our windows come with comprehensive warranties and professional installation by our certified technicians.
                Contact us today for a free consultation and quote.
              </p>
            </div>
          }
        />
    </div>
  );
};

export default Windows;