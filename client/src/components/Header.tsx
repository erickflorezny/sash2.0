import { Button } from "./ui/button"
import { Link } from "wouter"
import logoImage from '@/assets/new-york-sash-logo.png'

const Header = () => {
  return (
    <header className="relative w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="relative h-6 overflow-hidden" style={{ minWidth: '400px' }}>
              <div className="animate-[slide_8s_linear_infinite]">
                <div className="h-6 flex items-center">
                  <a 
                    href="https://www.google.com/maps?rlz=1C1ONGR_enUS1067US1067&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDI4MTFqMGo3qAIIsAIB8QWB3hruPFTbNPEFgd4a7jxU2zQ&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVcee15kQNmJMQwghSfDXKGu&daddr=349+Oriskany+Blvd,+Whitesboro,+NY+13492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 flex items-center"
                  >
                    <i className="bi bi-pin-map mr-2"></i>
                    <span>Visit Our Showroom</span>
                  </a>
                  <span className="mx-2">•</span>
                  <span>Weekdays: 8AM - 6PM, Saturday: 9AM - 1PM</span>
                </div>
                <a 
                  href="tel:3156247344"
                  className="h-6 flex items-center hover:text-gray-200"
                >
                  <i className="bi bi-telephone mr-2"></i>
                  <span>Call Us: (315) 624-7344 • Our Operators Are Standing By</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <span className="text-red-500">Now Hiring:</span>
                <span>We're looking for motivated installers. No experience necessary.</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.facebook.com/NYSash" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook text-xl"></i>
                </a>
                <a href="https://www.instagram.com/newyorksash/" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0%, 45% {
              transform: translateY(0);
            }
            50%, 95% {
              transform: translateY(-24px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <a className="flex-shrink-0">
                <img
                  src={logoImage}
                  alt="New York Sash"
                  className="h-16 w-auto"
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 items-center justify-between mx-8">
              {/* Center Links */}
              <div className="flex-1 flex justify-center space-x-2">
                <div className="relative group">
                  <Link href="/about">
                    <a className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                      About Us
                      <i className="bi bi-chevron-down text-sm opacity-50"></i>
                    </a>
                  </Link>
                </div>
                <div className="relative group">
                  <Link href="/windows">
                    <a className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                      Windows
                      <i className="bi bi-chevron-down text-sm opacity-50"></i>
                    </a>
                  </Link>
                </div>
                <div className="relative group">
                  <Link href="/siding">
                    <a className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                      Siding
                      <i className="bi bi-chevron-down text-sm opacity-50"></i>
                    </a>
                  </Link>
                </div>
                <div className="relative group">
                  <Link href="/bathrooms">
                    <a className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                      Baths
                      <i className="bi bi-chevron-down text-sm opacity-50"></i>
                    </a>
                  </Link>
                </div>
                <div className="relative group">
                  <Link href="/doors">
                    <a className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                      Doors
                      <i className="bi bi-chevron-down text-sm opacity-50"></i>
                    </a>
                  </Link>
                </div>
              </div>
              {/* Right Buttons */}
              <div className="flex space-x-4">
            
                <Link href="/coming-soon">
                  <Button variant="default" className="bg-black hover:bg-gray-800 text-white">
                    <i className="bi bi-chat-dots-fill mr-2"></i>
                    Chat with AI
                  </Button>
                </Link>
                <Link href="/coming-soon">
                  <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                    Client Login
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header