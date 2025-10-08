import { Link } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Track & Trace', path: '/track-trace' },
    { name: 'Elektronica Inbouw', path: '/elektronica-inbouw' },
    { name: 'Ramen Tinten', path: '/ramen-tinten' },
    { name: 'Blu Eye', path: '/blu-eye' },
    { name: 'LaserTrack', path: '/lasertrack' },
    { name: 'Schadeherstel', path: '/schadeherstel' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Autobeveiliging Nederland" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Autobeveiliging Nederland</span>
              <span className="text-xs text-gray-600">Elektronica Specialist</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                06-50744574
              </Button>
            </a>
          </div>

          {/* Mobiel Menu Button*/}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer" className="pt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  06-50744574
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
