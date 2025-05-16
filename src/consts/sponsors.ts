import type { Sponsors } from '../types/sponsors.ts';
import Amazon from "../../image/sponsors/amazon.png?url";
import Notion from "../../image/sponsors/notion.png?url";
import Binance from "../../image/sponsors/binance.png?url";
import LinkedIn from "../../image/sponsors/linkedin.png?url";
import Santander from "../../image/sponsors/santander.png?url";
import TradeRepublic from "../../image/sponsors/traderepublic.png?url";
import UniversidadDeNavarra from "../../image/sponsors/uninav.png?url";
import PantheonDeSorbonne from "../../image/sponsors/pantheon.png?url";
import ForoEconomicoDeAndorra from "../../image/sponsors/aef.png?url";
import ParlamentDeCatalunya from "../../image/sponsors/parlamentocatalunya.png?url";
import ColumbiaUniversity from "../../image/sponsors/columbia.png?url";
import Hostinger from "../../image/sponsors/hostinger.png?url";

export const sponsors: Sponsors[] = [
    {
        id: "amazon",
        name: "Amazon",
        url: "https://www.amazon.com/", 
        image: {
            logo: Amazon,
            width: 300,
            height: 150
        },
    },
    {
        id: "notion",
        name: "Notion",
        url: "https://www.notion.so/", 
        image: {
            logo: Notion,
            width: 300,
            height: 150
        },
    },
    {
        id: "binance",
        name: "Binance",
        url: "https://www.binance.com/", 
        image: {
            logo: Binance,
            width: 300,
            height: 150
        }
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://www.linkedin.com/", 
        image: {
            logo: LinkedIn,
            width: 300,
            height: 150
        }
    },
    {
        id: "santander",
        name: "Santander",
        url: "https://www.santander.com/",
        image: {
            logo: Santander,
            width: 300,
            height: 150
        }
    },
    {
        id: "trade-republic",
        name: "TradeRepublic",
        url: "https://www.traderepublic.com/",
        image: {
            logo: TradeRepublic,
            width: 300,
            height: 150
        }
    },
    {
        id: "universidad-de-navarra",
        name: "Universidad-de-Navarra",
        url: "https://www.unav.edu/",
        image: {
            logo: UniversidadDeNavarra,
            width: 300,
            height: 150
        }
    },
    {
        id: "pantheon-de-sorbonne",
        name: "Panthéon-de-Sorbonne",
        url: "https://welcome.pantheonsorbonne.fr/en/",
        image: {
            logo: PantheonDeSorbonne,
            width: 300,
            height: 150
        }
    },
    {
        id: "foro-economico-de-andorra",
        name: "Foro-Económico-de-Andorra",
        url: "https://www.andorraef.com/es",    
        image: {
            logo: ForoEconomicoDeAndorra,
            width: 300,
            height: 150
        }
    },
    {
        id: "parlament-de-catalunya",
        name: "Parlament-de-Catalunya",
        url: "https://www.parlament.cat/",
        image: {
            logo: ParlamentDeCatalunya,
            width: 300,
            height: 150
        }
    },
    {
        id: "columbia-university",
        name: "Columbia-University",
        url: "https://www.columbia.edu/",
        image: {
            logo: ColumbiaUniversity,
            width: 300,
            height: 150
        }
    },
    {
        id: "hostinger",
        name: "Hostinger",
        url: "https://www.hostinger.com/",
        image: {
            logo: Hostinger,
            width: 300,
            height: 150
        }
    }
] ;