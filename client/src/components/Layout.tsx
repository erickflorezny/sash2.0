import React from 'react';
import Sidebar from './Sidebar';
import MegaFooter from './MegaFooter';
import CustomerMapGallery from './CustomerMapGallery';
import './Layout.css';

// Sample project data for the map
const sampleProjects = [
  {
    id: '1',
    title: 'Brooklyn Brownstone Renovation',
    description: 'Complete window replacement and bathroom renovation',
    coordinates: { latitude: 40.6782, longitude: -73.9442 },
    photos: [
      {
        id: '1',
        url: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/150/100',
        alt: 'Brooklyn Brownstone Before',
        caption: 'Before renovation'
      }
    ]
  },
  {
    id: '2',
    title: 'Manhattan Apartment Complex',
    description: 'Siding replacement and door installation',
    coordinates: { latitude: 40.7589, longitude: -73.9851 },
    photos: [
      {
        id: '2',
        url: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/150/100',
        alt: 'Manhattan Apartment',
        caption: 'Modern apartment renovation'
      }
    ]
  },
  {
    id: '3',
    title: 'Queens Family Home',
    description: 'Kitchen and bathroom remodeling',
    coordinates: { latitude: 40.7282, longitude: -73.7949 },
    photos: [
      {
        id: '3',
        url: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/150/100',
        alt: 'Queens Family Home',
        caption: 'Family home transformation'
      }
    ]
  }
];

interface LayoutProps {
  children: React.ReactNode;
  showMap?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showMap = true,
  className = ""
}) => {
  return (
    <div className={`layout ${className}`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Page Content */}
        <main className="page-content">
          {children}
        </main>

        {/* Map Section */}
        {showMap && (
          <section className="map-section">
            <div className="map-container">
              <h2 className="map-title">Our Recent Projects</h2>
              <p className="map-subtitle">
                Explore our completed projects across New York City
              </p>
              <CustomerMapGallery
                projects={sampleProjects}
                mapConfig={{
                  center: { latitude: 40.7128, longitude: -74.0060 },
                  zoom: 10,
                  apiKey: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
                }}
                galleryConfig={{
                  maxThumbnails: 6,
                  showProjectInfo: true
                }}
              />
            </div>
          </section>
        )}

        {/* Footer */}
        <MegaFooter />
      </div>
    </div>
  );
};

export default Layout;