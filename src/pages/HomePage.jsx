import { Link } from 'react-router-dom'
import { Phone, MapPin, Shield, CheckCircle, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import gpsTracking from '@/assets/gps-tracking.jpg'
import carAlarm from '@/assets/car-alarm.jpg'
import windowTinting from '@/assets/window-tinting.jpg'

export default function HomePage() {
  const scrollToDiensten = () => {
    document.getElementById('diensten')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Autobeveiliging Nederland
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-300">
              Track & Trace Specialists - Mobiele Inbouw op Locatie
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Professionele voertuigbeveiliging, GPS tracking, ramen tinten en elektronica inbouw. 
              Wij komen naar u toe voor SCM-gecertificeerde installaties in heel Nederland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0650744574">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Direct Contact
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8"
                onClick={scrollToDiensten}
              >
                Onze Diensten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service op Locatie</h3>
              <p className="text-gray-600">Wij komen naar u toe in heel Nederland</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">SCM Gecertificeerd</h3>
              <p className="text-gray-600">Erkende en gecertificeerde technici</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kwaliteitsgarantie</h3>
              <p className="text-gray-600">A-merk producten en vakkundige installatie</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Snelle Service</h3>
              <p className="text-gray-600">Flexibele planning en snelle uitvoering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Onze Specialiteiten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van GPS tracking systemen tot complete voertuigbeveiliging - wij zorgen voor professionele elektronica inbouw op uw locatie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Track & Trace */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <img src={gpsTracking} alt="GPS Tracking" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Track & Trace Systemen</h3>
                <p className="text-gray-600 mb-4">
                  Geavanceerde GPS tracking en voertuigvolgsystemen voor optimale beveiliging en monitoring
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-600 font-semibold mr-2">GPS Tracking</span>
                    <span className="text-gray-600">Real-time locatie</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-semibold mr-2">Geofencing</span>
                    <span className="text-gray-600">Gebied monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-semibold mr-2">Alarmcentrale</span>
                    <span className="text-gray-600">24/7 monitoring</span>
                  </div>
                </div>
                <div className="mb-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 mb-1">Vanaf prijzen:</p>
                  <p className="text-2xl font-bold text-green-600">€299,-</p>
                  <p className="text-xs text-gray-600">Basis installatie, excl. abonnement</p>
                </div>
                <Link to="/track-trace">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Meer informatie
                  </Button>
                </Link>
              </div>
            </div>

            {/* SCM Alarmsystemen */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <img src={carAlarm} alt="SCM Alarm" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">SCM Alarmsystemen & TV01</h3>
                <p className="text-gray-600 mb-4">
                  Officieel gecertificeerde voertuigbeveiliging volgens Nederlandse SCM-normen
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">SCM Certified</span>
                    <span className="text-gray-600">Klasse 1-5</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">TV01 Tracker</span>
                    <span className="text-gray-600">GPS peilzender</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">Verzekering</span>
                    <span className="text-gray-600">Tot 20% korting</span>
                  </div>
                </div>
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Vanaf prijzen:</p>
                  <p className="text-2xl font-bold text-blue-600">€599,-</p>
                  <p className="text-xs text-gray-600">SCM Klasse 1, incl. installatie</p>
                </div>
                <Link to="/scm-alarmsystemen">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Bekijk SCM Systemen
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ramen Tinten */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <img src={windowTinting} alt="Window Tinting" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Ramen Tinten</h3>
                <p className="text-gray-600 mb-4">
                  Professioneel blinderen voor comfort, privacy en stijl
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">99% UV-werend</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">Verhoogde privacy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">Inbraakvertragend</span>
                  </div>
                </div>
                <div className="mb-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-semibold text-purple-800 mb-1">Vanaf prijzen:</p>
                  <p className="text-2xl font-bold text-purple-600">€199,-</p>
                  <p className="text-xs text-gray-600">Achterportieren, Standard Serie</p>
                </div>
                <Link to="/ramen-tinten">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Meer informatie
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* SCM Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-12 w-12 text-blue-400 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">SCM Gecertificeerde Systemen</h2>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">SCM Alarmsystemen & TV01 Peilzender</h3>
              <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Gecertificeerde voertuigbeveiligingssystemen en GPS tracking volgens Nederlandse SCM-normen
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-blue-400 font-semibold mb-2">SCM Certified</div>
                  <div className="text-gray-300">Officieel erkend</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-semibold mb-2">TV01 Tracker</div>
                  <div className="text-gray-300">GPS peilzender</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-semibold mb-2">Verzekering</div>
                  <div className="text-gray-300">Premiekorting tot 20%</div>
                </div>
              </div>
              <div className="text-center">
                <Link to="/scm-alarmsystemen">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Ontdek SCM Systemen
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Special Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Speciale Producten</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Elektronica Inbouw */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Elektronica Inbouw</h3>
                <p className="text-gray-600 mb-4">
                  Dashcams, CarPlay, cruise control en meer automotive elektronica
                </p>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Vanaf prijzen:</p>
                  <p className="text-xl font-bold text-gray-900">€149,-</p>
                  <p className="text-xs text-gray-600">Dashcam installatie</p>
                </div>
                <Link to="/elektronica-inbouw">
                  <Button variant="outline" className="w-full">
                    Ontdek Elektronica
                  </Button>
                </Link>
              </div>

              {/* Blu Eye */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Blu Eye - Emergency Vehicle Detection</h3>
                <p className="text-gray-600 mb-4">
                  Detecteert hulpdiensten voordat ze zichtbaar zijn. TETRA technologie voor maximale veiligheid.
                </p>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Vanaf prijzen:</p>
                  <p className="text-xl font-bold text-gray-900">€349,-</p>
                  <p className="text-xs text-gray-600">Incl. installatie</p>
                </div>
                <Link to="/blu-eye">
                  <Button variant="outline" className="w-full">
                    Ontdek Blu Eye
                  </Button>
                </Link>
              </div>

              {/* LaserTrack */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">LaserTrack Flare - Laser Protection</h3>
                <p className="text-gray-600 mb-4">
                  Multifunctionele afstandsbediening met geavanceerde laser snelheidsmeting bescherming.
                </p>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Vanaf prijzen:</p>
                  <p className="text-xl font-bold text-gray-900">€449,-</p>
                  <p className="text-xs text-gray-600">Incl. installatie</p>
                </div>
                <Link to="/lasertrack">
                  <Button variant="outline" className="w-full">
                    Ontdek LaserTrack
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Klaar om uw voertuig te beveiligen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvende offerte en advies op maat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0650744574">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Formulier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
