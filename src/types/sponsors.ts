export type SponsorId =
  | "amazon"
  | "notion"
  | "binance"
  | "linkedin"
  | "santander"
  | "trade-republic"
  | "universidad-de-navarra"
  | "pantheon-de-sorbonne"
  | "foro-economico-de-andorra"
  | "parlament-de-catalunya"
  | "columbia-university"
  | "hostinger";

export type SponsorName =
  | "Amazon"
  | "Notion"
  | "Binance"
  | "LinkedIn"
  | "Santander"
  | "TradeRepublic"
  | "Universidad-de-Navarra"
  | "Panthéon-de-Sorbonne"
  | "Foro-Económico-de-Andorra"
  | "Parlament-de-Catalunya"
  | "Columbia-University"
  | "Hostinger";

export interface Sponsors {
  id: SponsorId;
  name: SponsorName;
  url: string;
  image: {
    logo: any; 
    width: number;
    height: number;
  };
}
