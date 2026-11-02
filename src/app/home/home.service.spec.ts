import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('limits speed to 300 after completing a turn', () => {
    service.caricapersonaggi([
      {
        nome: 'Personaggio',
        perc: 350,
        percPerTurno: 0,
        rage: 0,
        superiorita: 0,
        inferiorita: 0,
        padronanza: 0,
        effettiAttivi: []
      }
    ]);

    service.completaTurno();

    expect(service.getPersonaggiList()[0].perc).toBe(300);
  });

  it('limits speed changes from the next round to the allowed range', () => {
    service.caricapersonaggi([
      {
        nome: 'Massimo',
        perc: 290,
        percPerTurno: 50,
        rage: 0,
        superiorita: 0,
        inferiorita: 0,
        padronanza: 0,
        effettiAttivi: []
      },
      {
        nome: 'Minimo',
        perc: -190,
        percPerTurno: -50,
        rage: 0,
        superiorita: 0,
        inferiorita: 0,
        padronanza: 0,
        effettiAttivi: []
      }
    ]);

    service.nextRound();

    expect(
      service.getPersonaggiList().find((personaggio) => personaggio.nome === 'Massimo')
        .perc
    ).toBe(300);
    expect(
      service.getPersonaggiList().find((personaggio) => personaggio.nome === 'Minimo')
        .perc
    ).toBe(-200);
  });
});
