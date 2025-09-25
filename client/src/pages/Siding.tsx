import React from 'react';
import WordPressContent from '@/components/WordPressContent';
import MegaFooter from '@/components/MegaFooter';
import CustomerMapGallery from '@/components/CustomerMapGallery';
import { sampleProjects } from '@/data/projects';

const Siding: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="siding"
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

                  .siding-card {
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                  }
                  .siding-card:hover {
                    transform: translateY(-4px);
                    border-color: #DC143C;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                  }

                  .color-chip {
                    width: 40px;
                    height: 40px;
                    border-radius: 4px;
                    border: 2px solid #ccc;
                    transition: transform 0.2s ease;
                  }
                  .color-chip:hover {
                    transform: scale(1.1);
                  }
                `
              }} />

              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0">
                  <div className="relative h-full">
                    <div className="absolute inset-0">
                      <img src="[PLACEHOLDER_IMAGE_URL_siding_hero_1920x1080.jpg]" alt="Premium siding installation in Central NY home" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80">
                      <div className="h-full w-full blueprint-overlay"></div>
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute h-px w-full top-1/2 left-0 bg-red-600/20"></div>
                        <div className="absolute h-full w-px left-1/4 top-0 bg-red-600/20"></div>
                        <div className="absolute h-full w-px left-2/4 top-0 bg-red-600/20"></div>
                        <div className="absolute h-full w-px left-3/4 top-0 bg-red-600/20"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <div className="inline-block bg-ny-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Premium Vinyl & Insulated Siding Solutions
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Elevate Your Home's
                        <span className="text-ny-red">Protection & Style</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        Transform your home's exterior with our premium siding solutions. Engineered for Central New York weather, combining lasting beauty with superior protection and energy efficiency.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Maintenance-Free</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Never needs painting</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-ny-red text-2xl mr-2">✓</span>
                            <h3 className="font-semibold">Weather Resistant</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Built for NY climate</p>
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
                            <h3 className="font-semibold">Lifetime Warranty</h3>
                          </div>
                          <p className="text-gray-300 text-sm">Guaranteed protection</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="/contact" className="bg-ny-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center">
                          <span>Get Expert Consultation</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                          </svg>
                        </a>
                        <a href="tel:(315) 555-0123" className="bg-white text-ny-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          <span>(315) 555-0123</span>
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="relative">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-ny-red rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-ny-red rounded-full opacity-20 blur-2xl"></div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative">
                          <iframe className="w-full rounded-lg shadow-lg mb-8" height="315" src="https://www.youtube.com/embed/OA12ERPQg_U" title="Professional Siding Installation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Siding Benefits */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Why Choose Our Siding</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Built to withstand Central New York weather while providing lasting beauty and energy efficiency</p>
                  </div>

                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">ENERGY STAR</h3>
                      <p className="text-gray-600">Rated for superior energy efficiency and comfort</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Maintenance-Free</h3>
                      <p className="text-gray-600">Never needs painting or staining again</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Impact Resistant</h3>
                      <p className="text-gray-600">Withstands hail, wind, and harsh weather</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Color Options</h3>
                      <p className="text-gray-600">30+ colors that never fade or chalk</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ny-red rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">♻️</span>
                      </div>
                      <h3 className="text-xl font-bold text-ny-black mb-2">Eco-Friendly</h3>
                      <p className="text-gray-600">Recyclable and energy-efficient materials</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Siding Types */}
              <section className="py-20 bg-ny-gray">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Siding Options & Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our premium siding solutions designed for Central New York homes</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Traditional Vinyl */}
                    <div className="siding-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Traditional Vinyl</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Maintenance-free
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Weather resistant
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Multiple colors
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Lifetime warranty
                          </li>
                        </ul>
                        <a href="/contact" className="inline-block bg-ny-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Get Quote</a>
                      </div>
                    </div>

                    {/* Insulated Vinyl */}
                    <div className="siding-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Insulated Vinyl</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Superior insulation
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Noise reduction
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Impact resistant
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Premium quality
                          </li>
                        </ul>
                        <a href="/contact" className="inline-block bg-ny-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Get Quote</a>
                      </div>
                    </div>

                    {/* Designer Series */}
                    <div className="siding-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Designer Series</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Premium styles
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Custom colors
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Unique textures
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Designer accents
                          </li>
                        </ul>
                        <a href="/contact" className="inline-block bg-ny-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Get Quote</a>
                      </div>
                    </div>

                    {/* Premium Trim */}
                    <div className="siding-card bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-ny-black mb-3">Premium Trim</h3>
                        <ul className="text-gray-600 mb-4 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Custom details
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Perfect finish
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Weather sealed
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Low maintenance
                          </li>
                        </ul>
                        <a href="/contact" className="inline-block bg-ny-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Get Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Color Selection */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-ny-black mb-6">Extensive Color Options</h2>
                      <p className="text-xl text-gray-600 mb-8">Choose from over 30 beautiful colors that never fade, chalk, or require repainting. Our advanced ColorHold technology ensures your siding looks beautiful for decades.</p>

                      <div className="grid grid-cols-6 gap-3 mb-8">
                        <div className="color-chip bg-white border-gray-400" title="Arctic White"></div>
                        <div className="color-chip bg-gray-100 border-gray-400" title="Linen"></div>
                        <div className="color-chip bg-yellow-50 border-gray-400" title="Cream"></div>
                        <div className="color-chip bg-yellow-100 border-gray-400" title="Butter"></div>
                        <div className="color-chip bg-amber-100 border-gray-400" title="Wheat"></div>
                        <div className="color-chip bg-orange-100 border-gray-400" title="Peach"></div>
                        <div className="color-chip bg-red-100 border-gray-400" title="Soft Red"></div>
                        <div className="color-chip bg-red-300 border-gray-400" title="Red"></div>
                        <div className="color-chip bg-red-600 border-gray-400" title="Burgundy"></div>
                        <div className="color-chip bg-pink-100 border-gray-400" title="Blush"></div>
                        <div className="color-chip bg-purple-100 border-gray-400" title="Lavender"></div>
                        <div className="color-chip bg-blue-100 border-gray-400" title="Sky Blue"></div>
                        <div className="color-chip bg-blue-300 border-gray-400" title="Blue"></div>
                        <div className="color-chip bg-blue-600 border-gray-400" title="Navy"></div>
                        <div className="color-chip bg-green-100 border-gray-400" title="Mint"></div>
                        <div className="color-chip bg-green-300 border-gray-400" title="Green"></div>
                        <div className="color-chip bg-green-600 border-gray-400" title="Forest"></div>
                        <div className="color-chip bg-yellow-600 border-gray-400" title="Gold"></div>
                        <div className="color-chip bg-orange-400 border-gray-400" title="Orange"></div>
                        <div className="color-chip bg-amber-600 border-gray-400" title="Bronze"></div>
                        <div className="color-chip bg-yellow-800 border-gray-400" title="Tan"></div>
                        <div className="color-chip bg-amber-800 border-gray-400" title="Brown"></div>
                        <div className="color-chip bg-stone-600 border-gray-400" title="Clay"></div>
                        <div className="color-chip bg-gray-400 border-gray-400" title="Gray"></div>
                        <div className="color-chip bg-gray-600 border-gray-400" title="Charcoal"></div>
                        <div className="color-chip bg-gray-800 border-gray-400" title="Slate"></div>
                        <div className="color-chip bg-black border-gray-400" title="Black"></div>
                        <div className="color-chip bg-stone-400 border-gray-400" title="Stone"></div>
                        <div className="color-chip bg-stone-700 border-gray-400" title="Graphite"></div>
                        <div className="color-chip bg-blue-900 border-gray-400" title="Midnight"></div>
                      </div>

                      <p className="text-gray-600">Visit our Idea and Design Center to see full-size color samples and get professional color matching advice.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-xl mx-auto flex items-center justify-center">
                        <span className="text-6xl">🎨</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local Projects Showcase */}
              <section className="py-20 bg-ny-black blueprint-overlay text-white">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Central New York Projects</h2>
                    <p className="text-xl max-w-3xl mx-auto">See our premium siding installations transforming homes throughout our local communities</p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                      <iframe className="w-full aspect-video rounded-lg shadow-lg" 
                              src="https://www.youtube.com/embed/vaIUZS3-IEA" 
                              title="Siding & Windows in Lowville, NY - Customer Testimonial Gerald Edwards"
                              frameBorder="0" 
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen>
                      </iframe>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Complete Remodel - Lowville, NY</h3>
                        <p className="text-gray-300 mb-4">Gerald Edwards shares his experience with our siding and window installation, highlighting the quality and professionalism of our team.</p>
                        <div className="text-ny-red font-semibold">Customer: Gerald Edwards</div>
                      </div>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                      <iframe className="w-full aspect-video rounded-lg shadow-lg" 
                              src="https://www.youtube.com/embed/EBAZ7fczkv0" 
                              title="Installing New Windows, Doors and Vinyl Siding in North Utica"
                              frameBorder="0" 
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen>
                      </iframe>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Full Exterior - North Utica, NY</h3>
                        <p className="text-gray-300 mb-4">Complete home exterior transformation including siding, windows, doors, soffit & fascia, and overhang for local homeowners.</p>
                        <div className="text-ny-red font-semibold">Full Exterior Package</div>
                      </div>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                      <iframe className="w-full aspect-video rounded-lg shadow-lg" 
                              src="https://www.youtube.com/embed/dcZrfkFSTpA" 
                              title="Window, Door and Siding Customers in Ilion"
                              frameBorder="0" 
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen>
                      </iframe>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Multi-Project - Ilion, NY</h3>
                        <p className="text-gray-300 mb-4">Craig and Kim Morse discuss their experience with our comprehensive siding, window, and door installation services.</p>
                        <div className="text-ny-red font-semibold">Customers: Craig & Kim Morse</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Energy Efficiency */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Enhanced Home Comfort</h3>
                      <p className="text-gray-600">Insulated siding significantly improves your home's thermal performance, creating a more comfortable living environment year-round</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>Improved temperature regulation</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>Enhanced insulation performance</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-ny-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>Reduced drafts and cold spots</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-6xl">🌡️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-20 bg-ny-red blueprint-overlay text-white">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home's Exterior?</h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto">Get your free, no-obligation siding estimate today. Our design consultants will help you choose the perfect siding solution for your Central New York home.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="inline-block bg-white text-ny-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">Get Free Estimate</a>
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

export default Siding;