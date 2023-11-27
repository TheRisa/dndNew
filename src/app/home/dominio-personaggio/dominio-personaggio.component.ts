import { Component, Input, OnInit } from '@angular/core';

import { DettagliPersonaggio, morenteLabel } from '../home.models';
import { HomeService } from '../home.service';

/** Classe per la gestione di DominioPersonaggioComponent */
@Component({
  selector: 'app-dominio-personaggio',
  templateUrl: './dominio-personaggio.component.html',
  styleUrls: ['./dominio-personaggio.component.scss']
})
export class DominioPersonaggioComponent implements OnInit {
  /** Dettagli da mostrare */
  @Input() dettagli: DettagliPersonaggio = {
    nome: '',
    perc: 0,
    percPerTurno: 0,
    rage: 0,
    superiorita: 0,
    sovraccarico: 0,
    sovraccaricoMax: 0,
    effettiAttivi: []
  };
  /** Indice del dominio */
  @Input() indice = -1;

  /**
   * Costruttore della classe
   *
   * @param homeSrvc Istanza di HomeService
   */
  constructor(public homeSrvc: HomeService) {}

  /**
   * Metodo onInit
   */
  ngOnInit() {}

  /**
   * Metodo al click sulle frecce accanto alla rage
   *
   * @param isUp True se la rage va aumentata, false se va diminuita
   */
  public setRage(isUp: boolean): void {
    this.dettagli.rage = isUp ? this.dettagli.rage + 1 : this.dettagli.rage - 1;
  }

  /**
   * Metodo al click sul pulsante di morte. Imposta il personaggio come morente
   */
  public setDeath(): void {
    // Se è morto non faccio niente
    if (this.dettagli.isDead) {
      return;
    }

    this.dettagli.isMorente = !this.dettagli.isMorente;

    // Setup per morente
    if (this.dettagli.isMorente) {
      this.dettagli.perc = 0;
      this.dettagli.rage = 0;

      this.dettagli.effettiAttivi.push({
        descrizione: morenteLabel,
        durata: 3
      });
      return;
    }

    // Risollevato da terra
    this.dettagli.effettiAttivi = this.dettagli.effettiAttivi.filter(
      (effetto) => effetto.descrizione !== morenteLabel
    );
  }

  /**
   * Metodo per alterare la percentuale da button
   *
   * @param incremento Flag per indicare un incremento o decremento
   */
  public cambiaPerc(event: any, incremento: boolean): void {
    // Blocco altri click
    event.stopPropagation();
    // Aggiorno perc di 10 in 10
    this.dettagli.perc = incremento
      ? this.dettagli.perc + 10
      : this.dettagli.perc - 10;
    // Se la perc è 300 o più torno al 300%
    if (incremento && this.dettagli.perc >= 300) {
      this.dettagli.perc = 300;
    }
    // Se la perc è -200 o meno torno al -200%
    if (!incremento && this.dettagli.perc <= -200) {
      this.dettagli.perc = -200;
    }
  }

  /**
   * Calcola il background da applicare al container
   *
   * @returns Colore del background da applicare
   */
  public calcolaBackground(): string {
    // Applico sfondo verde potente se è 300%
    if (this.dettagli.perc === 300) {
      return 'rgb(106, 255, 47)';
    }
    // Applico sfondo rosso potente se è -200%
    if (this.dettagli.perc === -200) {
      return '#eb7676';
    }
    // Applico sfondo verde base se è 200%
    if (this.dettagli.perc === 200) {
      return '#8af58a';
    }
    // Applico sfondo giallo se il 100% è superato
    if (this.dettagli.perc > 99) {
      return '#efef74';
    }
    // Applico sfondo rosso se il -100% è superato
    if (this.dettagli.perc < -99) {
      return '#f7ce83';
    }
    // Non applico colori
    return '';
  }
}
