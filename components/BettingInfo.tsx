"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Er betting lovligt i Danmark?",
    answer:
      "Ja, online betting er fuldt lovligt i Danmark siden 2012, hvor den danske spillelov trådte i kraft. Spillemyndigheden under Erhvervsministeriet regulerer og licenserer alle lovlige betting operatører. Kun betting sites med dansk licens må lovligt tilbyde deres tjenester til danske spillere. Dette sikrer forbrugerbeskyttelse, fair spil og ansvarlige spillepraksisser. Alle licenserede operatører skal betale skat til den danske stat og følge strenge regler for spillerbeskyttelse.",
  },
  {
    question: "Hvordan beskytter jeg mine data?",
    answer:
      "Databeskyttelse er afgørende når du spiller online. Vælg kun betting sites med SSL-kryptering (du kan se det grønne hængelås i browserens adresselinje). Læs altid privatlivspolitikken grundigt og forstå hvordan dine data bruges. Brug stærke, unikke adgangskoder og aktiver to-faktor autentificering hvor det er muligt. Undgå at spille på offentlige WiFi-netværk og hold din software opdateret. Licenserede danske betting sites er forpligtet til at følge GDPR-reglerne og har strenge krav til datasikkerhed.",
  },
  {
    question: "Hvad er ROFUS og hvordan virker det?",
    answer:
      "ROFUS (Register Over Frivilligt Udelukkede Spillere) er Danmarks nationale selvudelukkelsessystem, der blev etableret i 2019. Hvis du registrerer dig i ROFUS, bliver du automatisk udelukket fra alle licenserede gambling sites i Danmark i en periode du selv vælger (minimum 6 måneder). Systemet er gratis at bruge og kan aktiveres online på rofus.dk. Under udelukkelsen kan du ikke oprette konti, indbetale penge eller spille på danske licenserede sites. ROFUS er et effektivt værktøj til at tage kontrol over dit spil.",
  },
  {
    question: "Hvilke skatter skal jeg betale af mine gevinster?",
    answer:
      "I Danmark skal du betale skat af dine betting gevinster, hvis de overstiger 200 kr. om året. Skatten er på 15% af det beløb der overstiger 200 kr. Eksempel: Hvis du vinder 1.200 kr. om året, skal du betale 15% skat af 1.000 kr. (1.200 - 200), hvilket svarer til 150 kr. i skat. Betting sites rapporterer automatisk dine gevinster til SKAT, så du behøver ikke selv at indberette dem. Tab kan ikke fratrækkes i andre indkomster. Det er vigtigt at gemme dokumentation for dine betting aktiviteter.",
  },
  {
    question: "Hvad er de danske spilleregler og begrænsninger?",
    answer:
      "Danmark har strenge regler for at beskytte spillere. Du skal være mindst 18 år for at spille og kan kun have én konto per betting site. Der er obligatoriske indbetalingsgrænser: maksimum 10.000 kr. per måned for nye spillere (kan hæves efter 3 måneder). Alle betting sites skal tilbyde værktøjer til ansvarligt spil som indbetalingsgrænser, tabsgrænser, tidsgrænser og selvudelukkelse. Reklamer for gambling må ikke målrettes mod personer under 18 år, og der er begrænsninger på hvornår gambling-reklamer må vises på tv.",
  },
  {
    question: "Hvordan fungerer bonus regler og omsætningskrav?",
    answer:
      "Bonusser fra danske betting sites kommer altid med omsætningskrav (wagering requirements). Dette betyder du skal spille for et bestemt beløb før du kan hæve bonus-pengene. Eksempel: En 100 kr. bonus med 10x omsætning kræver at du spiller for 1.000 kr. før pengene kan hæves. Læs altid bonusvilkårene grundigt - de specificerer hvilke spil der tæller, tidsfrister og maksimale indsatser. Nogle bonusser er 'sticky' (klæbrige) og kan aldrig hæves, kun gevinster fra dem. Vær opmærksom på at bonusser ikke altid er fordelagtige.",
  },
  {
    question: "Hvad skal jeg gøre hvis jeg har problemer med en betting site?",
    answer:
      "Hvis du har problemer med en dansk licenseret betting site, skal du først kontakte deres kundeservice. Hvis problemet ikke løses, kan du klage til Spillemyndigheden, som fører tilsyn med alle licenserede operatører. For tvister om gevinster eller kontolukning kan du også kontakte Ankenævnet for Spil, som behandler klager gratis. Gem altid dokumentation for dine transaktioner og kommunikation. Hvis du har problemer med udenlandske, ikke-licenserede sites, har du meget begrænset beskyttelse og bør undgå disse helt.",
  },
  {
    question: "Hvordan identificerer jeg problemspil og får hjælp?",
    answer:
      "Advarselstegn på problemspil inkluderer: at spille for mere end du har råd til, lyve om dit spil, forsømme arbejde eller familie, jage tab eller føle dig urolig når du ikke kan spille. Danmark har fremragende hjælperessourcer: StopSpillet.dk tilbyder gratis rådgivning og behandling, Spillemyndigheden har informationsmateriale, og alle licenserede sites tilbyder selvudelukkelsesmuligheder. Du kan også kontakte din læge eller kommunens misbrugsbehandling. Husk at problemspil er en sygdom, ikke en karakterfejl, og der findes effektiv hjælp.",
  },
]

export default function BettingInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Værd at vide om betting i Danmark</h2>
          <p className="text-xl text-gray-300">
            Omfattende guide til dansk betting lovgivning, regler og spillerbeskyttelse
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#1B1B1B] to-[#2A1B3D] rounded-xl border border-[#6C1EFF]/30 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#6C1EFF]/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-6 h-6 text-[#6C1EFF]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
