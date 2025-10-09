import { Link } from 'react-router-dom'
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Neem contact met ons op voor vragen, advies of om een afspraak te maken. Wij staan voor u klaar!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contactgegevens</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telefoon</h3>
                      <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                        06-50744574
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Ma-Vr: 08:00 - 18:00</p>
                      <p className="text-sm text-gray-600">Za: 09:00 - 15:00 (Op afspraak)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:info@autobeveiligingnederland.nl" className="text-blue-600 hover:underline">
                        info@autobeveiligingnederland.nl
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Wij reageren binnen 24 uur</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Locatie</h3>
                      <p className="text-gray-700">Uden, Nederland</p>
                      <p className="text-sm text-gray-600 mt-1">Werkzaam in heel Nederland</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Openingstijden</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Maandag - Vrijdag: 08:00 - 18:00</p>
                        <p>Zaterdag: 09:00 - 15:00 (Op afspraak)</p>
                        <p>Zondag: Gesloten</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">* Afspraken buiten deze tijden mogelijk in overleg</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">🚗 Mobiele Service</h3>
                  <p className="text-gray-700">
                    Wij komen naar u toe! Onze mobiele service is beschikbaar in heel Nederland. 
                    Bel of mail ons voor een afspraak op uw locatie.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Stuur ons een bericht</h2>
                 <form action="https://formsubmit.co/info@autobeveiligingnederland.nl" method="POST" className="space-y-6">
                                     {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="Nieuw contactformulier bericht - Autobeveiliging Nederland" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="06-12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                      Kenteken of Chassisnummer
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="XX-XX-XX of chassisnummer"
                    />
                    <p className="text-xs text-gray-500 mt-1">Optioneel, helpt ons u beter te adviseren</p>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Interesse in
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="track-trace">Track & Trace Systemen</option>
                      <option value="scm">SCM Alarmsystemen</option>
                      <option value="ramen-tinten">Ramen Tinten</option>
                      <option value="elektronica">Elektronica Inbouw</option>
                      <option value="blu-eye">Blu Eye</option>
                      <option value="lasertrack">LaserTrack</option>
                      <option value="schadeherstel">Schadeherstel</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Vertel ons waar wij u mee kunnen helpen..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Verstuur Bericht
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Verplichte velden. Wij behandelen uw gegevens vertrouwelijk.
                  </p>
                </form>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Liever direct contact?</h2>
              <p className="text-xl mb-6">Bel ons voor direct advies of een spoedafspraak</p>
              <a href="https://wa.me/31650744574" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel Nu: 06-50744574
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
