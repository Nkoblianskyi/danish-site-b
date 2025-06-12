export const metadata = {
  title: "Privatlivspolitik | BedstBettingSite",
  description:
    "Læs om hvordan vi beskytter dine personlige oplysninger på BedstBettingSite. Information om dataindsamling, behandling og dine rettigheder.",
  keywords: "privatlivspolitik, databeskyttelse, GDPR, personlige oplysninger, danske betting sites",
  alternates: {
    canonical: "https://www.bedstbettingsite.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-[#1B1B1B] to-[#2A1B3D] rounded-2xl border border-[#6C1EFF]/30 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Privatlivspolitik</h1>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduktion</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Denne privatlivspolitik beskriver, hvordan vi indsamler, bruger og beskytter dine personlige
                  oplysninger, når du besøger vores hjemmeside. Vi er forpligtet til at beskytte dit privatliv og sikre,
                  at dine personlige oplysninger behandles sikkert og i overensstemmelse med gældende
                  databeskyttelseslovgivning.
                </p>
                <p className="text-lg leading-relaxed">
                  Ved at bruge vores hjemmeside accepterer du vilkårene i denne privatlivspolitik.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hvilke oplysninger indsamler vi?</h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Automatisk indsamlede oplysninger</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                      <li>IP-adresse og geografisk placering</li>
                      <li>Browsertype og -version</li>
                      <li>Operativsystem</li>
                      <li>Besøgstidspunkt og -varighed</li>
                      <li>Sider du besøger på vores hjemmeside</li>
                      <li>Henvisende hjemmeside</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Oplysninger du giver os</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                      <li>Præferencer og indstillinger</li>
                      <li>Feedback og kommentarer</li>
                      <li>Søgeforespørgsler på hjemmesiden</li>
                      <li>Cookie-præferencer</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hvordan bruger vi dine oplysninger?</h2>
                <p className="text-lg leading-relaxed mb-4">Vi bruger de indsamlede oplysninger til følgende formål:</p>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
                  <li>At levere og vedligeholde vores tjenester</li>
                  <li>At forbedre brugeroplevelsen på vores hjemmeside</li>
                  <li>At analysere, hvordan vores hjemmeside bruges</li>
                  <li>At personalisere indhold og anbefalinger</li>
                  <li>At sikre hjemmesidens sikkerhed og forhindre misbrug</li>
                  <li>At overholde juridiske forpligtelser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Deling af oplysninger</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi sælger, handler eller udlejer ikke dine personlige oplysninger til tredjeparter. Vi kan dog dele
                  oplysninger i følgende situationer:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Tjenesteudbydere</h3>
                    <p className="text-lg leading-relaxed">
                      Vi kan dele oplysninger med betroede tredjeparter, der hjælper os med at drive vores hjemmeside,
                      såsom hosting-udbydere og analysetjenester. Disse parter er forpligtet til at beskytte dine
                      oplysninger.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-6 border border-[#6C1EFF]/20">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Juridiske krav</h3>
                    <p className="text-lg leading-relaxed">
                      Vi kan videregive oplysninger, hvis det kræves ved lov, eller hvis vi i god tro mener, at sådan
                      handling er nødvendig for at overholde juridiske processer eller beskytte vores rettigheder.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Datasikkerhed</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi implementerer passende sikkerhedsforanstaltninger for at beskytte dine personlige oplysninger mod
                  uautoriseret adgang, ændring, videregivelse eller ødelæggelse. Dette inkluderer:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
                  <li>SSL-kryptering af data under transmission</li>
                  <li>Sikker opbevaring af data på beskyttede servere</li>
                  <li>Regelmæssige sikkerhedsopdateringer og -kontroller</li>
                  <li>Begrænset adgang til personlige oplysninger</li>
                  <li>Regelmæssig træning af personale i datasikkerhed</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Selvom vi bestræber os på at beskytte dine oplysninger, kan ingen metode til transmission over
                  internettet eller elektronisk opbevaring være 100% sikker.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Dine rettigheder</h2>
                <p className="text-lg leading-relaxed mb-4">
                  I henhold til GDPR og dansk databeskyttelseslovgivning har du følgende rettigheder:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-4 border border-[#6C1EFF]/20">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2">Ret til indsigt</h3>
                    <p className="text-base">
                      Du har ret til at få oplyst, hvilke personlige oplysninger vi behandler om dig.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-4 border border-[#6C1EFF]/20">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2">Ret til berigtigelse</h3>
                    <p className="text-base">Du har ret til at få urigtige oplysninger om dig selv rettet.</p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-4 border border-[#6C1EFF]/20">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2">Ret til sletning</h3>
                    <p className="text-base">
                      Du har ret til at få dine personlige oplysninger slettet under visse omstændigheder.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-lg p-4 border border-[#6C1EFF]/20">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2">Ret til begrænsning</h3>
                    <p className="text-base">Du har ret til at begrænse behandlingen af dine personlige oplysninger.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Opbevaring af data</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi opbevarer dine personlige oplysninger kun så længe, det er nødvendigt for de formål, de blev
                  indsamlet til, eller som krævet af gældende lovgivning.
                </p>
                <div className="bg-gradient-to-r from-[#6C1EFF]/10 to-[#00C8FF]/10 rounded-lg p-6 border border-[#6C1EFF]/30">
                  <h3 className="text-xl font-bold text-white mb-3">Opbevaringsperioder:</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                    <li>Webstedsanalysedata: Op til 26 måneder</li>
                    <li>Cookie-data: Varierer efter cookie-type (se cookie-politik)</li>
                    <li>Logfiler: Op til 12 måneder</li>
                    <li>Brugerindstillinger: Indtil du sletter dem eller anmoder om sletning</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Internationale overførsler</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Dine oplysninger kan blive overført til og behandlet i lande uden for EU/EØS. I sådanne tilfælde
                  sikrer vi, at der er passende sikkerhedsforanstaltninger på plads for at beskytte dine oplysninger i
                  overensstemmelse med GDPR.
                </p>
                <p className="text-lg leading-relaxed">
                  Vi bruger kun tjenesteudbydere, der kan garantere et passende beskyttelsesniveau for personlige
                  oplysninger.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Ændringer i privatlivspolitikken</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive kommunikeret
                  på vores hjemmeside. Vi opfordrer dig til at gennemgå denne politik regelmæssigt.
                </p>
                <p className="text-lg leading-relaxed">Denne politik blev sidst opdateret i december 2024.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Ansvarligt spil og mindreårige</h2>
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg p-6 border border-red-500/30">
                  <p className="text-lg leading-relaxed text-center mb-4">
                    <strong className="text-red-400">Vigtigt:</strong> Vores hjemmeside er kun beregnet til personer
                    over 18 år. Vi indsamler ikke bevidst personlige oplysninger fra børn under 18 år.
                  </p>
                  <p className="text-lg leading-relaxed text-center">
                    Hvis du har problemer med spil, søg hjælp hos relevante organisationer. Spil ansvarligt.
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
