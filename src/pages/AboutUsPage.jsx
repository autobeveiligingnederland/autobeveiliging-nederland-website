import { Link } from 'react-router-dom'
import { ArrowLeft, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import aboutUsBanner from '@/assets/about-us-banner.jpg'
import logo from '@/assets/logo.png'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-cover bg-center py-24 text-white" style={{ backgroundImage: `url(${aboutUsBanner})` }}>
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Over Autobeveiliging Nederland</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Uw partner in voertuigbeveiliging en elektronica inbouw, met jarenlange ervaring en mobiele service.
          </p>
          <div className="mt-8">
            <img src={logo} alt="Autobeveiliging Nederland Logo" className="h-24 mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Over Autobeveiliging Nederland</h2>
            <p>
              Bij Autobeveiliging Nederland brengen we ruim tien jaar aan diepgaande ervaring in de automotive branche met ons mee. Deze jarenlange expertise heeft ons een unieke positie gegeven in zowel OEM (Original Equipment Manufacturer) als aftermarket inbouw, met een specialisatie in geavanceerde SCM-gecertificeerde alarmsystemen en voertuigvolgsystemen.
            </p>
            <p>
              Wij begrijpen dat uw voertuig meer is dan alleen transport; het is een waardevol bezit dat de beste bescherming verdient. Daarom zijn wij toegewijd aan het leveren van hoogwaardige beveiligingsoplossingen die voldoen aan de strengste normen en de nieuwste technologieën.
            </p>

            <h3>Onze Werkwijze</h3>
            <p>
              Wat ons onderscheidt, is onze flexibele en klantgerichte aanpak. Wij maken voornamelijk gebruik van een netwerk van ervaren ZZP'ers, waardoor we de mogelijkheid hebben om onze diensten op locatie aan te bieden. Dit betekent dat wij naar u toe komen, of het nu thuis is, op uw werk, of op een andere gewenste locatie, om de installatie van uw beveiligingssysteem of andere elektronica vakkundig te verrichten. Dit bespaart u tijd en moeite, en zorgt voor minimale verstoring van uw dagelijkse routine.
            </p>
            <p>
              Ons team van specialisten is niet alleen technisch onderlegd, maar ook gepassioneerd over auto's en beveiliging. Wij werken met de grootste zorg en precisie, en zorgen ervoor dat elke installatie naadloos wordt geïntegreerd met de bestaande systemen van uw voertuig. Kwaliteit, betrouwbaarheid en klanttevredenheid staan bij ons voorop.
            </p>

            <h3>Onze Missie</h3>
            <p>
              Het is onze missie om gemoedsrust te bieden aan voertuigeigenaren in heel Nederland. Door middel van professionele service, innovatieve producten en een persoonlijke benadering streven we ernaar om de veiligheid van uw voertuig te maximaliseren en u te voorzien van de beste beveiligingsoplossingen die de markt te bieden heeft.
            </p>
            <p>
              Kies voor Autobeveiliging Nederland en ervaar de zekerheid van een vakkundig beveiligd voertuig, geïnstalleerd door experts die om uw veiligheid geven.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Meer weten over onze diensten?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact op voor een vrijblijvend adviesgesprek of een offerte op maat.
          </p>
          <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Neem Contact Op
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
