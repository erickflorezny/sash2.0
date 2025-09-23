import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  alt: string;
  caption?: string;
}

interface PhotoModalProps {
  photos: Photo[];
  isOpen: boolean;
  onRequestClose: () => void;
  initialIndex?: number;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  photos,
  isOpen,
  onRequestClose,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  console.log('PhotoModal props:', { photos, isOpen, initialIndex });

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Photo Viewer"
      className="photo-modal"
      overlayClassName="photo-modal-overlay"
    >
      <div className="relative">
        <button
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors z-10"
          onClick={onRequestClose}
        >
          ✕
        </button>
        <div className="text-center">
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].alt}
            className="w-full h-auto rounded-lg shadow-lg max-h-96 object-contain mx-auto"
          />
          {photos[currentIndex].caption && (
            <p className="mt-4 text-gray-700 text-lg">{photos[currentIndex].caption}</p>
          )}
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            onClick={goToPrevious}
            disabled={photos.length <= 1}
          >
            Previous
          </button>
          <span className="text-gray-600 self-center">
            {currentIndex + 1} of {photos.length}
          </span>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            onClick={goToNext}
            disabled={photos.length <= 1}
          >
            Next
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;