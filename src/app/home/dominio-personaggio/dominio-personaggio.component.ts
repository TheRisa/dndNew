import { Component, Input, OnInit } from '@angular/core';

import { DettagliPersonaggio } from '../home.models';

/** Classe per la gestione di DominioPersonaggioComponent */
@Component({
  selector: 'app-dominio-personaggio',
  templateUrl: './dominio-personaggio.component.html',
  styleUrls: ['./dominio-personaggio.component.scss']
})
export class DominioPersonaggioComponent implements OnInit {
  /** Dettagli da mostrare */
  @Input() dettagli: DettagliPersonaggio = { nome: 'Aratax', perc: 80 };

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo onInit
   */
  ngOnInit() {}

  /**
   * Metodo per alterare la percentuale da button
   *
   * @param incremento Flag per indicare un incremento o decremento
   */
  public cambiaPerc(incremento: boolean): void {
    // Aggiorno perc di 10 in 10
    this.dettagli.perc = incremento
      ? this.dettagli.perc + 10
      : this.dettagli.perc - 10;
    // Se la perc è 200 o più torno al 200%
    if (incremento && this.dettagli.perc >= 200) {
      this.dettagli.perc = 200;
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
    // Applico sfondo verde se è 200%
    if (this.dettagli.perc === 200) {
      return '#8af58a';
    }
    // Applico sfondo rosso se è 200%
    if (this.dettagli.perc === -200) {
      return '#eb7676';
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
