import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Award, Check, Phone, Lock, Car, Search, Key, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import defaAlarm from '@/assets/defa-alarm.jpg'

export default function SCMPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">SCM Alarmsystemen & TV01 Peilzender</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Gecertificeerde voertuigbeveiligingssystemen en GPS tracking volgens Nederlandse SCM-normen. Installatie door Autobeveiliging Nederland.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Officieel SCM Gecertificeerd</h2>
            <p className="text-xl text-gray-600">
              SCM staat voor Stichting Certificatie Motorrijtuigen. Een SCM-certificaat is een officiële erkenning dat uw voertuigbeveiligingssysteem voldoet aan strenge Nederlandse normen. Dit kan leiden tot aanzienlijke kortingen op uw autoverzekering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">SCM gecertificeerde monteurs</h3>
              <p className="text-gray-600">Officieel erkend door verzekeraars</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">TV01 Tracker</h3>
              <p className="text-gray-600">GPS peilzender voor tracking</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verzekeringkorting</h3>
              <p className="text-gray-600">Tot 20% premiekorting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">SCM Klasse 1 t/m 5 & Prijzen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-2">SCM Klasse 1</h3>
              <p className="text-gray-600 mb-6">Basis beveiliging voor standaard voertuigen</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">€399,-</span>
                <p className="text-sm text-gray-500 mt-1">Incl. installatie & certificaat</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Startonderbreker</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Mogelijk met aparte autorisatie</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>LED waarschuwing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>SCM certificaat</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Installatie door Autobeveiliging Nederland</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">Vraag offerte aan</Button>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-600">
              <div className="absolute -mt-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populair
              </div>
              <h3 className="text-2xl font-bold mb-2">SCM Klasse 3</h3>
              <p className="text-gray-600 mb-6">Alarmsysteem met Hellingshoekdetectie, interieurbewaking en meer.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">€899,-</span>
                <p className="text-sm text-gray-500 mt-1">Incl. installatie & certificaat</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Akoestisch alarmsignaal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Startonderbreking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Hellingshoek detectie</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Interieurbewaking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Installatie door Autobeveiliging Nederland</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Vraag offerte aan</Button>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-2">SCM Klasse 4/5</h3>
              <p className="text-gray-600 mb-6">Maximale beveiliging voor exclusieve voertuigen</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">€899,-</span>
                <p className="text-sm text-gray-500 mt-1">Incl. installatie & certificaat</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>24/7 live volgen van het voertuig</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>24/7 support PAC meldkamer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>GSM jamming detectie</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Extra startblokkering via app</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Installatie door Autobeveiliging Nederland</span>
                </li>
              </ul>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">Vraag offerte aan</Button>
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            * Alle installaties worden uitgevoerd door SCM-gecertificeerde technici van Autobeveiliging Nederland
          </p>
        </div>
        <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        SCM/CCV Alarmklassen Uitgelegd door Autobeveiliging Nederland
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Sinds 1 april 2019 is het CCV (Centrum voor Criminaliteitspreventie en Veiligheid) de nieuwe eigenaar van het
        voormalige VbV Keurmerk Voertuigbeveiliging. Het keurmerk VbV/Kiwa SCM is verder gegaan onder de naam Keurmerk
        CCV Voertuigbeveiliging. Bij Autobeveiliging Nederland leggen we u graag de verschillende SCM/CCV alarmklassen
        uit, zodat u de beste keuze kunt maken voor de beveiliging van uw voertuig.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Lock size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Startonderbreker Klasse 1</h3>
          <p className="text-gray-700 mb-4">
            SCM/CCV Klasse 1, voorheen bekend als de ‘Startonderbreker’, biedt een essentiële basisbeveiliging.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Shield size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Alarmsysteem Klasse 2</h3>
          <p className="text-gray-700 mb-4">
            SCM/CCV Klasse 2 bouwt voort op de Klasse 1 startonderbreker, met geavanceerde inbraakdetectie en alarm.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
            <Car size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Alarmsysteem met Hellingshoekdetectie Klasse 3</h3>
          <p className="text-gray-700 mb-4">
            Combineert Klasse 2 alarmsysteem met een hellingshoekdetector voor extra bescherming tegen wegslepen of velgendiefstal.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Voertuigvolgsysteem Klasse 4/5</h3>
          <p className="text-gray-700 mb-4">
            De hoogste klasse, voorzien van GPS-tracking en 24/7 meldkamerondersteuning.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
            <Info size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Peilzender Terugvindsysteem Klasse TV</h3>
          <p className="text-gray-700 mb-4">
            Een discrete peilzender die ervoor zorgt dat uw voertuig binnen 24 uur kan worden gelokaliseerd.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
            <Key size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Keyless Entry / Go KE01</h3>
          <p className="text-gray-700 mb-4">
            Bescherming tegen relay attacks bij Keyless Entry-systemen, volledig SCM/CCV gecertificeerd.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>
      </div>
    </div>
  
      
<img src={defaAlarm} alt="DEFA Alarmsysteem" className="w-full max-w-xl mx-auto rounded-xl shadow-lg mt-8" />
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in SCM Certificering?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor advies over de juiste SCM klasse voor uw voertuig
          </p>
          <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Vraag advies aan
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
