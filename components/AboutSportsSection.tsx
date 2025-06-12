"use client"

import { motion } from "framer-motion"

export default function AboutSportsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1B1B1B] via-[#2A1B3D] to-[#1B1B1B]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sportsbetting i Danmark
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            En dybdegående guide til sportsbetting, odds og strategier fra Danmarks mest erfarne eksperter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Vores Ekspertise</h3>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Med over 15 års erfaring inden for sportsbetting har vores team af eksperter analyseret tusindvis af
                kampe, testet hundredvis af betting sites og hjulpet danske spillere med at træffe informerede
                beslutninger. Vi forstår kompleksiteten i moderne sportsbetting og de udfordringer, som både nye og
                erfarne spillere står overfor.
              </p>
              <p>
                Vores tilgang er baseret på grundig research, statistisk analyse og praktisk erfaring. Vi tester ikke
                kun betting sites på deres bonusser, men også på deres odds-kvalitet, live betting funktioner, cash-out
                muligheder og kundeservice. Dette giver os et unikt indblik i, hvad der virkelig gør en betting site
                værd at bruge.
              </p>
              <p>
                Vi holder os opdateret med de seneste trends inden for sportsbetting, fra nye betting markeder til
                teknologiske innovationer som live streaming og mobile apps. Vores mål er at være din pålidelige guide i
                den konstant udviklende verden af online sportsbetting.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Sportsbetting Fundamentals</h3>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Sportsbetting handler om meget mere end bare at gætte på resultatet af en kamp. Det kræver forståelse af
                odds, sandsynligheder, værdi-betting og bankroll management. Succesfulde bettere forstår, at langsigtede
                gevinster kommer fra disciplineret tilgang og grundig analyse.
              </p>
              <p>
                Odds afspejler ikke kun sandsynligheden for et udfald, men også bookmakernes margin og markedets
                perception. At forstå hvordan odds fungerer, hvordan de beregnes og hvordan man identificerer værdi, er
                fundamentalt for enhver seriøs better. Vi lærer dig at læse mellem linjerne og finde de bedste
                muligheder.
              </p>
              <p>
                Live betting har revolutioneret sportsbetting ved at tillade væddemål under kampens forløb. Dette kræver
                hurtig beslutningstagning og evnen til at læse kampens momentum. Vores guides hjælper dig med at mestre
                denne spændende form for betting.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-[#2A1B3D] to-[#1B1B1B] rounded-3xl p-12 mb-20 border border-[#6C1EFF]/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-10 text-center">Populære Sportsgrene i Danmark</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-2xl font-bold text-[#FFD700] mb-4">Fodbold</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fodbold dominerer det danske betting marked med Superligaen, Champions League og internationale
                turneringer som de mest populære. Danske spillere følger ikke kun hjemlige kampe, men også Premier
                League, La Liga og Bundesliga. Fodbold tilbyder et enormt udvalg af betting markeder fra simple 1X2
                væddemål til komplekse prop bets på spillerstatistikker.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-[#FFD700] mb-4">Håndbold</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Danmark er en håndboldnation, og dette afspejles i betting aktiviteten. Fra herrelandsholdet til
                kvindelandsholdet og klubturneringer som Champions League, er håndbold en fast favorit blandt danske
                bettere. Sporten tilbyder spændende live betting muligheder med hurtige skift i momentum og scoring.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-[#FFD700] mb-4">Tennis</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tennis er perfekt til betting med sin individuelle karakter og hyppige turneringer året rundt. Grand
                Slam turneringerne tiltrækker størst interesse, men også ATP og WTA events har loyal følgerskare. Tennis
                betting omfatter alt fra match vindere til specifikke set scores og spillerstatistikker.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Betting Strategier og Psykologi</h3>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Succesfuld sportsbetting kræver mere end bare sportskundskab. Det handler om at forstå psykologien bag
                beslutningstagning, håndtere følelser og udvikle disciplin. Mange bettere taber penge ikke på grund af
                manglende viden om sport, men på grund af dårlig bankroll management og emotionelle beslutninger.
              </p>
              <p>
                Værdi-betting er kernen i profitabel betting. Det handler om at identificere situationer hvor
                bookmakernes odds er højere end den reelle sandsynlighed for et udfald. Dette kræver omfattende
                research, statistisk analyse og evnen til at tænke langsigtet. Vores eksperter deler deres metoder til
                at finde disse værdifulde muligheder.
              </p>
              <p>
                Bankroll management er måske det vigtigste aspekt af sportsbetting. Det handler om at beskytte din
                betting kapital gennem disciplineret indsatsstørrelse og risikostyring. Vi anbefaler aldrig at satse
                mere end 1-5% af din samlede bankroll på et enkelt væddemål, uanset hvor sikker du føler dig.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Ansvarligt Spil</h3>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Sportsbetting skal altid være underholdning først og fremmest. Vi promoverer ansvarligt spil og
                opfordrer alle til at sætte grænser for deres betting aktivitet. Dette inkluderer både tids- og
                pengemæssige grænser.
              </p>
              <p>
                Hvis betting begynder at påvirke dit daglige liv negativt, er det vigtigt at søge hjælp. Danmark har
                fremragende ressourcer til problemspillere, og alle licenserede betting sites tilbyder
                selvudelukkelsesmuligheder.
              </p>
              <p>
                Husk at betting aldrig skal ses som en måde at tjene penge på eller løse økonomiske problemer. Det er
                underholdning med en omkostning, ligesom biografbilletter eller koncerter.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-[#6C1EFF]/10 to-[#00C8FF]/10 rounded-3xl p-12 border border-[#6C1EFF]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-8">Vores Mission</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
            Hos BedstBettingSite.com er vores mission at uddanne og informere danske spillere om sportsbetting. Vi tror
            på gennemsigtighed, ærlighed og ansvarligt spil. Vores anmeldelser er upartiske, vores guides er omfattende,
            og vores råd er baseret på års erfaring og dyb forståelse af betting industrien. Vi tjener ikke kun som en
            sammenligning af betting sites, men som din pålidelige partner i din betting rejse. Uanset om du er
            nybegynder eller erfaren better, er vi her for at hjælpe dig med at træffe bedre beslutninger og få mere ud
            af din betting oplevelse.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
