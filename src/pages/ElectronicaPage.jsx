import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Zap, Award, Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import installation from '@/assets/installation.jpg'

export default function ElectronicaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Elektronica inbouw & SCM systemen</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Professionele installatie van automotive elektronica, beveiligingssystemen en SCM-gecertificeerde oplossingen voor optimale voertuigbeveiliging.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <img 
            src={installation} 
            alt="Electronics Installation" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Automotive Electronics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Inbouw door heel Nederland</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Moderne Technologie</h3>
              <p className="text-gray-600">
                Upgrade uw voertuig met de nieuwste automotive technologie. Van dashcams voor veiligheid tot Apple CarPlay voor entertainment - wij installeren het allemaal professioneel.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professionele Installatie</h3>
              <p className="text-gray-600">
                Onze ervaren technici zorgen voor een nette en veilige installatie zonder schade aan uw voertuig. Alle bedrading wordt vakkundig weggewerkt en geïntegreerd met bestaande systemen.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantie & Service</h3>
              <p className="text-gray-600">
                2 jaar garantie op installatie, A-merk producten, mobiele service op locatie en nazorg en ondersteuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onze diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Alarmsystemen */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">SCM Alarmsystemen</h3>
              <p className="text-gray-600 mb-4">gecertificeerde alarmsystemen alle klassen</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Klasse 1 t/m 5 SCM</li>
                <li>• TV01 Peilzender SCM</li>
                <li>• Bearlock SCM</li>
                <li>• KE01 aanvullende maateregel</li>
              </ul>
              <p className="text-blue-600 font-bold">Vanaf €199,-</p>
            </div>

            {/* Startonderbreking */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Omvormer / 2e accu systemen</h3>
              <p className="text-gray-600 mb-4">Off-grid genieten van uw voertuig</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Omvormer pakketen</li>
                <li>• Laadstations</li>
                <li>• Zonnepanelen voor voertuigen</li>
                <li>• 2e accu systemen</li>
              </ul>
              <p className="text-blue-600 font-bold">Vanaf €199,-</p>
            </div>

            {/* Ritregistratie */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ritregistratie systemen</h3>
              <p className="text-gray-600 mb-4">Automatische registratie voor fiscale voordelen</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Belastingdienst-proof logging</li>
                <li>• Automatische start/stop</li>
                <li>• Online dashboard</li>
                <li>• Export naar Excel/PDF</li>
              </ul>
              <p className="text-blue-600 font-bold">Vanaf €99,-</p>
            </div>

            {/* Car Audio */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Car Audio & Multimedia</h3>
              <p className="text-gray-600 mb-4">Professionele audio en entertainment systemen</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Autoradio installatie</li>
                <li>• Speaker upgrades</li>
                <li>• Subwoofer systemen</li>
                <li>• DSP / versterkers</li>
              </ul>
              <p className="text-blue-600 font-bold">Vanaf €199,-</p>
            </div>

            {/* Custom */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Installaties</h3>
              <p className="text-gray-600 mb-4">Maatwerk elektronica oplossingen</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• LED verlichting</li>
                <li>• USB/12V aansluitingen</li>
                <li>• Target Blu eye / Lasertrack</li>
                <li>• Blind spot detectie systemen</li>
              </ul>
              <p className="text-blue-600 font-bold">Op aanvraag</p>
            </div>

            {/* Service */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certificering & Service</h3>
              <p className="text-gray-600 mb-4">Volledige service en ondersteuning</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• SCM certificaat uitgifte</li>
                <li>• Garantie en onderhoud</li>
                <li>• 24/7 technische support</li>
                <li>• Jaarlijkse controles SCM</li>
              </ul>
              <p className="text-blue-600 font-bold">Vanaf €49,-</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Installatie Proces</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Intake & Advies</h3>
              <p className="text-sm text-gray-600">Bepalen van de juiste SCM klasse en systemen voor uw voertuig</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Afspraak Plannen</h3>
              <p className="text-sm text-gray-600">Mobiele installatie op uw locatie of in onze werkplaats</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Professionele Installatie</h3>
              <p className="text-sm text-gray-600">Vakkundige montage door gecertificeerde technici</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Certificaat & Garantie</h3>
              <p className="text-sm text-gray-600">SCM certificaat en uitgebreide garantie op installatie</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in een inbouw?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor advies over de juiste SCM klasse en systemen voor uw voertuig
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Vraag Advies Aan
              </Button>
            </a>
            <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-blue text-blue hover:bg-white/10">
                Bel Direct
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
