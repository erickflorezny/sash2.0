import React, { useEffect, useState } from 'react';
import WordPressContent from '@/components/WordPressContent';
import MegaFooter from '@/components/MegaFooter';
import { mockPages } from '@/lib/wordpressConfig';

const ContactPage: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<any>(null);

  useEffect(() => {
    // For now, we'll use the mock data. In production, this would come from the GraphQL query
    const contactData = mockPages.contact;
    setContactInfo(contactData.contactInfo);
  }, []);

  const FallbackContent = () => (
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
          .form-input {
            @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent;
          }
          .form-label {
            @apply block text-sm font-medium text-gray-700 mb-2;
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

      {/* Schema.org Markup for Contact Page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "url": "https://newyorksash.com/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "New York Sash",
            "telephone": "+1-315-736-8282",
            "email": "info@newyorksash.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "349 Oriskany Blvd",
              "addressLocality": "Whitesboro",
              "addressRegion": "NY",
              "postalCode": "13492",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.1234",
              "longitude": "-75.2890"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-315-736-8282",
                "contactType": "sales",
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "email": "info@newyorksash.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            ]
          }
        })
      }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {/* Main Background */}
            <div className="absolute inset-0">
              <img src="[PLACEHOLDER_IMAGE_URL_contact_hero_1920x1080.jpg]" alt="New York Sash showroom and design center" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-ny-black via-ny-black/90 to-ny-black/80">
              <div className="h-full w-full blueprint-overlay"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="container mx-auto h-full">
                <div className="absolute right-0 top-1/4 w-96 h-96 border-2 border-ny-red/20 rounded-full"></div>
                <div className="absolute left-0 bottom-1/4 w-64 h-64 border-2 border-ny-red/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-ny-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Free Design Consultation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Let's Create Your
                <span className="text-ny-red">Dream Home</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Start your home transformation journey with a free, no-obligation consultation. Our expert design team is ready to bring your vision to life.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ny-red rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Quick Response</h3>
                      <p className="text-sm text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ny-red rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Financing Available</h3>
                      <p className="text-sm text-gray-300">Flexible options</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ny-red rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Lifetime Warranty</h3>
                      <p className="text-sm text-gray-300">Peace of mind</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ny-red rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Expert Design Team</h3>
                      <p className="text-sm text-gray-300">Professional guidance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#estimate-form" className="bg-ny-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center">
                  <span>Schedule Consultation</span>
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
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img src="[PLACEHOLDER_IMAGE_URL_showroom_1.jpg]" alt="New York Sash showroom displays" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img src="[PLACEHOLDER_IMAGE_URL_showroom_2.jpg]" alt="Design consultation in progress" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img src="[PLACEHOLDER_IMAGE_URL_showroom_3.jpg]" alt="Product samples and displays" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img src="[PLACEHOLDER_IMAGE_URL_showroom_4.jpg]" alt="Professional installation team" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <p className="font-semibold mb-2">Visit Our Showroom</p>
                    <p className="text-gray-300">349 Oriskany Boulevard<br />Whitesboro, NY 13492</p>
                    <p className="text-gray-300 mt-2">Mon-Fri: 8am-8pm<br />Saturday: 8am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-sm mb-2">Get Started Today</p>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that's most convenient for you. We're here to help with all your home improvement needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Call Us</h3>
              <p className="text-gray-700 mb-4">Speak directly with our experts</p>
              <p className="text-2xl font-bold text-red-600 mb-2">(315) 736-8282</p>
              <p className="text-gray-600">Monday - Friday: 8 AM - 5 PM</p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email Us</h3>
              <p className="text-gray-700 mb-4">Send us your questions anytime</p>
              <p className="text-lg font-bold text-red-600 mb-2">info@newyorksash.com</p>
              <p className="text-gray-600">We respond within 24 hours</p>
            </div>

            {/* Visit */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Visit Our Showroom</h3>
              <p className="text-gray-700 mb-4">See products in person</p>
              <p className="font-bold text-red-600 mb-2">349 Oriskany Blvd</p>
              <p className="text-gray-600">Whitesboro, NY 13492</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Estimate Form */}
      <section id="estimate-form" className="py-20 bg-black text-white blueprint-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Request Your Free Estimate</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form className="bg-white rounded-xl p-8 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input type="text" id="name" name="name" required className="form-input" placeholder="Your full name" />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required className="form-input" placeholder="(315) 555-1234" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" id="email" name="email" required className="form-input" placeholder="your@email.com" />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="form-label">City/Town *</label>
                  <input type="text" id="city" name="city" required className="form-input" placeholder="Utica, Rome, Syracuse, etc." />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label htmlFor="address" className="form-label">Street Address</label>
                  <input type="text" id="address" name="address" className="form-input" placeholder="123 Main Street (optional for estimate)" />
                </div>

                {/* Service Interest */}
                <div className="md:col-span-2">
                  <label htmlFor="service" className="form-label">What service are you interested in? *</label>
                  <select id="service" name="service" required className="form-input">
                    <option value="">Select a service</option>
                    <option value="windows">Replacement Windows</option>
                    <option value="siding">Siding Installation</option>
                    <option value="bathrooms">Bathroom Remodeling</option>
                    <option value="doors">Entry Doors</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="md:col-span-2">
                  <label htmlFor="details" className="form-label">Project Details</label>
                  <textarea id="details" name="details" rows={4} className="form-input" placeholder="Tell us about your project - number of windows, rooms to remodel, etc."></textarea>
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="form-label">Preferred Contact Method</label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="phone" className="mr-2 text-red-600" />
                      <span>Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="email" className="mr-2 text-red-600" />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="either" className="mr-2 text-red-600" checked />
                      <span>Either</span>
                    </label>
                  </div>
                </div>

                {/* Best Time */}
                <div>
                  <label htmlFor="best_time" className="form-label">Best Time to Contact</label>
                  <select id="best_time" name="best_time" className="form-input">
                    <option value="anytime">Anytime</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="weekends">Weekends Only</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button type="submit" className="btn-primary text-xl px-12 py-4">
                  Get My Free Estimate
                </button>
                <p className="text-gray-600 mt-4">
                  * Required fields. We'll never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Visit Our Showroom</h3>
              <div className="bg-gray-300 h-80 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map - 349 Oriskany Blvd, Whitesboro, NY</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                  <p className="text-gray-600">Free parking available on-site</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                  <p className="text-gray-600">Wheelchair accessible entrance</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">349 Oriskany Blvd<br />Whitesboro, NY 13492</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700 text-xl font-bold">(315) 736-8282</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">info@newyorksash.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: By appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Emergency */}
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Service</h4>
                  <p className="text-red-700">For urgent window or door repairs, call our emergency line at (315) 736-8282</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Information */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Flexible Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your home improvement dreams affordable with our financing programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="text-5xl text-red-600 mb-4">💳</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">No Interest Options</h3>
              <p className="text-gray-700">12-month same-as-cash financing available for qualified buyers</p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="text-5xl text-red-600 mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Extended Terms</h3>
              <p className="text-gray-700">Low monthly payments with terms up to 120 months</p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="text-5xl text-red-600 mb-4">✅</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Easy Approval</h3>
              <p className="text-gray-700">Quick online application with instant approval decisions</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#estimate-form" className="btn-primary">Learn More About Financing</a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white blueprint-overlay">
        <div className="container mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-red-100">
            Don't wait! Contact New York Sash today and transform your home with quality products and professional installation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#estimate-form" className="btn-primary bg-white text-red-600 hover:bg-gray-100">Get Free Estimate</a>
            <a href="tel:+13157368282" className="btn-secondary">Call (315) 736-8282</a>
          </div>
          <div className="mt-8 text-red-100">
            <p>📍 349 Oriskany Blvd, Whitesboro, NY 13492</p>
            <p className="mt-2">💰 Financing Available | 🛡️ Lifetime Warranty | ⚡ Fast Response Times</p>
          </div>
        </div>
      </section>

      {/* Chat Agent Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-110"
                aria-label="Open Chat">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <WordPressContent 
        slug="contact" 
        fallbackContent={<FallbackContent />}
        className="min-h-screen bg-white"
      />
      <MegaFooter />
    </div>
  );
};

export default ContactPage;