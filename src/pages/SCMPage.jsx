import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Award, Check, Phone, Lock, Car, Search, Key, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import defaAlarm from '@/assets/defa-alarm.jpg'

// Nieuwe content sectie
const SCMClassesContent = () => {
  return (
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
        {/* STARTONDERBREKER KLASSE 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Lock size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Startonderbreker Klasse 1</h3>
          <p className="text-gray-700 mb-4">
            SCM/CCV Klasse 1, voorheen bekend als de ‘Startonderbreker’, biedt een essentiële basisbeveiliging.
            Dit systeem bestaat uit twee automatisch geactiveerde blokkeringen die voorkomen dat uw voertuig op
            eigen kracht kan worden verplaatst.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        {/* ALARMSYSTEEM KLASSE 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Shield size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Alarmsysteem Klasse 2</h3>
          <p className="text-gray-700 mb-4">
            De SCM/CCV Klasse 2 bouwt voort op de Klasse 1 startonderbreker, met geavanceerde inbraakdetectie en
            een luid alarmeringssysteem. Zodra een poging tot inbraak wordt gedetecteerd, treedt het alarm in werking.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        {/* ALARMSYSTEEM MET HELLINGSHOEKDETECTIE KLASSE 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
            <Car size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Alarmsysteem met Hellingshoekdetectie Klasse 3</h3>
          <p className="text-gray-700 mb-4">
            Deze klasse combineert een Klasse 2 systeem met een hellingshoekdetector die ongewenste bewegingen detecteert.
            Perfect voor voertuigen die extra bescherming nodig hebben tegen wegslepen of velgendiefstal.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        {/* VOERTUIGVOLGSYSTEEM KLASSE 4/5 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Voertuigvolgsysteem Klasse 4/5</h3>
          <p className="text-gray-700 mb-4">
            De hoogste klasse, voorzien van GPS-tracking en 24/7 meldkamerondersteuning. Ideaal voor exclusieve voertuigen
            of wagenparken die maximale beveiliging en terugvindbaarheid vereisen.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        {/* PEILZENDER TERUGVINDSYSTEEM KLASSE TV */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
            <Info size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Peilzender Terugvindsysteem Klasse TV</h3>
          <p className="text-gray-700 mb-4">
            Een discrete peilzender die ervoor zorgt dat uw voertuig binnen 24 uur kan worden gelokaliseerd.
            Ideaal voor snelle terugvinding bij diefstal.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>

        {/* KEYLESS ENTRY / GO KE01 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
            <Key size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Keyless Entry / Go KE01</h3>
          <p className="text-gray-700 mb-4">
            De nieuwste SCM/CCV certificering tegen relay attacks bij Keyless Entry-systemen.
            Onze oplossingen voldoen aan de strengste eisen voor moderne voertuigen.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>
      </div>
    </div>
  )
}

export default function SCMPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero sectie */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">SCM Alarmsystemen & TV01 Peilzender</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Gecertificeerde voertuigbeveiligingssystemen en GPS tracking volgens Nederlandse SCM-normen.
          </p>
        </div>
      </section>

      {/* Intro sectie */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Officieel SCM Gecertificeerd</h2>
          <p className="text-xl text-gray-600">
            SCM staat voor Stichting Certificatie Motorrijtuigen — uw garantie voor erkende voertuigbeveiliging.
          </p>
        </div>
      </section>

      {/* 🔹 Nieuwe geïntegreerde content */}
      <section className="bg-gray-50 py-16">
        <SCMClassesContent />
      </section>

      {/* Afbeelding */}
      <section className="py-8">
        <img
          src={defaAlarm}
          alt="DEFA Alarmsysteem"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
        />
      </section>

      {/* Contactsectie */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interesse in SCM Certificering?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor advies over de juiste SCM klasse voor uw voertuig.
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
