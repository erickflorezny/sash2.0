import React from 'react';
import WordPressContent from '@/components/WordPressContent';
import MegaFooter from '@/components/MegaFooter';

const Doors: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="doors"
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

                  .door-card {
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                  }
                  .door-card:hover {
                    transform: translateY(-4px);
                    border-color: #DC143C;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                  }

                  .video-embed {
                    aspect-ratio: 16/9;
                    width: 100%;
                  }

                  .glass-option {
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                  }
                  .glass-option:hover {
                    transform: scale(1.05);
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
                          <div className="text-6xl mb-4">🚪</div>
                          <p className="text-xl">Entry Door Hero Image</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-ny-black/95 via-ny-black/85 to-ny-black/75">
                      <div className="h-full w-full blueprint-overlay"></div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="container mx-auto h-full">
                        <div className="absolute right-0 top-1/4 w-96 h-96 border-2 border-ny-red/20 rounded-full"></div>
                        <div className="absolute left-0 bottom-1/4 w-64 h-64 border-2 border-ny-red/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <div className="inline-block bg-ny-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Security & Style Combined
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Make a Lasting
                        <span className="text-ny-red">First Impression</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        Transform your home's entrance with our premium entry doors. Combining elegant design with advanced security features and energy efficiency for Central New York homes.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Enhanced Security</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Multi-point locking</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Energy Efficient</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Superior insulation</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Custom Design</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Personalized style</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Professional Install</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Expert craftsmanship</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="/contact" className="bg-ny-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center">
                          <span>Design Your Door</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                          </svg>
                        </a>
                        <a href="tel:315-624-7344" className="bg-white text-ny-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 20 20" stroke="currentColor">
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
                          <iframe className="w-full rounded-lg shadow-lg" height="315" src="https://www.youtube.com/embed/VcNEaFZPY7I" title="Entry Door Installation Process" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="text-sm mb-2">Explore Door Options</p>
                  <div className="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Door Benefits */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Why Choose Our Door Systems</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Engineered for Central New York weather with superior security, energy efficiency, and lasting beauty</p>
                  </div>

                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Enhanced Security</h3>
                      <p className="text-gray-600">Multi-point locking systems and reinforced frames</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌡️</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Energy Efficient</h3>
                      <p className="text-gray-600">Insulated cores and weatherstripping reduce drafts</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Low Maintenance</h3>
                      <p className="text-gray-600">Fiberglass and steel never need refinishing</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Style Options</h3>
                      <p className="text-gray-600">Wood-look finishes and decorative glass</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Professional Install</h3>
                      <p className="text-gray-600">Expert installation with lifetime warranty</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Door Types */}
              <section className="py-20 bg-ny-gray">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Door Types & Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our premium door collection designed for Central New York homes</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Fiberglass Entry Doors */}
                    <div className="door-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-4xl">🚪</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Fiberglass Entry Doors</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Wood grain texture
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Energy efficient
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Low maintenance
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Lifetime warranty
                          </li>
                        </ul>
                        <a href="/contact" className="inline-block bg-ny-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Learn More</a>
                      </div>
                    </div>

                    {/* Steel Entry Doors */}
                    <div className="door-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-4xl">🚪</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Steel Doors</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Maximum security
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Insulated core
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Dent resistant
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Energy efficient
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <div className="text-ny-red font-semibold">Installed with frame</div>
                        </div>
                      </div>
                    </div>

                    {/* French Doors */}
                    <div className="door-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                        <span className="text-4xl">🏛️</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">French Doors</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Classic elegance
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Maximum light
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            In-swing or out-swing
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Decorative hardware
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <div className="text-ny-red font-semibold">Double door system</div>
                        </div>
                      </div>
                    </div>

                    {/* Patio Doors */}
                    <div className="door-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Patio Doors</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Sliding or hinged
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Low-E glass
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Smooth operation
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Security features
                          </li>
                        </ul>
                        <div className="border-t pt-4">
                          <div className="text-ny-red font-semibold">Complete system</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-20 bg-ny-red text-white">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Entryway?</h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">Get a free consultation and see how our premium door systems can transform your home's curb appeal and energy efficiency</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="inline-block bg-white text-ny-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">Schedule Free Consultation</a>
                    <a href="tel:(315) 555-0123" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ny-red transition text-lg">Call (315) 555-0123</a>
                  </div>
                  <div className="mt-8 text-lg">
                    <p>✓ Free in-home consultation</p>
                    <p>✓ No obligation estimates</p>
                    <p>✓ Lifetime warranty included</p>
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

export default Doors;