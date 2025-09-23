import React from 'react';
import WordPressContent from '@/components/WordPressContent';

const Siding: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="siding"
          fallbackContent={
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Premium Siding Solutions</h1>
              <p className="text-lg text-gray-700 mb-4">
                Protect and beautify your home with our professional siding installation services. We offer a variety of
                high-quality siding materials that provide superior protection against the elements while enhancing your home's curb appeal.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Siding Materials</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Vinyl siding - durable and low maintenance</li>
                    <li>• Fiber cement - premium look and feel</li>
                    <li>• Engineered wood - natural beauty with protection</li>
                    <li>• Metal siding - modern and energy-efficient</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Enhanced energy efficiency</li>
                    <li>• Improved weather protection</li>
                    <li>• Increased home value</li>
                    <li>• Low maintenance requirements</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                Our experienced installers ensure perfect fit and finish on every project. We offer free estimates and
                work with you to choose the perfect siding solution for your home and budget.
              </p>
            </div>
          }
        />
    </div>
  );
};

export default Siding;