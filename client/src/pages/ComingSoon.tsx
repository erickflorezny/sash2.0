import { Link } from 'wouter';
import MegaFooter from '@/components/MegaFooter';

export default function ComingSoon() {
  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-ny-black mb-6">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-ny-black mb-8">
                Exciting new features are on their way to enhance your New York Sash experience
              </p>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AI Chat Agent Card */}
              <div className="bg-ny-red p-8 text-white">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-robot text-ny-red text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Chat Agent</h3>
                  <p className="text-white leading-relaxed">
                    Chat with our intelligent AI agent to get personalized information about your home improvement project.
                    Get instant answers about our services, pricing, timelines, and more - available 24/7.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-ny-red text-sm font-medium">Instant Responses</span>
                  <span className="px-3 py-1 bg-white text-ny-red text-sm font-medium">24/7 Available</span>
                  <span className="px-3 py-1 bg-white text-ny-red text-sm font-medium">Personalized</span>
                </div>
              </div>

              {/* Client Portal Card */}
              <div className="bg-ny-black p-8 text-white">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-person-workspace text-ny-black text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Client Portal</h3>
                  <p className="text-white leading-relaxed">
                    Track your project progress in real-time with our secure client portal. View photos,
                    timelines, communicate with your project team, and stay updated every step of the way.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-ny-black text-sm font-medium">Real-time Updates</span>
                  <span className="px-3 py-1 bg-white text-ny-black text-sm font-medium">Photo Gallery</span>
                  <span className="px-3 py-1 bg-white text-ny-black text-sm font-medium">Team Chat</span>
                </div>
              </div>
            </div>



            {/* Notification Signup */}
            <div className="bg-ny-black p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
              <p className="text-white mb-6">
                Join our notification list to be alerted when these exciting new features go live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 text-ny-black placeholder-ny-black border-2 border-ny-black focus:outline-none focus:border-ny-red"
                />
                <button className="px-6 py-3 bg-ny-red hover:bg-ny-black text-white font-semibold transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-3 bg-ny-red hover:bg-ny-black text-white font-semibold transition-colors">
                Return to Homepage
              </button>
            </Link>
            <a
              href="tel:+13156247344"
              className="px-8 py-3 border-2 border-ny-black text-ny-black hover:bg-ny-black hover:text-white font-semibold transition-colors"
            >
              Call Us: (315) 624-7344
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-ny-black text-sm">
            <p>Have questions about our upcoming features? Contact us at <a href="mailto:info@newyorksash.com" className="text-ny-red hover:underline">info@newyorksash.com</a></p>
          </div>
        </div>
      </div>

      <MegaFooter />
    </div>
  );
}