import { Link } from 'react-router-dom'
import { ArrowLeft, Wrench, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function SchadeherstelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Diefstal Schadeherstel</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Professioneel herstel van schade ontstaan door diefstal of inbraakpogingen aan uw voertuig.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="h-24 w-24 text-gray-800 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Schadeherstel na Diefstal</h2>
              <p className="text-xl text-gray-600">
                Helaas kan het voorkomen dat uw voertuig slachtoffer wordt van diefstal of een inbraakpoging. Autobeveiliging Nederland biedt professionele herstelwerkzaamheden om uw voertuig weer in optimale staat te brengen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Onze Schadeherstel Diensten</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Reparatie van Sloten en Portieren</h4>
                  <p className="text-gray-600">Herstel van beschadigde sloten, portiergrepen en mechanismen</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Ruitvervanging</h4>
                  <p className="text-gray-600">Vervanging van ingeslagen of beschadigde ruiten</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Elektronica Herstel</h4>
                  <p className="text-gray-600">Reparatie van beschadigde bekabeling en elektronische systemen</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Interieur Herstel</h4>
                  <p className="text-gray-600">Herstel van beschadigd dashboard en interieuronderdelen</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Preventieve Maatregelen</h4>
                  <p className="text-gray-600">Advies en installatie van extra beveiligingsmaatregelen</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Werkwijze</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Schade-opname</h4>
                    <p className="text-gray-700">Wij komen naar u toe voor een grondige inspectie van de schade</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Offerte</h4>
                    <p className="text-gray-700">U ontvangt een gedetailleerde offerte voor de herstelwerkzaamheden</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Verzekering</h4>
                    <p className="text-gray-700">Wij helpen u met de afhandeling via uw verzekering</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                  <div>
                    <h4 className="font-bold mb-1">Herstel</h4>
                    <p className="text-gray-700">Professionele uitvoering van alle herstelwerkzaamheden</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                  <div>
                    <h4 className="font-bold mb-1">Preventie</h4>
                    <p className="text-gray-700">Advies over extra beveiligingsmaatregelen om herhaling te voorkomen</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Slachtoffer van Diefstal?</h3>
              <p className="text-gray-600 mb-6">
                Neem direct contact met ons op. Wij staan klaar om u te helpen met een snelle en professionele oplossing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel Direct: 06-50744574
                  </Button>
                </a>
                <a href="mailto:info@autobeveiligningnederland.nl">
                  <Button size="lg" variant="outline">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Ons
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
