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
        descrizione: 'Rage',
        valore: 10
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
        descrizione: 'Danno',
        valore: -1
      },
      {
        descrizione: 'Cure',
        valore: 4
      },
      {
        descrizione: 'TxC',
        valore: 2
      },
      {
        descrizione: 'Velocità',
        valore: 6
      },
      {
        descrizione: 'Crit chance',
        valore: 3
      },
      {
        descrizione: 'Crit dmg',
        valore: 10
      }
    ],
    abilita: [
      [
        {
          cd: 3,
          incontro: false,
          turniAttesa: 0
        },
        {
          cd: 2,
          incontro: false,
          turniAttesa: 1
        },
        {
          cd: 1,
          incontro: false,
          turniAttesa: 0
        },
        {
          cd: 1,
          incontro: false,
          turniAttesa: 0,
          bloccata: true
        },
        {
          cd: 1,
          incontro: false,
          turniAttesa: 0,
          bloccata: true
        }
      ],
      [
        {
          cd: 3,
          incontro: false,
          turniAttesa: 2
        },
        {
          cd: 1,
          incontro: true,
          turniAttesa: 0
        },
        {
          cd: 1,
          incontro: false,
          turniAttesa: 0,
          bloccata: true
        }
      ],
      [
        {
          cd: 1,
          incontro: true,
          turniAttesa: 1
        },
        {
          cd: 1,
          incontro: true,
          turniAttesa: 0
        },
        {
          cd: 1,
          incontro: true,
          turniAttesa: 0,
          bloccata: true
        }
      ]
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
    statistiche: [],
    abilita: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: [],
    abilita: []
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
    statistiche: [],
    abilita: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: [],
    abilita: []
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
    statistiche: [],
    abilita: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: [],
    abilita: []
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
    statistiche: [],
    abilita: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: [],
    abilita: []
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
    statistiche: [],
    abilita: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: [],
    abilita: []
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
    statistiche: [],
    abilita: []
  },
  {
    nome: 'Artemisia',
    perc: 62,
    percPerTurno: 21,
    effettiAttivi: [],
    statistiche: [],
    abilita: []
  }
];

/** Mock vuoto da riempiere con dati del personaggio */
// const mockVuoto: DettagliPersonaggio = {
//   nome: '',
//   perc: 100,
//   percPerTurno: 50,
//   effettiAttivi: [],
//   statistiche: [
//     {
//       descrizione: 'PF totali',
//       valore: 0
//     },
//     {
//       descrizione: 'PF attuali',
//       valore: 0
//     },
//     {
//       descrizione: 'PF tmp',
//       valore: 0
//     },
//     {
//       descrizione: 'Rage',
//       valore: 0
//     },
//     {
//       descrizione: 'Durabilità',
//       valore: 0
//     },
//     {
//       descrizione: 'Riduzione',
//       valore: 0
//     },
//     {
//       descrizione: 'Danno',
//       valore: 0
//     },
//     {
//       descrizione: 'Cure',
//       valore: 0
//     },
//     {
//       descrizione: 'TxC',
//       valore: 0
//     },
//     {
//       descrizione: 'Velocità',
//       valore: 0
//     },
//     {
//       descrizione: 'Crit chance',
//       valore: 0
//     },
//     {
//       descrizione: 'Crit dmg',
//       valore: 0
//     }
//   ],
//   abilita: [
//     [
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0
//       },
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0
//       },
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0
//       },
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0,
//         bloccata: false
//       },
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0,
//         bloccata: false
//       }
//     ],
//     [
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0
//       },
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0
//       },
//       {
//         cd: 0,
//         incontro: false,
//         turniAttesa: 0,
//         bloccata: false
//       }
//     ],
//     [
//       {
//         cd: 1,
//         incontro: true,
//         turniAttesa: 0
//       },
//       {
//         cd: 1,
//         incontro: true,
//         turniAttesa: 0
//       },
//       {
//         cd: 1,
//         incontro: true,
//         turniAttesa: 0,
//         bloccata: false
//       }
//     ]
//   ]
// };
