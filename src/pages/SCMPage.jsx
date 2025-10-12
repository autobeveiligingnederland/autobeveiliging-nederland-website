import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Award, Check, Phone } from 'lucide-react'
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
        export default function SCMPage() {
  return (
    <div className="scm-page px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        SCM / CCV Alarmklassen – Welke past bij uw voertuigbeveiliging?
      </h1>

      <p className="mb-4">
        Sinds <strong>1 april 2019</strong> is het <strong>CCV (Centrum voor Criminaliteitspreventie en Veiligheid)</strong> 
        de eigenaar van het voormalige <strong>VbV Keurmerk Voertuigbeveiliging</strong>. Het vroegere 
        <strong> VbV/Kiwa SCM-keurmerk</strong> is sindsdien verdergegaan onder de naam 
        <strong> Keurmerk CCV Voertuigbeveiliging</strong>.
      </p>

      <p className="mb-8">
        Dit keurmerk garandeert dat uw voertuigbeveiliging voldoet aan de strengste eisen op het gebied van diefstalpreventie en opsporing.
        Hieronder leggen wij de verschillende <strong>SCM/CCV alarmklassen</strong> helder voor u uit.
      </p>

      {/* Klasse 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔒 Klasse 1 – Startonderbreker</h2>
        <p>
          De <strong>SCM/CCV Klasse 1</strong> beveiliging (voorheen “Startonderbreker”) bestaat uit een systeem 
          met <strong>twee automatisch ingeschakelde blokkeringen</strong>. Deze blokkeringen zorgen ervoor dat het voertuig 
          niet op eigen kracht kan worden verplaatst zodra de motor wordt uitgeschakeld.
        </p>
        <p className="mt-2">
          Een goedgekeurde Klasse 1 startonderbreker is de basis van elke moderne voertuigbeveiliging en is bij veel voertuigen standaard aanwezig.
        </p>
        <p className="italic mt-2">💡 Ideaal voor: voertuigen met een standaard antidiefstalsysteem of als basisbeveiliging.</p>
      </section>

      {/* Klasse 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚨 Klasse 2 – Alarmsysteem</h2>
        <p>
          De <strong>SCM/CCV Klasse 2</strong> beveiliging is de opvolger van de voormalige klasse “Alarmsysteem”. 
          Deze bestaat uit een <strong>Klasse 1 startonderbreker</strong> in combinatie met een 
          <strong> inbraakdetectie met akoestische alarmering</strong>.
        </p>
        <p className="mt-2">
          Het systeem detecteert wanneer er wordt ingebroken en activeert direct een hoorbaar alarm.
        </p>
        <p className="italic mt-2">💡 Ideaal voor: voertuigen met verhoogd diefstalrisico of die vaak in openbare ruimtes geparkeerd staan.</p>
      </section>

      {/* Klasse 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📡 Klasse 3 – Alarmsysteem met hellingshoekdetectie</h2>
        <p>
          De <strong>SCM/CCV Klasse 3</strong> is de uitbreiding van Klasse 2 met <strong>hellingshoekdetectie</strong>. 
          Dit systeem registreert of het voertuig wordt opgetild, gesleept of verplaatst, en schakelt direct de startmotor uit wanneer dit gebeurt.
        </p>
        <p className="mt-2">
          Zo bent u ook beschermd tegen <strong>velgen- of sleepdiefstal</strong>.
        </p>
        <p className="italic mt-2">💡 Ideaal voor: waardevolle voertuigen, bedrijfsauto’s of auto’s met dure velgen.</p>
      </section>

      {/* Klasse 4/5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛰️ Klasse 4 / 5 – Voertuigvolgsysteem</h2>
        <p>
          De <strong>SCM/CCV Klasse 4 en 5</strong> beveiligingen staan bekend als het 
          <strong> voertuigvolgsysteem</strong>. Een Klasse 4 systeem maakt het mogelijk om uw auto 
          <strong> in realtime te volgen</strong> na diefstal. Klasse 5 gaat nóg verder: het voertuig wordt automatisch bewaakt 
          en het systeem meldt elke ongeautoriseerde verplaatsing aan de meldkamer.
        </p>
        <p className="mt-2">
          Daarnaast kunnen deze systemen vaak worden gekoppeld aan <strong>rittenregistratie</strong> of <strong>wagenparkbeheer</strong>.
        </p>
        <p className="italic mt-2">💡 Ideaal voor: luxe voertuigen, youngtimers of auto’s met hoge verzekeringswaarde.</p>
      </section>

      {/* Klasse TV */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📍 Klasse TV – Peilzender Terugvindsysteem</h2>
        <p>
          Een <strong>Klasse TV (Terugvind-systeem)</strong> maakt gebruik van een <strong>peilzender</strong> 
          die het voertuig binnen 24 uur kan lokaliseren — zelfs als de dief de accu heeft verwijderd of het voertuig 
          in een afgesloten ruimte staat.
        </p>
        <p className="mt-2">
          Het systeem zendt periodiek een signaal uit waarmee de opsporingsdienst het voertuig snel kan traceren.
        </p>
        <p className="italic mt-2">💡 Ideaal voor: exclusieve of zeldzame voertuigen met extra hoge diefstalgevoeligheid.</p>
      </section>

      {/* KE01 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔑 KE01 – Keyless Entry / Keyless Go Beveiliging</h2>
        <p>
          Sinds <strong>1 januari 2021</strong> gelden er nieuwe keuringsvoorschriften voor voertuigen met 
          <strong> Keyless Entry en/of Keyless Go</strong> systemen. De 
          <strong> Kiwa SCM/CCV KE01-certificering</strong> zorgt ervoor dat uw voertuig beschermd is tegen de zogeheten 
          <strong> “relay attack”</strong> — waarbij criminelen het keyless-signaal opvangen en uw auto ongemerkt openen.
        </p>
        <p className="italic mt-2">💡 Ideaal voor: moderne voertuigen met keyless-technologie.</p>
      </section>

      {/* Waarom SCM */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">✅ Waarom kiezen voor een gecertificeerd SCM/CCV systeem?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✔️ Erkend door verzekeraars</li>
          <li>🔒 Bescherming tegen de meest voorkomende diefstalmethodes</li>
          <li>🚓 Mogelijkheid tot terugvinding bij diefstal</li>
          <li>🧾 Voldoet aan de eisen van Kiwa SCM/CCV</li>
        </ul>
        <p className="mt-4">
          Laat uw beveiliging installeren door een erkend specialist — zoals 
          <strong> Autobeveiliging Nederland</strong> — voor maximale zekerheid en certificering volgens de laatste normen.
        </p>
      </section>
    </div>
  );
}
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
