import { DettagliPersonaggio } from './home.models';

/** Mock per personaggi da mostrare */
export const mockPersonaggi: DettagliPersonaggio[] = [
  {
    nome: 'Hirkit',
    perc: 128,
    percPerTurno: 55,
    effettiAttivi: [
      {
        descrizione: 'stun brutto brutto',
        durata: 1
      }
    ],
    statistiche: [
      {
        descrizione: 'PF totali',
        valore: 30
      },
      {
        descrizione: 'PF attuali',
        valore: 20
      },
      {
        descrizione: 'PF tmp',
        valore: 2
      },
      {
        descrizione: 'Bonus cure',
        valore: 2
      },
      {
        descrizione: 'Durabilità',
        valore: 3
      },
      {
        descrizione: 'Riduzione',
        valore: 2
      },
      {
        descrizione: 'Bonus danno',
        valore: -1
      },
      {
        descrizione: 'Bonus TxC',
        valore: 2
      },
      {
        descrizione: 'Bonus crit chance',
        valore: 3
      },
      {
        descrizione: 'Bonus crit',
        valore: 10
      }
    ]
  },
  {
    nome: 'Aratax',
    perc: 110,
    percPerTurno: 60,
    effettiAttivi: [
      {
        descrizione: 'rallentamento, -2 vel',
        durata: 2
      }
    ],
    statistiche: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: []
  }
];
