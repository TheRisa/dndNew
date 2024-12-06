import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

import { Abilita, DettagliPersonaggio } from '../home.models';

import { HomeService } from '../home.service';

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
        descrizione: this.descrizioneEffetto,
        durata: this.durataEffetto,
        isPermanent: this.isPermanent
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
    if (ev.detail.role === 'confirm' && this.descrizioneEffetto) {
      this.homeSrvc.aggiungiEffetto({
        descrizione: this.descrizioneEffetto,
        durata: this.durataEffetto,
        isPermanent: this.isPermanent
      });
    }

    // Reset dei form
    this.descrizioneEffetto = '';
    this.durataEffetto = null;
    this.isPermanent = false;
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

    if (this.personaggio.padronanza > 4) {
      this.personaggio.padronanza = 4;
    }
    if (this.personaggio.padronanza < -4) {
      this.personaggio.padronanza = -4;
    }
  }

  /**
   * Passando il grado attuale di padronanza (tra - 4 e 4) si ottiene una descrizione dell'effetto
   *
   * @param padronanza Grado di padronanza attuale del personaggio
   * @returns Effetto della padronanza
   */
  public calcolaEffettoPadronanza(padronanza: number): string {
    // Padronanza non passata o 0 -> nessun effetto
    if (!padronanza) {
      return '';
    }

    // Valore positivo -> si aggiungono danni
    // Valore negatico -> di riducono danni
    let effetto = padronanza > 0 ? 'Aggiungi' : 'Sottrai';

    // La potenza dell'effetto è simmetrica per > 0 e < 0
    // Non si può salire oltre il 4 in abs
    switch (Math.abs(padronanza)) {
      case 1:
        effetto = `${effetto} 1d4`;
        break;
      case 2:
        effetto = `${effetto} 1d6`;
        break;
      case 3:
        effetto = `${effetto} 1d6 e 1d4`;
        break;
      case 4:
        effetto = `${effetto} 2d6`;
        break;
    }

    return `${effetto} danni`;
  }
}
