import React from 'react';
import { Shield, Car, Lock, Search, Key, Info } from 'lucide-react';

const SCMClassesContent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">SCM/CCV Alarmklassen Uitgelegd door Autobeveiliging Nederland</h2>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Sinds 1 april 2019 is het CCV (Centrum voor Criminaliteitspreventie en Veiligheid) de nieuwe eigenaar van het voormalige VbV Keurmerk Voertuigbeveiliging. Het keurmerk VbV/Kiwa SCM is verder gegaan onder de naam Keurmerk CCV Voertuigbeveiliging. Bij Autobeveiliging Nederland leggen we u graag de verschillende SCM/CCV alarmklassen uit, zodat u de beste keuze kunt maken voor de beveiliging van uw voertuig.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* STARTONDERBREKER KLASSE 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Lock size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Startonderbreker Klasse 1</h3>
          <p className="text-gray-700 mb-4">
            SCM/CCV Klasse 1, voorheen bekend als de ‘Startonderbreker’, biedt een essentiële basisbeveiliging. Dit systeem bestaat uit twee automatisch geactiveerde blokkeringen die voorkomen dat uw voertuig op eigen kracht kan worden verplaatst. Een onmisbare eerste stap in voertuigbeveiliging, vaak vereist door verzekeraars voor oudere modellen of als aanvulling op andere systemen.
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
            De SCM/CCV Klasse 2, de opvolger van het ‘Alarmsysteem’, bouwt voort op de Klasse 1 startonderbreker. Dit systeem wordt aangevuld met geavanceerde inbraakdetectie en een luid alarmeringssysteem. Zodra een poging tot inbraak wordt gedetecteerd, treedt het alarm in werking, wat dieven afschrikt en u direct waarschuwt. Ideaal voor een verhoogde beveiliging van uw auto.
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
            SCM/CCV Klasse 3, voorheen ‘Alarmsysteem met hellingshoekdetectie’, combineert een Klasse 2 alarmsysteem met een Klasse 1 startonderbreker en voegt daar een hellingshoekdetector aan toe. Dit systeem detecteert ongewone bewegingen, zoals het optillen van het voertuig (bijvoorbeeld voor diefstal van velgen of wegslepen), en activeert direct het alarm en de startonderbreker. Een must voor voertuigen die extra bescherming nodig hebben tegen diefstal op wielen.
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
            De SCM/CCV Klasse 4 en 5, voorheen ‘Voertuigvolgsysteem’, biedt de ultieme beveiliging tegen diefstal. Met dit systeem wordt uw auto niet alleen beschermd, maar kan deze ook actief worden teruggevonden mocht diefstal toch plaatsvinden. Vaak inclusief rittenregistratie en wagenparkbeheer functionaliteiten, is dit de ideale oplossing voor zowel particulieren als bedrijven die maximale controle en veiligheid wensen.
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
            Een Kiwa SCM/CCV Klasse TV goedgekeurd terugvindsysteem, beter bekend als een peilzender, garandeert dat uw voertuig binnen 24 uur in Nederland kan worden teruggevonden na diefstal. Dit discrete systeem werkt als een stille bewaker en is van onschatbare waarde voor het snel lokaliseren en recupereren van uw gestolen bezit. Een geruststellende gedachte voor elke voertuigeigenaar.
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
            Vanaf 1 januari 2021 zijn de keuringsvoorschriften voor personenauto’s met Keyless Entry en/of Keyless Go gewijzigd. De Kiwa SCM/CCV KE01 certificering is specifiek ontworpen om de kwetsbaarheden van keyless systemen aan te pakken. Autobeveiliging Nederland biedt oplossingen die voldoen aan deze nieuwe normen, zodat uw keyless voertuig optimaal beveiligd is tegen de nieuwste diefstalmethoden.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">Meer informatie</a>
        </div>
      </div>
    </div>
  );
};

export default SCMClassesContent;

