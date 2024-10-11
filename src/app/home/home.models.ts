/** Interfaccia per i dettagli di un personaggio */
export interface DettagliPersonaggio {
  nome: string;
  perc: number;
  percPerTurno: number;
  rage: number;
  superiorita: number;
  effettiAttivi: Effetto[];
  isMorente?: boolean;
  isDead?: boolean;
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

/** Label per la descrizione dell'effetto di sovraccaricato */
export const sovraccaricatoLabel = 'Sovraccaricato';
/** Label per la descrizione dell'effetto di esausto */
export const esaustoLabel = 'Esausto';
/** Label per la descrizione dell'effetto di morente */
export const morenteLabel = 'Morente';
