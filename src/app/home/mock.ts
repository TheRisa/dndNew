import { DettagliPersonaggio } from './home.models';

/** Mock vuoto da riempiere con dati del personaggio */
const mockVuoto: DettagliPersonaggio = {
  nome: '',
  perc: 100,
  percPerTurno: 50,
  effettiAttivi: [],
  rage: 0,
  statistiche: [
    {
      descrizione: 'PF totali',
      valore: 0
    },
    {
      descrizione: 'PF attuali',
      valore: 0
    },
    {
      descrizione: 'PF tmp',
      valore: 0
    },
    {
      descrizione: 'Rage',
      valore: 0
    },
    {
      descrizione: 'Durabilità',
      valore: 0
    },
    {
      descrizione: 'Riduzione',
      valore: 0
    },
    {
      descrizione: 'Danno',
      valore: 0
    },
    {
      descrizione: 'Cure',
      valore: 0
    },
    {
      descrizione: 'TxC',
      valore: 0
    },
    {
      descrizione: 'Velocità',
      valore: 0
    },
    {
      descrizione: 'Crit chance',
      valore: 0
    },
    {
      descrizione: 'Crit dmg',
      valore: 0
    }
  ],
  abilita: [
    [
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      }
    ],
    [
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 0,
        incontro: false,
        turniAttesa: 0,
        bloccata: true
      }
    ],
    [
      {
        cd: 1,
        incontro: true,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 1,
        incontro: true,
        turniAttesa: 0,
        bloccata: true
      },
      {
        cd: 1,
        incontro: true,
        turniAttesa: 0,
        bloccata: true
      }
    ]
  ]
};
