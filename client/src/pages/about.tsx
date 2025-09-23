import React from 'react';
import WordPressContent from '@/components/WordPressContent';
import MegaFooter from '@/components/MegaFooter';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
        <WordPressContent
          slug="about"
          fallbackContent={
            <div>
              {/* Custom Styles */}
              <style dangerouslySetInnerHTML={{
                __html: `
                  body { font-family: 'Inter', sans-serif; }
                  .blueprint-overlay {
                    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                    position: relative;
                  }
                  .blueprint-overlay::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                    pointer-events: none;
                  }
                  .btn-primary {
                    @apply bg-red-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-lg;
                  }
                  .btn-secondary {
                    @apply bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg shadow-lg hover:bg-red-50 hover:text-red-700 transition duration-300 ease-in-out font-semibold text-lg;
                  }
                  .timeline-item {
                    @apply flex items-center mb-8;
                  }
                  .timeline-year {
                    @apply flex-shrink-0 w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6;
                  }
                  ::-webkit-scrollbar {
                    width: 8px;
                  }
                  ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                  }
                  ::-webkit-scrollbar-thumb {
                    background: #dc2626;
                    border-radius: 10px;
                  }
                  ::-webkit-scrollbar-thumb:hover {
                    background: #b91c1c;
                  }
                `
              }} />

              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                  <div className="relative h-full">
                    <div className="absolute inset-0">
                      <img src="[PLACEHOLDER_IMAGE_URL_about_hero_1920x1080.jpg]" alt="New York Sash team and showroom" className="w-full h-full object-cover" loading="lazy" />
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

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <div className="inline-block bg-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        Serving Central New York Since 1988
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building Trust for
                        <span className="text-red-600">Over 35 Years</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        From our humble beginnings to becoming Central New York's most trusted home improvement company, our commitment to quality and customer satisfaction remains unchanged.
                      </p>
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center bg-white/10 rounded-lg p-6">
                          <div className="text-4xl font-bold text-red-600 mb-2">35+</div>
                          <p className="text-gray-300">Years of Excellence</p>
                        </div>
                        <div className="text-center bg-white/10 rounded-lg p-6">
                          <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
                          <p className="text-gray-300">Projects Completed</p>
                        </div>
                        <div className="text-center bg-white/10 rounded-lg p-6">
                          <div className="text-4xl font-bold text-red-600 mb-2">4.9★</div>
                          <p className="text-gray-300">Customer Rating</p>
                        </div>
                        <div className="text-center bg-white/10 rounded-lg p-6">
                          <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                          <p className="text-gray-300">Communities Served</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center">
                          <span>Meet Our Team</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                          </svg>
                        </a>
                        <a href="/showroom" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
                          </svg>
                          <span>Visit Showroom</span>
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="relative">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-2xl"></div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative">
                          <div className="aspect-video rounded-lg overflow-hidden mb-8">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/3wKPyfZBFCM" title="About New York Sash" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <img src="[PLACEHOLDER_IMAGE_URL_epa_certified_badge.png]" alt="EPA Certified" className="h-16 mx-auto mb-2" loading="lazy" />
                              <p className="text-white text-sm">EPA Certified</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <img src="[PLACEHOLDER_IMAGE_URL_energy_star_badge.png]" alt="ENERGY STAR Partner" className="h-16 mx-auto mb-2" loading="lazy" />
                              <p className="text-white text-sm">ENERGY STAR</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <img src="[PLACEHOLDER_IMAGE_URL_bbb_badge.png]" alt="BBB A+ Rating" className="h-16 mx-auto mb-2" loading="lazy" />
                              <p className="text-white text-sm">BBB A+ Rated</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Company Overview */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Your Trusted Local Partner</h2>
                      <p className="text-xl text-gray-700 mb-6">
                        For over four decades, New York Sash has been Central New York's premier home improvement company. What started as a small family business has grown into the region's most trusted name for windows, siding, bathrooms, and entry doors.
                      </p>
                      <p className="text-lg text-gray-700 mb-6">
                        We understand that your home is your most important investment. That's why we're committed to providing the highest quality products, expert installation, and exceptional customer service that has earned us thousands of satisfied customers and an A+ rating with the Better Business Bureau.
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-600">5,000+</div>
                          <div className="text-gray-600">Homes Transformed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-600">45+</div>
                          <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-600">100%</div>
                          <div className="text-gray-600">Satisfaction Guarantee</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-600">A+</div>
                          <div className="text-gray-600">BBB Rating</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="/src/assets/nysash-showroom.webp" alt="New York Sash Showroom" className="w-full rounded-lg shadow-lg" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Story Timeline */}
              <section id="our-story" className="py-20 bg-black text-white blueprint-overlay">
                <div className="container mx-auto px-4 relative z-10">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      From humble beginnings to regional leader - see how we've grown while maintaining our commitment to quality and service.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="timeline-item">
                      <div className="timeline-year">1979</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Company Founded</h3>
                        <p className="text-gray-300">New York Sash was established as a family-owned business with a simple mission: provide quality home improvement products and exceptional service to Central New York homeowners.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-year">1985</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">First Showroom Opens</h3>
                        <p className="text-gray-300">Opened our first showroom in Whitesboro, NY, allowing customers to see and touch our products before making decisions. This hands-on approach became a cornerstone of our business.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-year">1995</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Expanding Services</h3>
                        <p className="text-gray-300">Added bathroom remodeling and entry door installation to our services, becoming a full-service home improvement company.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-year">2000</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">ENERGY STAR Partnership</h3>
                        <p className="text-gray-300">Became an ENERGY STAR partner, focusing on energy-efficient products that help homeowners save money and reduce environmental impact.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-year">2010</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Advanced Installation Training</h3>
                        <p className="text-gray-300">Implemented comprehensive training programs for our installation teams, ensuring every project meets the highest standards of quality and craftsmanship.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-year">2020</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Digital Innovation</h3>
                        <p className="text-gray-300">Embraced digital tools and virtual consultations to better serve customers while maintaining our personal touch and commitment to excellence.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-year">Today</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Leading the Industry</h3>
                        <p className="text-gray-300">Continuing to lead Central New York's home improvement industry with innovative products, expert installation, and unmatched customer service.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Values */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Core Values</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      These principles guide everything we do and ensure every customer receives the exceptional experience they deserve.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl text-center">
                      <div className="text-5xl text-red-600 mb-4">🤝</div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Integrity</h3>
                      <p className="text-gray-700">We believe in honest communication, fair pricing, and always doing what's right for our customers.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl text-center">
                      <div className="text-5xl text-red-600 mb-4">⭐</div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
                      <p className="text-gray-700">We use only the finest products and employ skilled craftsmen who take pride in their work.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl text-center">
                      <div className="text-5xl text-red-600 mb-4">💬</div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Service</h3>
                      <p className="text-gray-700">Every customer interaction is an opportunity to exceed expectations and build lasting relationships.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl text-center">
                      <div className="text-5xl text-red-600 mb-4">🏠</div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Community</h3>
                      <p className="text-gray-700">We're proud to be part of Central New York and support our local communities.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl text-center">
                      <div className="text-5xl text-red-600 mb-4">🔧</div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Expertise</h3>
                      <p className="text-gray-700">Continuous training and education ensure our team stays at the forefront of industry innovations.</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl text-center">
                      <div className="text-5xl text-red-600 mb-4">🌱</div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Sustainability</h3>
                      <p className="text-gray-700">We promote energy-efficient solutions that benefit both our customers and the environment.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications & Awards */}
              <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Certifications & Recognition</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Our commitment to excellence has earned us industry recognition and the trust of our customers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                      <img src="https://placehold.co/150x100/000000/FFFFFF?text=BBB+A%2B" alt="BBB A+ Rating" className="w-24 h-16 mx-auto mb-4 object-contain" />
                      <h3 className="font-bold text-gray-900">Better Business Bureau</h3>
                      <p className="text-gray-600">A+ Rating</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                      <img src="https://placehold.co/150x100/000000/FFFFFF?text=ENERGY+STAR" alt="ENERGY STAR Partner" className="w-24 h-16 mx-auto mb-4 object-contain" />
                      <h3 className="font-bold text-gray-900">ENERGY STAR</h3>
                      <p className="text-gray-600">Certified Partner</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                      <img src="https://placehold.co/150x100/000000/FFFFFF?text=Licensed" alt="Licensed Contractor" className="w-24 h-16 mx-auto mb-4 object-contain" />
                      <h3 className="font-bold text-gray-900">Licensed</h3>
                      <p className="text-gray-600">Fully Licensed Contractor</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                      <img src="https://placehold.co/150x100/000000/FFFFFF?text=Insured" alt="Fully Insured" className="w-24 h-16 mx-auto mb-4 object-contain" />
                      <h3 className="font-bold text-gray-900">Insured</h3>
                      <p className="text-gray-600">Comprehensive Coverage</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Team Section */}
              <section className="py-20 bg-black text-white blueprint-overlay">
                <div className="container mx-auto px-4 relative z-10">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Dedicated professionals who bring expertise, passion, and personal attention to every project.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white text-gray-900 rounded-xl p-6 text-center">
                      <img src="https://placehold.co/200x200/000000/FFFFFF?text=Team+Member" alt="Sales Manager" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                      <h3 className="text-xl font-bold mb-2">Sales Manager</h3>
                      <p className="text-red-600 font-semibold mb-3">Lead Consultant</p>
                      <p className="text-gray-700">Over 15 years helping homeowners choose the perfect solutions for their homes.</p>
                    </div>

                    <div className="bg-white text-gray-900 rounded-xl p-6 text-center">
                      <img src="https://placehold.co/200x200/000000/FFFFFF?text=Team+Member" alt="Installation Manager" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                      <h3 className="text-xl font-bold mb-2">Installation Manager</h3>
                      <p className="text-red-600 font-semibold mb-3">Master Craftsman</p>
                      <p className="text-gray-700">20+ years of installation expertise ensuring every project exceeds expectations.</p>
                    </div>

                    <div className="bg-white text-gray-900 rounded-xl p-6 text-center">
                      <img src="https://placehold.co/200x200/000000/FFFFFF?text=Team+Member" alt="Customer Service Manager" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                      <h3 className="text-xl font-bold mb-2">Customer Service Manager</h3>
                      <p className="text-red-600 font-semibold mb-3">Customer Advocate</p>
                      <p className="text-gray-700">Dedicated to ensuring every customer has an exceptional experience from start to finish.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Community Involvement */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Community Commitment</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      We're proud to support our Central New York communities through sponsorships, charitable giving, and volunteer work.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-gray-900">Supporting Our Neighbors</h3>
                      <ul className="space-y-4 text-lg text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">•</span>
                          Annual sponsorship of local youth sports teams
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">•</span>
                          Donations to Habitat for Humanity builds
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">•</span>
                          Support for local schools and educational programs
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">•</span>
                          Emergency home repairs for seniors and veterans
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-3">•</span>
                          Participation in community festivals and events
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img src="https://placehold.co/600x400/000000/FFFFFF?text=Community+Support" alt="Community Involvement" className="w-full rounded-lg shadow-lg" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-20 bg-red-600 text-white blueprint-overlay">
                <div className="container mx-auto text-center px-4 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the New York Sash Difference</h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
                    Join thousands of satisfied customers who have trusted us with their home improvement projects. Contact us today to see why we're Central New York's preferred choice.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="/contact" className="btn-primary bg-white text-red-600 hover:bg-gray-100">Get Free Estimate</a>
                    <a href="tel:+13157368282" className="btn-secondary">Call (315) 736-8282</a>
                  </div>
                  <div className="mt-8 text-red-100">
                    <p>📍 349 Oriskany Blvd, Whitesboro, NY 13492</p>
                    <p className="mt-2">🏆 Family-Owned Since 1988 | 🛡️ A+ BBB Rating | ⭐ ENERGY STAR Partner</p>
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

export default About;