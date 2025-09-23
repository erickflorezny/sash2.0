import React from 'react';

interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  alt: string;
  caption?: string;
}

interface GalleryConfig {
  maxThumbnails?: number;
  showProjectInfo?: boolean;
}

interface PhotoGalleryProps {
  photos: Photo[];
  galleryConfig?: GalleryConfig;
  onPhotoClick?: (index: number) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  galleryConfig = { maxThumbnails: 6, showProjectInfo: true },
  onPhotoClick
}) => {
  const handlePhotoClick = (index: number) => {
    console.log('Photo clicked:', index, photos[index]);
    if (onPhotoClick) {
      onPhotoClick(index);
    }
  };

  return (
    <div className="photo-gallery grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.slice(0, galleryConfig.maxThumbnails).map((photo, index) => (
        <div
          key={photo.id}
          className="photo-item cursor-pointer"
          onClick={() => handlePhotoClick(index)}
        >
          <img
            src={photo.thumbnailUrl}
            alt={photo.alt}
            className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
          {galleryConfig.showProjectInfo && photo.caption && (
            <div className="text-center mt-2">
              <p className="text-sm font-medium text-gray-700">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;