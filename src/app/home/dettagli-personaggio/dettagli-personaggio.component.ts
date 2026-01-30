import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

import { DettagliPersonaggio } from '../home.models';

import { HomeService } from '../home.service';

interface Status {
  id: number;
  name: string;
  hasX: boolean;
  hasY: boolean;
  x?: string;
  y?: string;
}

/** Classe per la gestione del componente DettagliPersonaggioComponent */
@Component({
  selector: 'app-dettagli-personaggio',
  templateUrl: './dettagli-personaggio.component.html',
  styleUrls: ['./dettagli-personaggio.component.scss']
})
export class DettagliPersonaggioComponent implements OnInit {
  /** Dettagli da mostrare del personaggio */
  @Input() personaggio: DettagliPersonaggio = undefined;

  /** Modale inline per inserimento effetto */
  @ViewChild(IonModal) modal: IonModal;
  /** NgModel per descrizione effetto */
  public descrizioneEffetto = '';
  /** NgModel per durata effetto */
  public durataEffetto = null;
  /** NgModel per durata effetto */
  public isPermanent = false;
  /** NgModel per schermata di inserimento effetto */
  public inserimentoEffetto: 'custom' | 'default' = 'default';
  /** NgModel per inserimento status */
  public statusSelezionato = 0;
  /** Lista degli status selezionabili */
  public listaStatus: Status[] = [
    {
      id: 1,
      name: 'Afferrato X',
      hasX: true,
      hasY: false
    },
    {
      id: 2,
      name: 'Corroso X (durata Y)',
      hasX: true,
      hasY: true
    },
    {
      id: 3,
      name: 'Debilitato X %',
      hasX: true,
      hasY: false
    },
    {
      id: 4,
      name: 'Esausto (durata X)',
      hasX: true,
      hasY: false
    },
    {
      id: 5,
      name: 'Combattivo',
      hasX: false,
      hasY: false
    },
    {
      id: 6,
      name: 'Parallizzato X',
      hasX: true,
      hasY: false
    },
    {
      id: 7,
      name: 'Privo di sensi',
      hasX: false,
      hasY: false
    },
    {
      id: 8,
      name: 'Radioattivo X',
      hasX: true,
      hasY: false
    },
    {
      id: 9,
      name: 'Rallentato X',
      hasX: true,
      hasY: false
    },
    {
      id: 10,
      name: 'Resistente a risonanza X',
      hasX: true,
      hasY: false
    },
    {
      id: 11,
      name: 'Sanguinante X (durata Y)',
      hasX: true,
      hasY: true
    },
    {
      id: 12,
      name: 'Sfinito',
      hasX: false,
      hasY: false
    },
    {
      id: 13,
      name: 'Sovraccaricato (durata X)',
      hasX: true,
      hasY: false
    },
    {
      id: 14,
      name: 'Spaventato da X (durata Y)',
      hasX: true,
      hasY: true
    },
    {
      id: 15,
      name: 'Stordito X',
      hasX: true,
      hasY: false
    },
    {
      id: 16,
      name: 'Trattenuto X',
      hasX: true,
      hasY: false
    },
    {
      id: 17,
      name: 'Velocizzato',
      hasX: false,
      hasY: false
    },
    {
      id: 18,
      name: 'Vulnerabile a risonanza X',
      hasX: true,
      hasY: false
    }
  ];

  /**
   * Costruttore della classe
   *
   * @param homeSrvc Istanza di HomeService
   */
  constructor(public homeSrvc: HomeService) {}

  /**
   * Metodo onInit
   */
  ngOnInit(): void {}

  /**
   * Rimuove l'effetto passato
   *
   * @param index Indice dell'effetto
   */
  public rimuoviEffetto(index: number): void {
    this.personaggio.effettiAttivi.splice(index, 1);
  }

  /**
   * Getter per status
   *
   * @param id Id status
   * @returns Dettagli status selezionato
   */
  public getStatus(id: number): Status | undefined {
    return this.listaStatus.find((stat) => stat.id === id);
  }

  /**
   * Chiusura modale senza effetti
   */
  public cancel(): void {
    this.modal.dismiss(null, 'cancel');
  }

  /**
   * Chiusura modale con aggiunta di effetto
   */
  public confirm(): void {
    this.modal.dismiss(
      {
        default:
          this.inserimentoEffetto === 'default'
            ? this.getStatus(this.statusSelezionato)
            : null,
        custom:
          this.inserimentoEffetto === 'custom'
            ? {
                descrizione: this.descrizioneEffetto,
                durata: this.durataEffetto,
                isPermanent: this.isPermanent
              }
            : null
      },
      'confirm'
    );
  }

  /**
   * Metodo applicato alla chiusura della modale
   *
   * @param event Evento di dismissione
   */
  public onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // Aggiorno gli effetti se conferma
    if (ev.detail.role === 'confirm') {
      // Custom status
      if (this.inserimentoEffetto === 'custom') {
        this.homeSrvc.aggiungiEffetto({
          descrizione: this.descrizioneEffetto,
          durata: this.durataEffetto,
          isPermanent: this.isPermanent
        });
        return;
      }

      // Conversione default status in effetto
      const status = this.getStatus(this.statusSelezionato);
      let descrizione = status.name;
      descrizione = descrizione.replace('(durta X)', '').trim();
      descrizione = descrizione.replace('X', status.x).trim();
      descrizione = descrizione.replace('(durata Y)', '').trim();
      descrizione = descrizione.replace('Y', status.y).trim();
      const isPermanent = !status.name.includes('durata');
      let durata = 0;
      if (status.name.includes('durata X')) {
        durata = +status.x;
      }
      if (status.name.includes('durata Y')) {
        durata = +status.y;
      }

      this.homeSrvc.aggiungiEffetto({
        descrizione,
        isPermanent,
        durata
      });
    }

    // Reset dei form
    this.descrizioneEffetto = '';
    this.durataEffetto = null;
    this.isPermanent = false;
  }

  /**
   * Metodo al clisk sui pulsanti di gestione superiorità
   *
   * @param isSup Flag che indica se aggiungere superiorità o inferiorità
   */
  public cambiaSup(isSup: boolean): void {
    this.personaggio.superiorita = isSup
      ? this.personaggio.superiorita + 1
      : this.personaggio.superiorita - 1;

    if (this.personaggio.superiorita > 2) {
      this.personaggio.superiorita = 2;
    }
    if (this.personaggio.superiorita < -2) {
      this.personaggio.superiorita = -2;
    }
  }

  /**
   * Metodo al clisk sui pulsanti di gestione padronanza
   *
   * @param isPadronanza Flag che indica se aggiungere padronanza o sfinimento
   */
  public cambiaPadronanza(isPadronanza: boolean): void {
    this.personaggio.padronanza = isPadronanza
      ? this.personaggio.padronanza + 1
      : this.personaggio.padronanza - 1;
  }

  /**
   * Passando il grado attuale di padronanza si ottiene una descrizione dell'effetto
   *
   * @param padronanza Grado di padronanza attuale del personaggio
   * @returns Effetto della padronanza
   */
  public calcolaEffettoPadronanza(padronanza: number): string {
    // Padronanza non passata o 0 -> nessun effetto
    if (!padronanza) {
      return '';
    }

    let dado = '1d4';
    if (padronanza > 1) {
      dado = '1d8';
    }
    if (padronanza > 2) {
      dado = '1d12';
    }
    // Valore positivo -> si aggiungono danni
    // Valore negatico -> si riducono danni
    return `${padronanza > 0 ? 'Aggiungi' : 'Sottrai'} ${dado} danni`;
  }
}
