/** Interfaccia per i dettagli di un personaggio */
export interface DettagliPersonaggio {
  nome: string;
  perc: number;
  percPerTurno: number;
  selected?: boolean;
}
