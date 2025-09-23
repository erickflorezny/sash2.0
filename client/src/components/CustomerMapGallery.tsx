import React, { useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Modal from 'react-modal';
import PhotoGallery from './PhotoGallery';
import PhotoModal from './PhotoModal';

// TypeScript interfaces for reusability
interface Project {
  id: string;
  title: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  photos: Array<{
    id: string;
    url: string;
    thumbnailUrl: string;
    alt: string;
    caption?: string;
  }>;
}

interface MapConfig {
  center: {
    latitude: number;
    longitude: number;
  };
  zoom: number;
  style?: string;
  apiKey?: string;
}

interface GalleryConfig {
  maxThumbnails?: number;
  showProjectInfo?: boolean;
}

interface CustomerMapGalleryProps {
  projects: Project[];
  mapConfig?: Partial<MapConfig>;
  galleryConfig?: GalleryConfig;
  className?: string;
  style?: React.CSSProperties;
  onPinClick?: (projectId: string) => void;
}

const CustomerMapGallery: React.FC<CustomerMapGalleryProps> = ({
  projects,
  mapConfig = {},
  galleryConfig = { maxThumbnails: 6, showProjectInfo: true },
  className = '',
  style,
  onPinClick
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: mapConfig.center?.latitude || 43.0,
    longitude: mapConfig.center?.longitude || -75.5,
    zoom: mapConfig.zoom || 8,
  });

  const defaultMapConfig: MapConfig = {
    center: { latitude: 43.0, longitude: -75.5 },
    zoom: 8,
    style: 'mapbox://styles/mapbox/outdoors-v11',
    apiKey: mapConfig.apiKey,
    ...mapConfig
  };

  console.log('API Key:', defaultMapConfig.apiKey);
  console.log('API Key length:', defaultMapConfig.apiKey?.length);
  console.log('API Key starts with pk:', defaultMapConfig.apiKey?.startsWith('pk.'));
  console.log('Map Config:', defaultMapConfig);
  console.log('Projects:', projects);

  const handlePinClick = (project: Project) => {
    console.log('Marker clicked:', project);
    setSelectedProject(project);
    setIsModalOpen(true);
    console.log('Modal should open now, selectedProject:', project, 'isModalOpen:', true);
    if (onPinClick) {
      onPinClick(project.id);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  return (
    <div className={`customer-map-gallery ${className}`} style={style}>
      <h2 className="text-center text-4xl font-bold mb-4 text-gray-900">Customer Projects</h2>
      <div className="map-container" style={{ width: '100%', height: '500px', position: 'relative', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', minHeight: '500px' }}>
        {defaultMapConfig.apiKey ? (
          <div style={{ width: '100%', height: '100%', position: 'relative', minHeight: '500px' }} className="mapboxgl-map">
            {!isMapLoaded && (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            )}
            <MapGL
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              width="100%"
              height="100%"
              mapStyle={defaultMapConfig.style}
              mapboxApiAccessToken={defaultMapConfig.apiKey}
              onViewportChange={setViewport}
              onLoad={() => {
                console.log('Map loaded successfully');
                setIsMapLoaded(true);
              }}
              onError={(e) => {
                console.error('Map error:', e);
                setIsMapLoaded(false);
              }}
              style={{ position: 'absolute', top: 0, left: 0 }}
              interactiveLayerIds={[]}
              doubleClickZoom={false}
              dragRotate={false}
              pitchWithRotate={false}
            >
              {projects.map((project) => (
                <Marker
                  key={project.id}
                  latitude={project.coordinates.latitude}
                  longitude={project.coordinates.longitude}
                >
                  <div
                    className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                    onClick={() => {
                      console.log('Div clicked for project:', project);
                      handlePinClick(project);
                    }}
                    style={{
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'auto'
                    }}
                  ></div>
                </Marker>
              ))}
              {console.log('Rendering markers for projects:', projects)}
            </MapGL>
          </div>
        ) : (
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">
                To view the interactive map with project locations, please add a Mapbox API key.
              </p>
              <div className="text-sm text-gray-500">
                <p>Get your free API key at <a href="https://mapbox.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">mapbox.com</a></p>
                <p className="mt-2">Then add it to your environment or pass it as mapConfig.apiKey</p>
              </div>
              {/* Show project locations as a simple list */}
              <div className="mt-6 text-left">
                <h4 className="font-semibold text-gray-700 mb-3">Project Locations:</h4>
                <div className="space-y-2">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center p-2 bg-white rounded cursor-pointer hover:bg-gray-50"
                      onClick={() => handlePinClick(project)}
                    >
                      <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium text-gray-900">{project.title}</div>
                        <div className="text-sm text-gray-600">
                          {project.coordinates.latitude.toFixed(4)}, {project.coordinates.longitude.toFixed(4)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="project-modal"
          overlayClassName="project-modal-overlay"
        >
          {console.log('Rendering modal for project:', selectedProject)}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-6">{selectedProject.description}</p>
            {selectedProject.photos.length > 0 && (
              <PhotoGallery
                photos={selectedProject.photos}
                galleryConfig={galleryConfig}
                onPhotoClick={handlePhotoClick}
              />
            )}
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}

      {selectedProject && (
        <PhotoModal
          photos={selectedProject.photos}
          isOpen={isPhotoModalOpen}
          onRequestClose={closePhotoModal}
          initialIndex={selectedPhotoIndex}
        />
      )}
    </div>
  );
};

export default CustomerMapGallery;