import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const Doors: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="doors"
          fallbackContent={
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Premium Doors & Entryways</h1>
              <p className="text-lg text-gray-700 mb-4">
                Make a lasting first impression with our premium door solutions. We specialize in both interior and
                exterior doors, offering a wide range of styles, materials, and customization options to complement any home design.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Door Types</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Front entry doors</li>
                    <li>• French doors</li>
                    <li>• Patio doors</li>
                    <li>• Interior doors</li>
                    <li>• Storm doors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Materials & Features</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Solid wood construction</li>
                    <li>• Fiberglass for durability</li>
                    <li>• Steel for security</li>
                    <li>• Energy-efficient glass options</li>
                    <li>• Custom hardware and finishes</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                Every door installation includes professional measuring, expert installation, and detailed finishing work.
                We offer free consultations to help you choose the perfect door for your home and style preferences.
              </p>
            </div>
          }
        />
    </div>
  );
};

export default Doors;