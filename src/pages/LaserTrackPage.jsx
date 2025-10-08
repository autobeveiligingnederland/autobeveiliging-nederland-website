import { Link } from 'react-router-dom'
import { ArrowLeft, Zap, Shield, Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function LaserTrackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">LaserTrack Flare - Laser Protection</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Multifunctionele afstandsbediening met geavanceerde laser snelheidsmeting bescherming voor uw voertuig.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Zap className="h-24 w-24 text-red-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Wat is LaserTrack Flare?</h2>
              <p className="text-xl text-gray-600">
                LaserTrack Flare is een geavanceerd systeem dat laser-gebaseerde snelheidsmetingen detecteert en u waarschuwt. Daarnaast fungeert het als een multifunctionele afstandsbediening voor uw voertuigbeveiligingssysteem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Laser Detectie</h3>
                <p className="text-gray-600">Detecteert laser snelheidsmetingen</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multifunctioneel</h3>
                <p className="text-gray-600">Bedient uw alarmsysteem</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <Check className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compact Design</h3>
                <p className="text-gray-600">Handzame afstandsbediening</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Functies van LaserTrack Flare</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Detectie van laser snelheidsmetingen</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Visuele en audio waarschuwingen</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bediening van alarmsysteem</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Compact en draagbaar</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Lange batterijduur</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-600">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">LaserTrack Flare Systeem</h3>
                <p className="text-gray-600">Inclusief professionele installatie door Autobeveiliging Nederland</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-red-600">€549,-</span>
                <p className="text-sm text-gray-500 mt-2">Eenmalig, geen abonnementskosten</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span>LaserTrack Flare unit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span>Laser detectie sensoren</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span>Afstandsbediening functionaliteit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span>Professionele installatie</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span>Uitleg en instructies</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-red-600 mr-3" />
                  <span>1 jaar garantie</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Bestel Nu
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in LaserTrack?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor meer informatie of om direct een afspraak te maken voor installatie
          </p>
          <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel Direct
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
