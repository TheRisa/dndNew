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
      { descrizione: this.descrizioneEffetto, durata: this.durataEffetto },
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
    if (
      ev.detail.role === 'confirm' &&
      this.durataEffetto &&
      this.descrizioneEffetto
    ) {
      this.homeSrvc.aggiungiEffetto({
        descrizione: this.descrizioneEffetto,
        durata: this.durataEffetto
      });
    }

    // Reset dei form
    this.descrizioneEffetto = '';
    this.durataEffetto = null;
  }

  /**
   * Passando un'abilità calcola il colore da mostrare
   *
   * @param abilita Abilità di cui calcolare il colore
   * @returns Colore dell'abilità
   */
  public calcolaColore(abilita: Abilita): string {
    // Se è bloccata allora è rossa
    if (abilita.bloccata) {
      return '#eb7676';
    }

    // Controllo se l'abilità è a incontro
    if (abilita.incontro) {
      // Se l'abilità è stata usata allora è arancione, altrimenti è verde
      return abilita.turniAttesa === 0 ? '#f7ce83' : '#8af58a';
    }

    // Se l'abilità è disponibile allora è verde
    if (abilita.turniAttesa === 0) {
      return '#8af58a';
    }

    // L'abilità è in cd, quindi appare il numero di turni
    return '';
  }

  public gestisciCdAbilita(abilita: Abilita): void {
    // Se l'abilitaà è bloccata non devo interagirci
    if (abilita.bloccata) {
      return;
    }

    // Se è disponibile imposto il cd al numero massimo di turniAttesa
    // Se è in cd ho cliccato per diminuire il cd (quindi lo abbasso di 1)
    abilita.turniAttesa =
      abilita.turniAttesa === 0 ? abilita.cd : abilita.turniAttesa - 1;
  }
}
