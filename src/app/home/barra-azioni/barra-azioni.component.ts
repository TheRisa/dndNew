import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HomeService } from '../home.service';
import { DettagliPersonaggio } from '../home.models';
import { IonModal } from '@ionic/angular';

/** Classe per la gestione del componente BarraAzioniComponent */
@Component({
  selector: 'app-barra-azioni',
  templateUrl: './barra-azioni.component.html',
  styleUrls: ['./barra-azioni.component.scss']
})
export class BarraAzioniComponent implements OnInit {
  @ViewChild('upload') upload: ElementRef;
  @ViewChild(IonModal) modal: IonModal;

  /** Dati per il personaggio da inserire */
  public personaggioAggiunto: DettagliPersonaggio = {
    effettiAttivi: [],
    nome: undefined,
    perc: 0,
    percPerTurno: 0,
    rage: 0,
    superiorita: 0,
    padronanza: 0
  };

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
   * Click sul pulsante di carica
   */
  public carica(): void {
    this.homeSrvc.caricapersonaggi(
      JSON.parse(localStorage.getItem('personaggi'))
    );
  }

  /**
   * Apre la modale per aggiungere un personaggio
   */
  public openAddModal(): void {
    this.personaggioAggiunto.nome = undefined;
    this.personaggioAggiunto.perc = undefined;
    this.personaggioAggiunto.percPerTurno = undefined;
    this.modal.present();
  }

  /**
   * Metodo al click sul conferma nella modale
   */
  public aggiungiPersonaggio(): void {
    this.homeSrvc.aggiungiPersonaggi([this.personaggioAggiunto]);
    this.modal.dismiss();
  }

  /**
   * Metodo di salvataggio dei dati attuali (apre tab da cui copiare i dati)
   */
  public salva(): void {
    localStorage.setItem(
      'personaggi',
      JSON.stringify(this.homeSrvc.getPersonaggiList())
    );
  }
}
