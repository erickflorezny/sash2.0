import React from 'react';
import WordPressContent from '@/components/WordPressContent';
import MegaFooter from '@/components/MegaFooter';

const Windows: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="windows"
          fallbackContent={
            <div>
              {/* Custom Styles */}
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

                  .hero-image {
                    background: url('[PLACEHOLDER_IMAGE_URL_windows_hero_1920x1080.jpg]') center/cover;
                    position: relative;
                  }

                  .window-card {
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                  }
                  .window-card:hover {
                    transform: translateY(-4px);
                    border-color: #DC143C;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                  }

                  .video-embed {
                    aspect-ratio: 16/9;
                    width: 100%;
                  }

                  .feature-icon {
                    width: 60px;
                    height: 60px;
                    background: #DC143C;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    margin: 0 auto 1rem;
                  }
                `
              }} />

              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                  <div className="grid grid-cols-3 gap-4 opacity-20 blur-sm">
                    <img src="[PLACEHOLDER_IMAGE_URL_window_project_1.jpg]" alt="Premium window installation in Central NY home" className="w-full h-screen object-cover" />
                    <img src="[PLACEHOLDER_IMAGE_URL_window_project_2.jpg]" alt="Energy efficient window replacement" className="w-full h-screen object-cover" />
                    <img src="[PLACEHOLDER_IMAGE_URL_window_project_3.jpg]" alt="Custom window installation" className="w-full h-screen object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-ny-black via-ny-black/90 to-ny-black/80 blueprint-overlay"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <div className="inline-block bg-ny-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        ENERGY STAR® Certified Windows
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Experience the
                        <span className="text-ny-red">Window Revolution</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        Transform your home with our premium fusion-welded windows. Superior energy efficiency, enhanced comfort, and timeless beauty designed specifically for Central New York homes.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Fusion Welded Frames</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Superior strength and insulation</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">LowE Glass</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Advanced UV protection</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Argon Gas Filled</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Enhanced insulation</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Lifetime Warranty</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Peace of mind guarantee</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="/contact" className="bg-ny-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center">
                          <span>Schedule Free Consultation</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                          </svg>
                        </a>
                        <a href="tel:315-624-7344" className="bg-white text-ny-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          <span>(315) 624-7344</span>
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="relative">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-ny-red rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-ny-red rounded-full opacity-20 blur-2xl"></div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative">
                          <iframe className="w-full rounded-lg shadow-lg mb-8" height="315" src="https://www.youtube.com/embed/_ToUrLnN0w4" title="Fusion Welded Window Technology" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                          <div className="grid grid-cols-2 gap-4">
                            <img src="[PLACEHOLDER_IMAGE_URL_window_detail_1.jpg]" alt="Premium window installation detail" className="rounded-lg" loading="lazy" />
                            <img src="[PLACEHOLDER_IMAGE_URL_window_detail_2.jpg]" alt="Energy efficient window features" className="rounded-lg" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="text-sm mb-2">Explore Window Options</p>
                  <div className="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Premium Features & Benefits</h2>
                    <p className="text-xl text-gray-600">Our windows are custom-engineered for Central New York homes</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-lg p-8">
                      <div className="text-ny-red mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Energy Efficient Design</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          LowE glass with Argon gas
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Exceeds ENERGY STAR® requirements
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Superior insulation value
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8">
                      <div className="text-ny-red mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Superior Construction</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Fusion welded frames & sashes
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Stainless steel balance system
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Custom sized to fit any opening
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8">
                      <div className="text-ny-red mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Easy Maintenance</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Tilt-in sashes for easy cleaning
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Dual vent locks for security
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Half screen for ventilation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Year Round Installation */}
              <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl font-bold mb-6">Year-Round Installation Available</h2>
                      <p className="text-xl text-gray-600 mb-8">Don't wait for warmer weather - our certified installers use special techniques to install windows in any season while protecting your home from the elements.</p>
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Our Winter Installation Process:</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-ny-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Room-by-room installation to minimize heat loss</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-ny-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Complete one window before moving to next</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-ny-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Special weatherization techniques</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/_kYToIDvzfU" title="Winter Window Installation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Customer Testimonials */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-xl text-gray-600">Hear from homeowners throughout Central New York</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-lg p-8">
                      <div className="aspect-video mb-6">
                        <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/7eLjAxEJCuU" title="Customer Testimonial - Utica, NY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                      </div>
                      <p className="text-gray-600 mb-4">Sarah from Utica shares her experience with our window installation</p>
                      <p className="font-semibold">Sarah H. - Utica, NY</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8">
                      <div className="aspect-video mb-6">
                        <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/FF1r77f850c" title="Customer Testimonial - Sauquoit, NY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                      </div>
                      <p className="text-gray-600 mb-4">Joe discusses his window replacement project</p>
                      <p className="font-semibold">Joe B. - Sauquoit, NY</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8">
                      <div className="aspect-video mb-6">
                        <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/I9Gm7wyXTIo" title="Customer Testimonial - New Hartford, NY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                      </div>
                      <p className="text-gray-600 mb-4">Raymond and Laura talk about their energy savings</p>
                      <p className="font-semibold">Raymond & Laura B. - New Hartford, NY</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          }
        />
        <MegaFooter />
    </div>
  );
};

export default Windows;