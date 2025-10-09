import { Link } from 'react-router-dom'
import { ArrowLeft, Eye, AlertTriangle, Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function BluEyePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Target Blu Eye - Emergency Vehicle Detection</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Detecteert hulpdiensten voordat ze zichtbaar zijn. TETRA technologie voor maximale veiligheid op de weg.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eye className="h-24 w-24 text-orange-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Wat is Target Blu Eye?</h2>
              <p className="text-xl text-gray-600">
                Blu Eye is een innovatief waarschuwingssysteem dat TETRA-signalen van hulpdiensten detecteert voordat u ze kunt zien of horen. Dit geeft u cruciale extra seconden om veilig plaats te maken.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vroege Waarschuwing</h3>
                <p className="text-gray-600">Detectie tot 1500 meter afstand</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                  <Eye className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">TETRA Technologie</h3>
                <p className="text-gray-600">Gebruikt door alle Nederlandse hulpdiensten</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                  <Check className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Eenvoudige Installatie</h3>
                <p className="text-gray-600">Plug & play systeem</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Voordelen van Blu Eye</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Verhoogde verkeersveiligheid voor u en hulpdiensten</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Detectie van politie, ambulance en brandweer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Werkt ook bij druk verkeer en slecht weer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Visuele en audio waarschuwingen</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Geen abonnementskosten</span>
                </li>
              </ul>
            </div>

            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-center mb-4">Target Blu Eye 2 in Actie</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Bekijk hoe de Blu Eye 2 eenvoudig in de binnenspiegel wordt gemonteerd en hoe het systeem werkt
              </p>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  {/* Placeholder voor YouTube/Vimeo embed */}
                  <div className="text-center p-8">
                    <Eye className="h-24 w-24 text-orange-600 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-gray-700 mb-2">Video komt binnenkort</p>
                    <p className="text-gray-600">
                      Hier komt een demonstratievideo van de Blu Eye 2 installatie in de binnenspiegel
                    </p>
                    <div className="mt-6 text-sm text-gray-500">
                      <p>Om uw eigen video toe te voegen, vervang deze sectie met:</p>
                      <code className="block mt-2 bg-white p-2 rounded text-xs">
                        &lt;iframe src="YOUR_YOUTUBE_OR_VIMEO_URL" ...&gt;&lt;/iframe&gt;
                      </code>
                    </div>
                  </div>
                  {/* 
                  Vervang bovenstaande div met onderstaande code wanneer u een video heeft:
                  
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Blu Eye 2 Demonstratie"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  */}
                </div>
              </div>
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Tip:</strong> In de video ziet u hoe de Blu Eye 2 discreet in uw binnenspiegel wordt geïntegreerd 
                  en hoe het systeem u waarschuwt wanneer hulpdiensten in de buurt zijn.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-600">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Target Blu Eye 2 Spiegelmontage</h3>
                <p className="text-gray-600">Inclusief professionele installatie door Autobeveiliging Nederland</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-orange-600">€1449,-</span>
                <p className="text-sm text-gray-500 mt-2">Eenmalig, geen abonnementskosten</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange-600 mr-3" />
                  <span>Blu Eye detector unit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange-600 mr-3" />
                  <span>Display module</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange-600 mr-3" />
                  <span>Alle benodigde kabels</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange-600 mr-3" />
                  <span>Professionele installatie</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange-600 mr-3" />
                  <span>Uitleg en instructies</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-orange-600 mr-3" />
                  <span>1 jaar garantie</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Bestel Nu
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in Blu Eye?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor meer informatie of om direct een afspraak te maken voor installatie
          </p>
          <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
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
