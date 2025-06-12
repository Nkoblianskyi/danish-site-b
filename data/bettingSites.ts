export interface BettingSite {
  position: number
  name: string
  logo: string
  slogan: string
  rating: number
  reviews: number
  bonus: string
  bonusDetails?: string
  cta: string
  disclaimer: string
  url: string
}

export const bettingSites: BettingSite[] = [
  {
    position: 1,
    name: "Expekt",
    logo: "/expekt.png",
    slogan: "Specialiseret i live betting med konkurrencedygtige odds",
    rating: 5,
    reviews: 59283,
    bonus: "Få 500 kr.",
    bonusDetails: "Få 500 kr. live FREE BET",
    cta: "Få Bonus Nu",
    disclaimer: "Spil ansvarligt. 18+. Besøg GambleAware.org for hjælp og støtte. T&C gælder.",
    url: "https://www.expekt.dk/",
  },
  {
    position: 2,
    name: "ComeOn",
    logo: "/cameon.png",
    slogan: "ComeOn er en af Danmarks mest populære betting sider med et stort udvalg af sportsgrene og konkurrencedygtige odds.",
    rating: 4.9,
    reviews: 53283,
    bonus: "Få 500 kr.",
    bonusDetails: "100% op til 1.000 kr.",
    cta: "Få Bonus Nu",
    disclaimer: "Spil ansvarligt. 18+. Besøg GambleAware.org for hjælp og støtte. T&C gælder.",
    url: "https://www.comeon.com/",
  },
  {
    position: 3,
    name: "LeoVegas",
    logo: "/lasvegas.svg",
    slogan: "Markedsledende casino og sportsbook med hurtige udbetalinger",
    rating: 4.9,
    reviews: 49747,
    bonus: "Op til 1.000 kr.",
    bonusDetails: "Få op til 1.000 kr. i kontanter",
    cta: "Få Bonus Nu",
    disclaimer: "Spil ansvarligt. 18+. Besøg GambleAware.org for hjælp og støtte. T&C gælder.",
    url: "https://www.leovegas.dk/",
  },
  {
    position: 4,
    name: "GetLucky",
    logo: "/lucky.png",
    slogan: "Nyt og innovativt betting site med gode bonusser",
    rating: 4.8,
    reviews: 38987,
    bonus: "Få et 100 kr. FREE BET",
    bonusDetails: "gratis væddemål",
    cta: "Få Bonus Nu",
    disclaimer: "Spil ansvarligt. 18+. Besøg GambleAware.org for hjælp og støtte. T&C gælder.",
    url: "https://www.getlucky.com/da",
  },

  {
    position: 5,
    name: "Betsson",
    logo: "/betsson.png",
    slogan: "Nordisk bookmaker med stærk fokus på fodbold",
    rating: 4.8,
    reviews: 37856,
    bonus: "Fodbold Kombi-boost op til 70%",
    bonusDetails: "op til 70%",
    cta: "Få Bonus Nu",
    disclaimer: "Spil ansvarligt. 18+. Besøg GambleAware.org for hjælp og støtte. T&C gælder.",
    url: "https://www.betsson.dk/",
  },

]

// Helper function to get top site
export const getTopSite = () => bettingSites[0]

// Helper function to get top 3 sites
export const getTop3Sites = () => bettingSites.slice(0, 3)
