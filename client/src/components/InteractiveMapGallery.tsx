import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Modal from 'react-modal';
import PhotoGallery from './PhotoGallery';

const InteractiveMapGallery = ({ locations, mapConfig, galleryConfig, onPinClick, className, style }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePinClick = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
    if (onPinClick) {
      onPinClick(location.id);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  return (
    <div className={`interactive-map-gallery ${className}`} style={style}>
      <LoadScript googleMapsApiKey={mapConfig.apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={mapConfig.center}
          zoom={mapConfig.zoom}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              onClick={() => handlePinClick(location)}
              icon={{
                url: location.pinConfig.icon || undefined,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {selectedLocation && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
        >
          <h2>{selectedLocation.projectInfo.title}</h2>
          <p>{selectedLocation.projectInfo.description}</p>
          <PhotoGallery photos={selectedLocation.photos} galleryConfig={galleryConfig} />
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default InteractiveMapGallery;