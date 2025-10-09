import { Link } from 'react-router-dom'
import { Phone, MapPin, Shield, CheckCircle, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import gpsPlatform from '@/assets/gps-platform.webp'
import defaAlarm from '@/assets/defa-alarm.jpg'
import windowTinting from '@/assets/window-tinting.jpg'

export default function HomePage() {
  const scrollToDiensten = () => {
    document.getElementById('diensten')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Autobeveiliging Nederland
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-300">
              Mobiele inbouw op Locatie
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              KIWA SCM/VBV en CCV voertuigbeveiliging, GPS tracking, ramen tinten en elektronica inbouw. 
              Wij komen naar u toe voor SCM-gecertificeerde installaties in heel Nederland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Direct contact
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8"
                onClick={scrollToDiensten}
              >
                Onze diensten
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
              <h3 className="text-xl font-bold mb-2">Service op locatie</h3>
              <p className="text-gray-600">Wij komen naar u toe in heel Nederland</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">KIWA SCM/VBV en CCV Gecertificeerd</h3>
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
              <h3 className="text-xl font-bold mb-2">Snelle service</h3>
              <p className="text-gray-600">Flexibele planning en snelle uitvoering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Onze diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van GPS tracking systemen tot complete voertuigbeveiliging - wij zorgen voor professionele elektronica inbouw op uw locatie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Track & Trace */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <img src={gpsPlatform} alt="GPS Tracking Platform" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">GPS Track & Trace systemen</h3>
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
                  <p className="text-2xl font-bold text-green-600">€99,-</p>
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
                <img src={defaAlarm} alt="DEFA Alarmsysteem" className="w-full h-full object-cover opacity-80" />
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
                    <span className="text-blue-600 font-semibold mr-2">TV01 Peilzender</span>
                    <span className="text-gray-600">GPS Tracking</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">Verzekering</span>
                    <span className="text-gray-600">Tot 20% korting op uw autoverzekering</span>
                  </div>
                </div>
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Vanaf prijzen:</p>
                  <p className="text-2xl font-bold text-blue-600">€199,-</p>
                  <p className="text-xs text-gray-600">TV01 Peilzender, incl. installatie</p>
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
                <h3 className="text-2xl font-bold mb-3">Ramen tinten</h3>
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
                    <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">Exclusieve uitstraling</span>
                  </div>
                </div>
                <div className="mb-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-semibold text-purple-800 mb-1">Vanaf prijzen:</p>
                  <p className="text-2xl font-bold text-purple-600">€149,-</p>
                  <p className="text-xs text-gray-600">Vanaf de B-stijl 20%</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">SCM gecertificeerde systemen</h2>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">SCM Alarmsystemen & TV01 Peilzender</h3>
              <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Gecertificeerde voertuigbeveiligingssystemen en GPS tracking volgens Nederlandse SCM-normen
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-blue-400 font-semibold mb-2">SCM gecertificeerde monteurs</div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Speciale producten</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Elektronica Inbouw */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Elektronica Inbouw</h3>
                <p className="text-gray-600 mb-4">
                  Dashcams, Apple Carplay & Android Auto, cruise control en veel meer.
                </p>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Vanaf prijzen:</p>
                  <p className="text-xl font-bold text-gray-900">€149,-</p>
                  <p className="text-xs text-gray-600">Dashcam installatie voorzijde 1-kanaals</p>
                </div>
                <Link to="/elektronica-inbouw">
                  <Button variant="outline" className="w-full">
                    Ontdek de mogelijkheden
                  </Button>
                </Link>
              </div>

              {/* Blu Eye */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Target Blu eye - Emergency Vehicle Detection</h3>
                <p className="text-gray-600 mb-4">
                  Detecteert hulpdiensten voordat ze zichtbaar zijn. TETRA technologie voor maximale veiligheid.
                </p>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Vanaf prijzen:</p>
                  <p className="text-xl font-bold text-gray-900">€1449,-</p>
                  <p className="text-xs text-gray-600">Incl. installatie</p>
                </div>
                <Link to="/blu-eye">
                  <Button variant="outline" className="w-full">
                    Ontdek Blu eye
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
                  <p className="text-xl font-bold text-gray-900">€549,-</p>
                  <p className="text-xs text-gray-600">Incl. installatie, in combinatie met een Blu eye</p>
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

      {/* Werkwijze Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hoe gaan wij te werk?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eerste contact tot installatie - zo werkt Autobeveiliging Nederland
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Contact Opnemen</h3>
                <p className="text-sm text-gray-600">
                  U neemt contact op met wat u wilt qua inbouw of wat u nodig heeft voor de verzekering (bijvoorbeeld peilzender of SCM klasse 3)
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="text-blue-600 text-3xl">→</div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Offerte</h3>
                <p className="text-sm text-gray-600">
                  U ontvangt een vrijblijvende offerte op maat, afgestemd op uw wensen en voertuig
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="text-blue-600 text-3xl">→</div>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Inbouw op locatie</h3>
                <p className="text-sm text-gray-600">
                  Wij komen naar uw locatie voor de installatie (mits wij binnen kunnen staan voor optimale werkomstandigheden)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Afhandeling & Uitleg</h3>
                <p className="text-sm text-gray-600">
                  Na installatie krijgt u een uitgebreide uitleg over de werking van de producten en eventuele certificaten
                </p>
              </div>

              {/* Step 5 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  5
                </div>
                <h3 className="text-lg font-bold mb-2">Facturatie</h3>
                <p className="text-sm text-gray-600">
                  U ontvangt een duidelijke factuur met alle geleverde diensten en producten
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-blue-50 rounded-xl p-6 inline-block">
                <p className="text-lg font-semibold text-blue-900 mb-2">
                  🚗 Mobiele Service in Heel Nederland
                </p>
                <p className="text-gray-700">
                  Wij komen naar u toe voor een professionele installatie op uw locatie
                </p>
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
            <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
