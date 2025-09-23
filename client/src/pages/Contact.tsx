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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">Contact New York Sash</h1>
        <p className="text-xl text-gray-600 mb-12">
          Ready to transform your home? Contact us today for a free consultation and estimate.
        </p>
        
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-telephone-fill text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#111827]">Call Us</h3>
            <p className="text-gray-600 mb-3">Speak directly with our experts</p>
            <a href="tel:+13156247344" className="text-2xl font-bold text-red-600 hover:text-red-700">
              (315) 624-7344
            </a>
            <p className="text-gray-500 mt-2 text-sm">Monday - Friday: 8AM - 6PM</p>
          </div>

          {/* Email */}
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-envelope-fill text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#111827]">Email Us</h3>
            <p className="text-gray-600 mb-3">Send us your questions anytime</p>
            <a href="mailto:info@newyorksash.com" className="text-lg font-bold text-red-600 hover:text-red-700">
              info@newyorksash.com
            </a>
            <p className="text-gray-500 mt-2 text-sm">We respond within 24 hours</p>
          </div>

          {/* Visit */}
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-geo-alt-fill text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#111827]">Visit Our Showroom</h3>
            <p className="text-gray-600 mb-3">See products in person</p>
            <div className="font-bold text-red-600">
              <p>349 Oriskany Blvd</p>
              <p>Whitesboro, NY 13492</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111827] rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Request Your Free Estimate</h2>
          <p className="text-gray-300 text-center mb-8">
            Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
          </p>
          
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="(315) 555-1234"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2">City/Town *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Utica, Rome, Syracuse, etc."
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest *</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="windows">Replacement Windows</option>
                <option value="siding">Siding Installation</option>
                <option value="bathrooms">Bathroom Remodeling</option>
                <option value="doors">Entry Doors</option>
                <option value="multiple">Multiple Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="details" className="block text-sm font-medium mb-2">Project Details</label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Tell us about your project - number of windows, rooms to remodel, etc."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get My Free Estimate
              </button>
              <p className="text-gray-400 mt-4 text-sm">
                * Required fields. We'll never share your information.
              </p>
            </div>
          </form>
        </div>

        {/* Location & Hours */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#111827]">Visit Our Showroom</h3>
            <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <i className="bi bi-geo-alt-fill text-4xl mb-2"></i>
                <p className="font-semibold">Interactive Map</p>
                <p>349 Oriskany Blvd, Whitesboro, NY 13492</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#111827] mb-2">Parking</h4>
                <p className="text-gray-600">Free parking available on-site</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#111827] mb-2">Accessibility</h4>
                <p className="text-gray-600">Wheelchair accessible entrance</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#111827]">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#111827] mb-1">Address</h4>
                  <p className="text-gray-700">349 Oriskany Blvd<br />Whitesboro, NY 13492</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#111827] mb-1">Phone</h4>
                  <a href="tel:+13156247344" className="text-xl font-bold text-red-600 hover:text-red-700">
                    (315) 624-7344
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#111827] mb-1">Email</h4>
                  <a href="mailto:info@newyorksash.com" className="text-gray-700 hover:text-red-600">
                    info@newyorksash.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-[#111827] mb-1">Business Hours</h4>
                  <div className="text-gray-700">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Service</h4>
                <p className="text-red-700">For urgent window or door repairs, call our emergency line at (315) 624-7344</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financing Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#111827]">Flexible Financing Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-credit-card text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#111827]">No Interest Options</h3>
              <p className="text-gray-600">12-month same-as-cash financing available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-graph-up text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#111827]">Extended Terms</h3>
              <p className="text-gray-600">Low monthly payments with terms up to 120 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-check-circle text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#111827]">Easy Approval</h3>
              <p className="text-gray-600">Quick online application with instant decisions</p>
            </div>
          </div>
        </div>
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