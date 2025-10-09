import { Link } from 'react-router-dom'
import { ArrowLeft, Sun, Shield, Thermometer, Check, Phone, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import windowTinting from '@/assets/window-tinting.jpg'
import tintBeforeAfter from '@/assets/tint-before-after.png'

export default function RamenTintenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header /><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17636832857"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17636832857');
</script>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Ramen Tinten - Professioneel Blinderen</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Hoogwaardige raamfolie voor comfort, privacy, veiligheid en stijl. Professioneel aangebracht met garantie op kwaliteit en duurzaamheid.
          </p>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Before & After</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Zie het dramatische verschil tussen getinte en ongetinte ramen. Onze professionele raamfolie biedt privacy, UV-bescherming en een luxe uitstraling.
          </p>
          <div className="max-w-5xl mx-auto">
            <img 
              src={tintBeforeAfter} 
              alt="Before and After Tinting" 
              className="w-full rounded-xl shadow-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-red-900">Zonder Tinting</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Geen privacy</li>
                  <li>• UV-straling binnenshuis</li>
                  <li>• Warmte opbouw</li>
                  <li>• Verblinding door zon</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-900">Met Professionele Tinting</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Optimale privacy</li>
                  <li>• 99% UV-bescherming</li>
                  <li>• Tot 75% warmtereductie</li>
                  <li>• Luxe uitstraling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tinting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Waarom Ramen Tinten?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Sun className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">UV Bescherming</h3>
              <p className="text-gray-600">
                Onze premium raamfolies blokkeren tot 99% van de schadelijke UV-stralen, beschermen uw huid en voorkomen verkleuring van het interieur.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy & Veiligheid</h3>
              <p className="text-gray-600">
                Verhoogde privacy door verminderde inkijk van buitenaf. Inbraakvertragend effect door versterkende eigenschappen van de folie.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Thermometer className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comfort & Energie</h3>
              <p className="text-gray-600">
                Significant minder warmte in de auto, lagere airco kosten en verhoogd rijcomfort door vermindering van verblinding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Folie Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Folie Types & Specificaties</h2>
          <p className="text-center text-gray-600 mb-12">Verschillende kwaliteiten voor elke behoefte en budget</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Standard Serie</h3>
              <p className="text-gray-600 mb-4">Basis kwaliteit, 5 jaar garantie</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">UV-blokkering:</span>
                  <span className="font-semibold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Warmtereductie:</span>
                  <span className="font-semibold">35%</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-600">
              <div className="absolute -mt-10 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populair
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Serie</h3>
              <p className="text-gray-600 mb-4">Hoge kwaliteit, 10 jaar garantie</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">UV-blokkering:</span>
                  <span className="font-semibold">99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Warmtereductie:</span>
                  <span className="font-semibold">55%</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Ceramic Serie</h3>
              <p className="text-gray-600 mb-4">Top kwaliteit, lifetime garantie</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">UV-blokkering:</span>
                  <span className="font-semibold">99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Warmtereductie:</span>
                  <span className="font-semibold">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Prijzen Ramen Tinten</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Alle prijzen zijn inclusief professionele installatie door Autobeveiliging Nederland
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Standard</th>
                    <th className="px-6 py-4 text-left">Premium</th>
                    <th className="px-6 py-4 text-left">Ceramic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Achterportieren</td>
                    <td className="px-6 py-4">€99,-</td>
                    <td className="px-6 py-4">€149,-</td>
                    <td className="px-6 py-4">€199,-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Achterruit</td>
                    <td className="px-6 py-4">€119,-</td>
                    <td className="px-6 py-4">€179,-</td>
                    <td className="px-6 py-4">€229,-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Voorportieren</td>
                    <td className="px-6 py-4">€99,-</td>
                    <td className="px-6 py-4">€149,-</td>
                    <td className="px-6 py-4">€199,-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Complete auto</td>
                    <td className="px-6 py-4">€399,-</td>
                    <td className="px-6 py-4">€499,-</td>
                    <td className="px-6 py-4">€599,-</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="px-6 py-4 font-semibold">SUV/Van toeslag</td>
                    <td className="px-6 py-4" colSpan="3">+€50,-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              * Alle installaties worden uitgevoerd door gecertificeerde technici van Autobeveiliging Nederland
            </p>
          </div>
        </div>
      </section>

      {/* Tint Percentages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tint Percentages</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold">Voorruit:</span>
                <span className="text-gray-700">Alleen bovenstrook toegestaan</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold">Voorportieren:</span>
                <span className="text-gray-700">Minimaal 70% lichtdoorlatend</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="font-semibold">Achterportieren:</span>
                <span className="text-gray-700">Vrije keuze (0% - 70%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Achterruit:</span>
                <span className="text-gray-700">Vrije keuze (0% - 70%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vehicle Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Raamfolie Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Personenauto's</h3>
              <p className="text-gray-600 mb-4">Alle merken en modellen</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Sedan, hatchback, stationwagon</li>
                <li>• SUV en crossover</li>
                <li>• Cabrio en coupé</li>
                <li>• Elektrische voertuigen</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Bedrijfswagens</h3>
              <p className="text-gray-600 mb-4">Commerciële voertuigen</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Bestelwagens en vans</li>
                <li>• Trucks en vrachtwagens</li>
                <li>• Bussen en coaches</li>
                <li>• Speciale voertuigen</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Premium & Luxury</h3>
              <p className="text-gray-600 mb-4">Exclusieve voertuigen</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Luxury sedans</li>
                <li>• Sportwagens</li>
                <li>• Classic cars</li>
                <li>• Supercars</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Installatie Proces</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Advies & Selectie</h3>
              <p className="text-sm text-gray-600">Bepalen van het juiste folie type en tint percentage</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Voorbereiding</h3>
              <p className="text-sm text-gray-600">Grondige reiniging en voorbereiding van de ramen</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Precisie Installatie</h3>
              <p className="text-sm text-gray-600">Vakkundige toepassing zonder luchtbellen of krassen</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Kwaliteitscontrole</h3>
              <p className="text-sm text-gray-600">Eindcontrole en garantie certificaat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">⚖️ Nederlandse Wetgeving</h3>
              <p className="text-gray-700">
                In Nederland gelden specifieke regels voor raamtinten. Voorportieren moeten minimaal 70% licht doorlaten. 
                Wij zorgen ervoor dat uw tinten volledig conform de Nederlandse wetgeving zijn aangebracht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in Ramen Tinten?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor advies over de beste raamfolie voor uw voertuig en situatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Vraag Offerte Aan
              </Button>
            </a>
            <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
