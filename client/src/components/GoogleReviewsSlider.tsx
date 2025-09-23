import React, { useState, useEffect } from 'react';

interface GoogleReview {
  id: string;
  author_name: string;
  author_photo?: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

interface GoogleReviewsSliderProps {
  placeId?: string;
  apiKey?: string;
  maxReviews?: number;
  className?: string;
}

const GoogleReviewsSlider: React.FC<GoogleReviewsSliderProps> = ({
  placeId,
  apiKey,
  maxReviews = 10,
  className = ''
}) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock data for development - replace with actual Google Places API call
  const mockReviews: GoogleReview[] = [
    {
      id: '1',
      author_name: 'Sarah Johnson',
      author_photo: 'https://via.placeholder.com/40x40?text=SJ',
      rating: 5,
      text: 'New York Sash did an amazing job on our windows! The installation was professional and the quality is outstanding. Highly recommend!',
      time: Date.now() - 86400000,
      relative_time_description: 'a day ago'
    },
    {
      id: '2',
      author_name: 'Mike Chen',
      author_photo: 'https://via.placeholder.com/40x40?text=MC',
      rating: 5,
      text: 'Excellent siding installation. The team was punctual, clean, and the finished product looks fantastic. Will definitely use them again.',
      time: Date.now() - 172800000,
      relative_time_description: '2 days ago'
    },
    {
      id: '3',
      author_name: 'Jennifer Williams',
      author_photo: 'https://via.placeholder.com/40x40?text=JW',
      rating: 5,
      text: 'Our bathroom remodel exceeded expectations! The walk-in tub installation was seamless and the attention to detail was incredible.',
      time: Date.now() - 259200000,
      relative_time_description: '3 days ago'
    },
    {
      id: '4',
      author_name: 'David Rodriguez',
      author_photo: 'https://via.placeholder.com/40x40?text=DR',
      rating: 5,
      text: 'Professional, reliable, and high-quality work. New York Sash installed our entry doors perfectly. The craftsmanship is top-notch.',
      time: Date.now() - 345600000,
      relative_time_description: '4 days ago'
    },
    {
      id: '5',
      author_name: 'Lisa Thompson',
      author_photo: 'https://via.placeholder.com/40x40?text=LT',
      rating: 5,
      text: 'Outstanding service from start to finish. The team was knowledgeable, courteous, and delivered exactly what they promised.',
      time: Date.now() - 432000000,
      relative_time_description: '5 days ago'
    }
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        // For development, use mock data
        // In production, replace with actual Google Places API call
        if (!apiKey || !placeId) {
          setReviews(mockReviews);
          setLoading(false);
          return;
        }

        // Google Places API call would go here
        // const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`);
        // const data = await response.json();
        // setReviews(data.result.reviews || []);

        setReviews(mockReviews);
      } catch (err) {
        setError('Failed to load reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 flex flex-col justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 flex flex-col justify-center ${className}`}>
        <div className="text-center">
          <p className="text-gray-600">{error || 'No reviews available'}</p>
        </div>
      </div>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className={`bg-gray-100 rounded-lg p-8 flex flex-col justify-center relative ${className}`}>
      {/* Review Content */}
      <div className="mb-4">
        <img
          src={currentReview.author_photo || 'https://via.placeholder.com/40x40?text=User'}
          alt={currentReview.author_name}
          className="w-12 h-12 rounded-full mx-auto mb-4"
          loading="lazy"
        />
      </div>

      <blockquote className="text-lg text-gray-700 mb-4 italic text-center">
        "{currentReview.text}"
      </blockquote>

      <div className="text-center">
        <div className="font-semibold text-black mb-1">{currentReview.author_name}</div>
        <div className="text-red-600 mb-2">{renderStars(currentReview.rating)}</div>
        <div className="text-sm text-gray-500">{currentReview.relative_time_description}</div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevReview}
          className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-full shadow-md transition"
          aria-label="Previous review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextReview}
          className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-full shadow-md transition"
          aria-label="Next review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GoogleReviewsSlider;