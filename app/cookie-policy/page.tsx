export const metadata = {
  title: "Cookie Policy | BedstBettingSite",
  description:
    "Læs om hvordan vi bruger cookies på BedstBettingSite. Information om cookie typer, formål og hvordan du kan kontrollere dem.",
  keywords: "cookie policy, cookies, privatlivspolitik, danske betting sites, cookie indstillinger",
  alternates: {
    canonical: "https://www.bedstbettingsite.com/cookie-policy",
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-[#1B1B1B] to-[#2A1B3D] rounded-2xl border border-[#6C1EFF]/30 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Cookie Policy</h1>
          {/* Rest of the content remains the same */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hvad er cookies?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Cookies er små tekstfiler, der gemmes på din computer, tablet eller smartphone, når du besøger vores
                  hjemmeside. De hjælper os med at genkende dig og huske dine præferencer, så vi kan give dig en bedre
                  brugeroplevelse.
                </p>
                <p className="text-lg leading-relaxed">
                  Cookies indeholder ikke personlige oplysninger som dit navn eller adresse, men de kan linke tilbage
                  til andre oplysninger, vi har om dig.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hvordan bruger vi cookies?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi bruger cookies til forskellige formål på vores hjemmeside:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li>At huske dine præferencer og indstillinger</li>
                  <li>At analysere, hvordan vores hjemmeside bruges</li>
                  <li>At forbedre vores tjenester og brugeroplevelse</li>
                  <li>At vise relevant indhold og annoncer</li>
                  <li>At sikre, at vores hjemmeside fungerer korrekt</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Typer af cookies</h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Nødvendige cookies</h3>
                    <p className="text-lg leading-relaxed">
                      Disse cookies er essentielle for, at hjemmesiden kan fungere korrekt. De kan ikke deaktiveres i
                      vores systemer. De sættes normalt kun som reaktion på handlinger, du foretager, som svarer til en
                      anmodning om tjenester.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Præference cookies</h3>
                    <p className="text-lg leading-relaxed">
                      Disse cookies gør det muligt for hjemmesiden at huske oplysninger, der ændrer, hvordan hjemmesiden
                      ser ud eller opfører sig, såsom dit foretrukne sprog eller den region, du befinder dig i.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Statistik cookies</h3>
                    <p className="text-lg leading-relaxed">
                      Disse cookies giver os mulighed for at tælle besøg og trafikkilder, så vi kan måle og forbedre
                      vores hjemmesides ydeevne. De hjælper os med at vide, hvilke sider der er mest og mindst populære.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Marketing cookies</h3>
                    <p className="text-lg leading-relaxed">
                      Disse cookies kan sættes gennem vores hjemmeside af vores reklamepartnere. De kan bruges til at
                      opbygge en profil af dine interesser og vise dig relevante annoncer på andre hjemmesider.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Tredjepartscookies</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi bruger også cookies fra tredjeparter til at hjælpe os med at analysere og forstå, hvordan du bruger
                  denne hjemmeside. Disse cookies gemmes kun i din browser med dit samtykke.
                </p>
                <p className="text-lg leading-relaxed">
                  Tredjepartscookies omfatter tjenester som Google Analytics, som hjælper os med at forstå, hvordan
                  besøgende interagerer med vores hjemmeside.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hvordan kontrollerer du cookies?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Du har ret til at beslutte, om du vil acceptere eller afvise cookies. Du kan udøve dine
                  cookie-rettigheder ved at indstille dine præferencer i cookie-banneret, når du besøger vores
                  hjemmeside.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Du kan også indstille eller ændre dine webbrowser-kontroller til at acceptere eller afvise cookies.
                  Hvis du vælger at afvise cookies, kan du stadig bruge vores hjemmeside, selvom din adgang til nogle
                  funktioner kan være begrænset.
                </p>

                <div className="bg-gradient-to-r from-[#6C1EFF]/10 to-[#00C8FF]/10 rounded-lg p-6 border border-[#6C1EFF]/30 mt-6">
                  <h3 className="text-xl font-bold text-white mb-3">Sådan sletter du cookies:</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                    <li>Chrome: Indstillinger → Avanceret → Ryd browserdata</li>
                    <li>Firefox: Indstillinger → Privatliv og sikkerhed → Cookies og webstedsdata</li>
                    <li>Safari: Indstillinger → Privatliv → Administrer webstedsdata</li>
                    <li>Edge: Indstillinger → Ryd browserdata → Cookies og andre webstedsdata</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Opdateringer af denne politik</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi kan opdatere denne cookie-politik fra tid til anden for at afspejle ændringer i vores praksis eller
                  af andre operationelle, juridiske eller regulatoriske årsager.
                </p>
                <p className="text-lg leading-relaxed">
                  Vi opfordrer dig til at gennemgå denne politik regelmæssigt for at holde dig informeret om, hvordan vi
                  bruger cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Ansvarligt spil</h2>
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg p-6 border border-red-500/30">
                  <p className="text-lg leading-relaxed text-center">
                    <strong className="text-red-400">Vigtigt:</strong> Denne hjemmeside er kun for personer over 18 år.
                    Spil ansvarligt og søg hjælp, hvis du har problemer med spil.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
