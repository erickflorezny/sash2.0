import { Button } from "./ui/button"
import { Link } from "wouter"
import { useState } from "react"
import logoImage from '@/assets/new-york-sash-logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="relative w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-4 hidden lg:block">
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
            <Link href="/" className="flex-shrink-0">
              <img
                src={logoImage}
                alt="New York Sash"
                className="h-16 w-auto"
                style={{ maxWidth: 'auto' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 items-center justify-between mx-8">
              {/* Center Links */}
              <div className="flex-1 flex justify-center space-x-2">
                <div className="relative group">
                  <Link href="/about" className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                    About Us
                    <i className="bi bi-chevron-down text-sm opacity-50"></i>
                  </Link>
                  {/* Dropdown menu for About Us */}
                  <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/showroom" className="flex items-center gap-2">
                          Showroom
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/meet-our-team" className="flex items-center gap-2">
                          Meet Our Team
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/job-openings" className="flex items-center gap-2">
                          Job Openings
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/windows" className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                    Windows
                    <i className="bi bi-chevron-down text-sm opacity-50"></i>
                  </Link>
                  {/* Dropdown menu for Windows */}
                  <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/windows/double-hung-windows" className="flex items-center gap-2">
                          Double Hung Windows
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/windows/bay-bow-picture-windows" className="flex items-center gap-2">
                          Bay, Bow and Picture Windows
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/windows/slider-windows" className="flex items-center gap-2">
                          Slider Windows
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/windows/awning-windows" className="flex items-center gap-2">
                          Awning Windows
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/windows/hopper-windows" className="flex items-center gap-2">
                          Hopper Windows
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/siding" className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                    Siding
                    <i className="bi bi-chevron-down text-sm opacity-50"></i>
                  </Link>
                  {/* Dropdown menu for Siding */}
                  <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/siding/engineered-wood-siding" className="flex items-center gap-2">
                          Engineered Wood Siding
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/siding/reinforced-vinyl-siding" className="flex items-center gap-2">
                          Reinforced Vinyl Siding
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/siding/traditional-vinyl-siding" className="flex items-center gap-2">
                          Traditional Vinyl Siding
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/siding/cedar-shake-vinyl-siding" className="flex items-center gap-2">
                          Cedar Shake Vinyl Siding
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/siding/board-batten-vertical-vinyl-siding" className="flex items-center gap-2">
                          Board & Batten Vertical Vinyl Siding
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/siding/stacked-stone" className="flex items-center gap-2">
                          Stacked Stone
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/bathrooms" className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                    Baths
                    <i className="bi bi-chevron-down text-sm opacity-50"></i>
                  </Link>
                  {/* Dropdown menu for Bathrooms */}
                  <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/bathrooms/TubToShowerConversion" className="flex items-center gap-2">
                          Tub To Shower Conversion
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/bathrooms/SafetyTubs" className="flex items-center gap-2">
                          Safety Tubs
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/bathrooms/ShowerDoors" className="flex items-center gap-2">
                          Shower Doors
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/bathrooms/Toilets" className="flex items-center gap-2">
                          Toilets
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/bathrooms/Accessories" className="flex items-center gap-2">
                          Accessories
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/bathrooms/ColorTextureOptions" className="flex items-center gap-2">
                          Color & Texture Options
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/doors" className="px-3 py-2 text-gray-800 hover:text-red-600 text-xl font-bold transition-colors flex items-center gap-1">
                    Doors
                    <i className="bi bi-chevron-down text-sm opacity-50"></i>
                  </Link>
                  {/* Dropdown menu for Doors */}
                  <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/doors/EntryDoors" className="flex items-center gap-2">
                          Entry Doors
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/doors/StormDoors" className="flex items-center gap-2">
                          Storm Doors
                        </Link>
                      </div>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                        <Link href="/doors/PatioDoors" className="flex items-center gap-2">
                          Patio Doors
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Buttons */}
              <div className="hidden xl:flex space-x-4">
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-4 space-y-4">
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-800 hover:text-red-600 text-lg font-bold">
                  About Us
                </Link>
                <Link href="/windows" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-800 hover:text-red-600 text-lg font-bold">
                  Windows
                </Link>
                <Link href="/siding" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-800 hover:text-red-600 text-lg font-bold">
                  Siding
                </Link>
                <Link href="/bathrooms" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-800 hover:text-red-600 text-lg font-bold">
                  Baths
                </Link>
                <Link href="/doors" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-800 hover:text-red-600 text-lg font-bold">
                  Doors
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="default" className="bg-black hover:bg-gray-800 text-white w-full">
                      <i className="bi bi-chat-dots-fill mr-2"></i>
                      Chat with AI
                    </Button>
                  </Link>
                  <Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white w-full">
                      Client Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header