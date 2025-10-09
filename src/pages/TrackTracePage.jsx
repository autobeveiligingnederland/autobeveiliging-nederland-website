import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Shield, Bell, Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import gpsPlatform from '@/assets/gps-platform.webp'

export default function TrackTracePage() {
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
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">GPS Track & Trace Systemen</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Geavanceerde GPS tracking en voertuigvolgsystemen voor optimale beveiliging en real-time monitoring van uw wagenpark.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <img 
            src={gpsPlatform} 
            alt="GPS Tracking Platform" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Track & Trace */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Waarom Track & Trace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Locatie</h3>
              <p className="text-gray-600">
                Volg uw voertuigen live via GPS met nauwkeurigheid tot op de meter
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diefstalbeveiliging</h3>
              <p className="text-gray-600">
                Onmiddellijke meldingen bij ongeautoriseerd gebruik of beweging
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Bell className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Geofencing</h3>
              <p className="text-gray-600">
                Stel virtuele zones in en ontvang alerts bij in- of uitgang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Systeem Specificaties</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold">GPS Nauwkeurigheid:</span>
                  <span className="text-gray-700">&lt; 3 meter</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold">Update Frequentie:</span>
                  <span className="text-gray-700">10-60 seconden</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold">Batterij Backup:</span>
                  <span className="text-gray-700">72 uur</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold">Temperatuur Range:</span>
                  <span className="text-gray-700">-30°C tot +85°C</span>
                </div>
                <div className="flex justify-between md:col-span-2">
                  <span className="font-semibold">Certificering:</span>
                  <span className="text-gray-700">CE, FCC, SCM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Prijzen & Pakketten</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kies het pakket dat bij uw behoeften past. Alle prijzen zijn inclusief installatie door Autobeveiliging Nederland.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basis */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Basis Tracking</h3>
              <p className="text-gray-600 mb-6">Voor particulieren en kleine bedrijven</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">€129,-</span>
                <p className="text-sm text-gray-500 mt-1">Eenmalig + €7,95/maand</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>GPS locatie tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Smartphone app</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Basis rapportages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Installatie door Autobeveiliging Nederland</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  Vraag Offerte Aan
                </Button>
              </a>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populair
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional Tracking</h3>
              <p className="text-gray-600 mb-6">Voor bedrijven met wagenparken</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">€299,-</span>
                <p className="text-sm text-gray-500 mt-1">Eenmalig + €13,95/maand</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Alles van Basis +</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Geofencing zones</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Uitgebreide rapportages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>API integratie</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Installatie door Autobeveiliging Nederland</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Vraag Offerte Aan
                </Button>
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Enterprise Tracking</h3>
              <p className="text-gray-600 mb-6">Voor grote wagenparken en speciale eisen</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">€399,-</span>
                <p className="text-sm text-gray-500 mt-1">Eenmalig + €19,95/maand</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Alles van Professional +</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>24/7 monitoring center</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Custom dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Installatie door Autobeveiliging Nederland</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  Vraag Offerte Aan
                </Button>
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            * Alle installaties worden uitgevoerd door gecertificeerde technici van Autobeveiliging Nederland
          </p>
        </div>
      </section>

      {/* Interface Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Gebruiksvriendelijke Interface</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Onze tracking systemen komen met professionele software in onze huisstijl. Bekijk uw voertuigen altijd en overal via mobiele app of desktop dashboard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-4">
                <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <MapPin className="h-24 w-24 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobiele App</h3>
              <p className="text-gray-600">Real-time locatie tracking op uw smartphone</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-4">
                <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <Shield className="h-24 w-24 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Desktop Dashboard</h3>
              <p className="text-gray-600">Professioneel fleet management dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in Track & Trace?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor een vrijblijvende offerte op maat
          </p>
          <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Vraag Offerte Aan
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
