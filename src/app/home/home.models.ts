/** Interfaccia per i dettagli di un personaggio */
export interface DettagliPersonaggio {
  nome: string;
  perc: number;
  percPerTurno: number;
  rage: number;
  effettiAttivi: Effetto[];
  statistiche: {
    // pfTot: number;
    // pfAttuali: number;
    // pfTmp: number;
    // durabilita: number;
    // riduzione: number;
    // bonusDanno: number;
    // bonusTxC: number;
    // bonusCrit: number;
    // bonusCrtiChance: number;
    descrizione: string;
    valore: number;
  }[];
  abilita: Abilita[][];
  selected?: boolean;
}

/** Interfaccia per gli effetti attivi */
export interface Effetto {
  descrizione: string;
  durata: number;
}

/** Interfaccia per le abilità */
export interface Abilita {
  cd: number;
  turniAttesa: number;
  incontro: boolean;
  bloccata: boolean;
}
