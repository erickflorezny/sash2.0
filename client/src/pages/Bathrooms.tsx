import React from 'react';
import WordPressContent from '@/components/WordPressContent';
import MegaFooter from '@/components/MegaFooter';
import CustomerMapGallery from '@/components/CustomerMapGallery';
import { sampleProjects } from '@/data/projects';

const Bathrooms: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="bathrooms"
          fallbackContent={
            <div>
              <style dangerouslySetInnerHTML={{
                __html: `
                  .blueprint-overlay {
                    position: relative;
                  }
                  .blueprint-overlay::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px);
                    background-size: 20px 20px, 20px 20px, 40px 40px;
                    pointer-events: none;
                  }

                  .bath-card {
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                  }
                  .bath-card:hover {
                    transform: translateY(-4px);
                    border-color: #DC143C;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                  }

                  .video-embed {
                    aspect-ratio: 16/9;
                    width: 100%;
                  }

                  .before-after {
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                  }
                `
              }} />

              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                  <div className="relative h-full">
                    <div className="absolute inset-0">
                      <div className="w-full h-full bg-gradient-to-br from-ny-gray to-gray-200 flex items-center justify-center">
                        <div className="text-center text-ny-black">
                          <div className="text-6xl mb-4">🛁</div>
                          <p className="text-xl">Bathroom Renovation Hero Image</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-ny-black/80">
                      <div className="h-full w-full blueprint-overlay"></div>
                    </div>
                    <div className="absolute inset-0">
                      <div className="h-full w-full grid grid-cols-4 gap-px opacity-20">
                        <div className="bg-white/10"></div>
                        <div className="bg-white/10"></div>
                        <div className="bg-white/10"></div>
                        <div className="bg-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <div className="inline-block bg-ny-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Complete in as Little as One Day
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Your Dream Bathroom
                        <span className="text-ny-red">Made Reality</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        Transform your bathroom into a beautiful, safe, and accessible space. From walk-in tubs to complete remodels, we create the perfect bathroom for your lifestyle.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-ny-red mb-1">2-Day</div>
                          <p className="text-gray-300 text-sm">Typical Installation</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-ny-red mb-1">35+</div>
                          <p className="text-gray-300 text-sm">Years Experience</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-ny-red mb-1">10K+</div>
                          <p className="text-gray-300 text-sm">Happy Customers</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-ny-red mb-1">Lifetime</div>
                          <p className="text-gray-300 text-sm">Warranty</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="/contact" className="bg-ny-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          Get Free Estimate
                        </a>
                        <a href="tel:315-624-7344" className="bg-white text-ny-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          (315) 624-7344
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="relative">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-ny-red rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-ny-red rounded-full opacity-20 blur-2xl"></div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative">
                          <h3 className="text-2xl font-bold text-white mb-4">Why Choose New York Sash?</h3>
                          <ul className="text-gray-200 space-y-3">
                            <li className="flex items-center">
                              <svg className="h-5 w-5 text-ny-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              Licensed & Insured
                            </li>
                            <li className="flex items-center">
                              <svg className="h-5 w-5 text-ny-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              Free Estimates
                            </li>
                            <li className="flex items-center">
                              <svg className="h-5 w-5 text-ny-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              Satisfaction Guarantee
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bathroom Benefits */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Why Choose Our Bathroom Solutions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fast and long-lasting bathroom improvements designed for Central New York families</p>
                  </div>

                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">2-Day Install</h3>
                      <p className="text-gray-600">Complete most projects in just two days</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Durable Acrylic</h3>
                      <p className="text-gray-600">Won't chip, crack, peel, or fade</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🧹</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Easy Clean</h3>
                      <p className="text-gray-600">Non-porous surface resists mold and mildew</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">♿</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Safety Features</h3>
                      <p className="text-gray-600">Grab bars, non-slip surfaces, and low thresholds</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Style Options</h3>
                      <p className="text-gray-600">Multiple colors and wall patterns available</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bath Options */}
              <section className="py-20 bg-ny-gray">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Bathroom Solutions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Customized remodeling options designed for your needs</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Acrylic Bath Liners */}
                    <div className="bath-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-4xl">🛁</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Acrylic Bath Liners</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Seamless installation over existing tub
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Durable acrylic won't chip or crack
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Easy to clean and maintain
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <p className="text-ny-red font-semibold">Starting at $1,200</p>
                        </div>
                      </div>
                    </div>

                    {/* Walk-in Tubs */}
                    <div className="bath-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <span className="text-4xl">🚿</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Walk-in Tubs</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Door swings in for easy access
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Comfortable seating while bathing
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Handheld shower wand included
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <p className="text-ny-red font-semibold">Starting at $3,500</p>
                        </div>
                      </div>
                    </div>

                    {/* Tub-to-Shower Conversion */}
                    <div className="bath-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <span className="text-4xl">🚿</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Tub-to-Shower</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Remove old tub, install new shower
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Low threshold for easy access
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Custom tile and glass options
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <p className="text-ny-red font-semibold">Starting at $2,800</p>
                        </div>
                      </div>
                    </div>

                    {/* Shower Replacements */}
                    <div className="bath-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                        <span className="text-4xl">🚿</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Shower Replacement</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Replace existing shower surround
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Durable acrylic construction
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Waterproof and easy to maintain
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <p className="text-ny-red font-semibold">Starting at $1,800</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-20 bg-ny-red blueprint-overlay text-white">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto">Get your free, no-obligation bathroom estimate today. Our design consultants will help you choose the perfect solution for your Central New York home.</p>
                  <div className="space-x-4">
                    <a href="/contact" className="bg-white text-ny-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      Get Free Estimate
                    </a>
                    <a href="tel:315-624-7344" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-ny-red transition inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      (315) 624-7344
                    </a>
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-200">Visit our Idea and Design Center at <strong>349 Oriskany Boulevard, Whitesboro, NY</strong></p>
                    <p className="text-gray-200">Monday-Friday: 8am-8pm | Saturday: 8am-5pm</p>
                  </div>
                </div>
              </section>
            </div>
          }
        />
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
};

export default Bathrooms;