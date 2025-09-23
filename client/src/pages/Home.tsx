import React from 'react';
import MegaFooter from '@/components/MegaFooter';
import CustomerMapGallery from '@/components/CustomerMapGallery';
import GoogleReviewsSlider from '@/components/GoogleReviewsSlider';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// Import the before and after images
import beforeWindowImage from '@/assets/before-window-brick.png';
import afterWindowImage from '@/assets/after-window-brick.png';

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

export default function Home() {
  return (
    <div>
      {/* Commented out React hero section */}
      {/*
      <div className="main-container">
        <div className="main-content">
          <div className="hero-section">
            <main className="container-fluid">
              <CyclingHeadings onSubmit={handleQuestionSubmit} />
            </main>
          </div>
        </div>
      </div>
      */}

      {/* Static HTML Homepage */}
      <body className="font-sans">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image Container */}
          <div className="absolute inset-0">
            <img src="/images/home-hero-house.jpg" alt="Beautiful Central New York home with premium windows and siding" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block bg-[#dc143c] px-4 py-2 rounded-md text-sm font-semibold mb-6">
                  Trusted Since 1988 | 10,000+ Projects Completed
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Transform Your Home's
                  <span className="text-[#dc143c] block">Beauty & Comfort</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Central New York's premier provider of premium windows, siding, bathrooms, and entry doors. Experience the perfect blend of style, efficiency, and lasting quality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-[#dc143c] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition flex items-center">
                    <span>Get Free Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="tel:315-624-7344" className="bg-white text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>(315) 624-7344</span>
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-md p-8">
                  <div className="text-center">
                    <iframe className="w-full rounded-md shadow-lg" height="315" src="https://www.youtube.com/embed/3wKPyfZBFCM" title="Welcome to New York Sash" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Serving Central New York with expert installation and superior products backed by our family-owned commitment to quality</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Windows */}
              <div className="service-card bg-white rounded-md shadow-md overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={beforeWindowImage}
                  afterImage={afterWindowImage}
                  beforeAlt="Old windows before replacement"
                  afterAlt="New premium windows installed"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Windows</h3>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Fusion welded frames</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>LowE with Argon gas</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>ENERGY STAR certified</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Custom manufactured</li>
                  </ul>
                  <a href="/windows" className="bg-[#dc143c] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition w-full block text-center">Learn More</a>
                </div>
              </div>

              {/* Siding */}
              <div className="service-card bg-white rounded-md shadow-md overflow-hidden">
                <BeforeAfterSlider
                  beforeImage="https://via.placeholder.com/400x300/696969/FFFFFF?text=Before+Siding+Replacement"
                  afterImage="https://via.placeholder.com/400x300/87CEEB/FFFFFF?text=After+New+Siding"
                  beforeAlt="Old weathered siding before replacement"
                  afterAlt="New insulated vinyl siding installed"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Siding</h3>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Insulated vinyl siding</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Maintenance-free</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>ENERGY STAR rated</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Lifetime warranty</li>
                  </ul>
                  <a href="/siding" className="bg-[#dc143c] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition w-full block text-center">Learn More</a>
                </div>
              </div>

              {/* Baths */}
              <div className="service-card bg-white rounded-md shadow-md overflow-hidden">
                <BeforeAfterSlider
                  beforeImage="https://via.placeholder.com/400x300/8B7355/FFFFFF?text=Before+Bathroom+Remodel"
                  afterImage="https://via.placeholder.com/400x300/E0FFFF/FFFFFF?text=After+Modern+Bathroom"
                  beforeAlt="Old bathroom before remodel"
                  afterAlt="Modern bathroom with walk-in tub"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Bathrooms</h3>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Acrylic bath liners</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Walk-in tubs</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Tub-to-shower conversions</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>2-day installation</li>
                  </ul>
                  <a href="/bathrooms" className="bg-[#dc143c] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition w-full block text-center">Learn More</a>
                </div>
              </div>

              {/* Entry Doors */}
              <div className="service-card bg-white rounded-md shadow-md overflow-hidden">
                <BeforeAfterSlider
                  beforeImage="https://via.placeholder.com/400x300/654321/FFFFFF?text=Before+Door+Replacement"
                  afterImage="https://via.placeholder.com/400x300/8B4513/FFD700?text=After+New+Entry+Door"
                  beforeAlt="Old entry door before replacement"
                  afterAlt="New fiberglass entry door with decorative glass"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">Entry Doors</h3>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Fiberglass & steel</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Decorative glass options</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Enhanced security</li>
                    <li className="flex items-center"><span className="text-[#dc143c] mr-2">✓</span>Energy efficient</li>
                  </ul>
                  <a href="/doors" className="bg-[#dc143c] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition w-full block text-center">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose New York Sash</h2>
                <p className="text-xl max-w-3xl mx-auto">Family-owned and operated since 1988, serving Central New York with unmatched expertise and commitment</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="stat-card text-center p-8 bg-[#2a2a2a] rounded-lg">
                  <div className="text-5xl font-bold text-[#dc143c] mb-4">35+</div>
                  <div className="text-xl font-semibold mb-2">Years in Business</div>
                  <div className="text-gray-300">Since 1988</div>
                </div>
                <div className="stat-card text-center p-8 bg-[#2a2a2a] rounded-lg">
                  <div className="text-5xl font-bold text-[#dc143c] mb-4">10,000+</div>
                  <div className="text-xl font-semibold mb-2">Happy Customers</div>
                  <div className="text-gray-300">Across Central NY</div>
                </div>
                <div className="stat-card text-center p-8 bg-[#2a2a2a] rounded-lg">
                  <div className="text-5xl font-bold text-[#dc143c] mb-4">4.9★</div>
                  <div className="text-xl font-semibold mb-2">Customer Rating</div>
                  <div className="text-gray-300">847+ Reviews</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">What Sets Us Apart</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start"><span className="text-[#dc143c] mr-3 text-2xl">✓</span>Family-owned and operated since 1988</li>
                    <li className="flex items-start"><span className="text-[#dc143c] mr-3 text-2xl">✓</span>EPA certified lead-safe installation practices</li>
                    <li className="flex items-start"><span className="text-[#dc143c] mr-3 text-2xl">✓</span>Custom manufactured products for perfect fit</li>
                    <li className="flex items-start"><span className="text-[#dc143c] mr-3 text-2xl">✓</span>Year-round installation capability</li>
                    <li className="flex items-start"><span className="text-[#dc143c] mr-3 text-2xl">✓</span>Comprehensive warranties and guarantees</li>
                    <li className="flex items-start"><span className="text-[#dc143c] mr-3 text-2xl">✓</span>Local Central New York expertise</li>
                  </ul>
                </div>
                <div className="text-center">
                  <img src="/src/assets/epa-logo.webp" alt="New York Sash team with EPA Lead-Safe Certified badge" className="rounded-md shadow-xl mx-auto max-w-[200px]" loading="lazy" />
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-[#dc143c] text-white px-4 py-2 rounded-md font-semibold">EPA Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Real Customer Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear directly from our satisfied customers across Central New York</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Video Testimonial 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/u3BdC0aOwR8"
                    title="Customer Testimonial - Teresa from Utica, NY - Breakfast with the Installers"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ny-black mb-2">Teresa - Utica, NY</h3>
                  <p className="text-gray-600">Window Installation - "I enjoyed my time with the New York Sash installers so much I had breakfast with them!"</p>
                </div>
              </div>

              {/* Video Testimonial 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/ZNbe9ZW63HM"
                    title="Customer Testimonial - Bath Conversion in Rome, NY"
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ny-black mb-2">Mary Ann - Rome, NY</h3>
                  <p className="text-gray-600">Tub-to-Shower Conversion - "We were concerned about safety in the bathroom, so we called New York Sash."</p>
                </div>
              </div>

              {/* Google Reviews Slider */}
              <GoogleReviewsSlider
                placeId="YOUR_GOOGLE_PLACE_ID"
                apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
                maxReviews={5}
              />
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-[#dc143c] blueprint-overlay text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Serving Central New York</h2>
              <p className="text-xl max-w-3xl mx-auto">Proudly serving communities throughout Central New York with expert home improvement services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-white rounded-md">
                <div className="flex justify-center mb-3">
                  <div className="bg-[#dc143c] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="bi bi-geo-alt-fill text-white text-sm"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Utica</h3>
                <p className="text-gray-600">Population: 62,000+</p>
              </div>
              <div className="text-center p-6 bg-white rounded-md">
                <div className="flex justify-center mb-3">
                  <div className="bg-[#dc143c] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="bi bi-geo-alt-fill text-white text-sm"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Syracuse</h3>
                <p className="text-gray-600">Population: 148,000+</p>
              </div>
              <div className="text-center p-6 bg-white rounded-md">
                <div className="flex justify-center mb-3">
                  <div className="bg-[#dc143c] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="bi bi-geo-alt-fill text-white text-sm"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Rome</h3>
                <p className="text-gray-600">Population: 32,000+</p>
              </div>
              <div className="text-center p-6 bg-white rounded-md">
                <div className="flex justify-center mb-3">
                  <div className="bg-[#dc143c] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="bi bi-geo-alt-fill text-white text-sm"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">New Hartford</h3>
                <p className="text-gray-600">Population: 22,000+</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg mb-6">Also serving: Sauquoit, Lowville, Frankfort, Whitesboro, Copenhagen, West Winfield, Weedsport, Ilion, Laurens, Sylvan Beach, and surrounding communities</p>
              <a href="/service-areas" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">View All Service Areas</a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Get your free, no-obligation estimate today. Our expert design consultants will help you choose the perfect solutions for your home.</p>
            <div className="space-x-4">
              <a href="/contact" className="bg-[#dc143c] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition">Get Free Estimate</a>
              <a href="tel:315-624-7344" className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-black transition">(315) 624-7344</a>
            </div>
            <div className="mt-8">
              <p className="text-gray-600">Visit our Idea and Design Center at <strong>349 Oriskany Boulevard, Whitesboro, NY</strong></p>
              <p className="text-gray-600">Monday-Friday: 8am-8pm | Saturday: 8am-5pm</p>
            </div>
          </div>
        </section>
      </body>

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

      <MegaFooter />
    </div>
  );
}
