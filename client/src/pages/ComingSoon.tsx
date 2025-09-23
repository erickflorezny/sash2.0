import { Link } from 'wouter';
import MegaFooter from '@/components/MegaFooter';

export default function ComingSoon() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Exciting new features are on their way to enhance your New York Sash experience
              </p>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AI Chat Agent Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-robot text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-4">AI Chat Agent</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chat with our intelligent AI agent to get personalized information about your home improvement project. 
                    Get instant answers about our services, pricing, timelines, and more - available 24/7.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Instant Responses</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">24/7 Available</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Personalized</span>
                </div>
              </div>

              {/* Client Portal Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-person-workspace text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-4">Client Portal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track your project progress in real-time with our secure client portal. View photos, 
                    timelines, communicate with your project team, and stay updated every step of the way.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Real-time Updates</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Photo Gallery</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Team Chat</span>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h3 className="text-2xl font-bold text-[#111827] mb-6">And Much More...</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="bi bi-calendar-check text-red-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Smart Scheduling</h4>
                    <p className="text-gray-600 text-sm">Book consultations and appointments online with our intelligent scheduling system.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="bi bi-camera text-yellow-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Virtual Consultations</h4>
                    <p className="text-gray-600 text-sm">Get expert advice from the comfort of your home with video consultations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="bi bi-graph-up text-indigo-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1">Project Analytics</h4>
                    <p className="text-gray-600 text-sm">Track project milestones, costs, and completion status with detailed analytics.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Signup */}
            <div className="bg-gradient-to-r from-[#111827] to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
              <p className="text-gray-300 mb-6">
                Join our notification list to be alerted when these exciting new features go live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                Return to Homepage
              </button>
            </Link>
            <a 
              href="tel:+13156247344"
              className="px-8 py-3 border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white font-semibold rounded-lg transition-colors"
            >
              Call Us: (315) 624-7344
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-gray-500 text-sm">
            <p>Have questions about our upcoming features? Contact us at <a href="mailto:info@newyorksash.com" className="text-red-600 hover:underline">info@newyorksash.com</a></p>
          </div>
        </div>
      </div>

      <MegaFooter />
    </div>
  );
}