import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Autobeveiliging Nederland</h3>
            <p className="text-gray-400 mb-4">
              Elektronica specialist inbouw op locatie in heel Nederland
            </p>
            <p className="text-gray-400">
              Gevestigd in Uden, werkzaam in heel Nederland
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/track-trace" className="text-gray-400 hover:text-white transition-colors">
                  Track & Trace Systemen
                </Link>
              </li>
              <li>
                <Link to="/elektronica-inbouw" className="text-gray-400 hover:text-white transition-colors">
                  Elektronica Inbouw
                </Link>
              </li>
              <li>
                <Link to="/scm-alarmsystemen" className="text-gray-400 hover:text-white transition-colors">
                  SCM Alarmsystemen
                </Link>
              </li>
              <li>
                <Link to="/ramen-tinten" className="text-gray-400 hover:text-white transition-colors">
                  Ramen Tinten
                </Link>
              </li>
              <li>
                <Link to="/blu-eye" className="text-gray-400 hover:text-white transition-colors">
                  Blu Eye Systeem
                </Link>
              </li>
              <li>
                <Link to="/lasertrack" className="text-gray-400 hover:text-white transition-colors">
                  LaserTrack Flare
                </Link>
              </li>
              <li>
                <Link to="/schadeherstel" className="text-gray-400 hover:text-white transition-colors">
                  Diefstal Schadeherstel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:0851305665" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  085-1305665
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@autobeveiligingnederland.nl" className="text-gray-400 hover:text-white transition-colors">
                  info@autobeveiligingnederland.nl
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Uden, Nederland</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certificeringen</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kiwa SCM Gecertificeerd</li>
              <li>CCV Voertuigbeveiliging</li>
              <li>Rtregistratiesystemen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Autobeveiliging Nederland. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
