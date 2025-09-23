import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import CustomerMapGallery from '@/components/CustomerMapGallery';

// Sample project data for the map gallery
const sampleProjects = [
  {
    id: '1',
    title: 'Albany Kitchen Remodel',
    description: 'Complete kitchen renovation featuring custom cabinets, granite countertops, and modern appliances.',
    coordinates: { latitude: 42.6526, longitude: -73.7562 },
    photos: [
      {
        id: '1-1',
        url: '/images/project1-1.jpg',
        thumbnailUrl: '/images/project1-1-thumb.jpg',
        alt: 'Before kitchen remodel',
        caption: 'Before: Outdated kitchen'
      },
      {
        id: '1-2',
        url: '/images/project1-2.jpg',
        thumbnailUrl: '/images/project1-2-thumb.jpg',
        alt: 'After kitchen remodel',
        caption: 'After: Modern kitchen design'
      }
    ]
  },
  {
    id: '2',
    title: 'Troy Bathroom Renovation',
    description: 'Luxury bathroom upgrade with marble finishes, walk-in shower, and heated floors.',
    coordinates: { latitude: 42.7284, longitude: -73.6918 },
    photos: [
      {
        id: '2-1',
        url: '/images/project2-1.jpg',
        thumbnailUrl: '/images/project2-1-thumb.jpg',
        alt: 'Bathroom renovation',
        caption: 'Luxury bathroom transformation'
      }
    ]
  },
  {
    id: '3',
    title: 'Saratoga Springs Siding',
    description: 'Exterior siding replacement with energy-efficient materials and professional installation.',
    coordinates: { latitude: 43.0831, longitude: -73.7846 },
    photos: [
      {
        id: '3-1',
        url: '/images/project3-1.jpg',
        thumbnailUrl: '/images/project3-1-thumb.jpg',
        alt: 'New siding installation',
        caption: 'Before and after siding'
      }
    ]
  }
];

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4 mb-8">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
      
      <div className="w-full max-w-4xl mx-4">
        <CustomerMapGallery
          projects={sampleProjects}
          mapConfig={{
            center: { latitude: 42.8, longitude: -73.9 },
            zoom: 8,
            apiKey: import.meta.env.VITE_MAPBOX_API_KEY || 'pk.eyJ1IjoiZWZsb3JlenNhc2giLCJhIjoiY21mcHJkYjR5MGo0cjJtb2xoZjd4Zmd2ZyJ9.mu2PN6vioX71RvV5J-HhWA'
          }}
          galleryConfig={{
            maxThumbnails: 6,
            showProjectInfo: true
          }}
        />
      </div>
    </div>
  );
}
