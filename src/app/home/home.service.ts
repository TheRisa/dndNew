import { Injectable, Input } from '@angular/core';

import { DettagliPersonaggio } from './home.models';

import { mockPersonaggi } from './mock';

/** Classe per la gestione del service HomeService */
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  /** Lista dei personaggi da mostrare */
  public personaggi = mockPersonaggi;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Getter dell'indice del personaggio selezionato
   *
   * @returns Indice del personaggio selezionato
   */
  public getPersonaggioSelezionato(): DettagliPersonaggio {
    return this.personaggi.find((personaggio) => personaggio.selected);
  }

  /**
   * Setter dell'indice del personaggio selezionato
   *
   * @param indice Indice del personaggio cliccato
   */
  public setPersonaggioSelezionato(indice: number): void {
    // Controllo su indice
    if (indice < 0 || indice > this.personaggi.length) {
      return;
    }

    // Tolgo la selezione a tutti gli altri e imposto il nuovo personaggio selezionato
    this.personaggi.forEach((personaggio) => (personaggio.selected = false));
    this.personaggi[indice].selected = true;
  }

  /**
   * Completa il turno del personaggio selezionato
   */
  public completaTurno(): void {
    // Variabile di appoggio
    const personaggio = this.getPersonaggioSelezionato();
    if (personaggio) {
      // Diminuisco del 100% la %
      personaggio.perc = personaggio.perc - 100;
      // Se è < -200 la riporto a -200
      if (personaggio.perc < -200) {
        personaggio.perc = -200;
      }
      // Riordino i personaggi
      this.riordinaPersonaggi();
    }
  }

  /**
   * Metodo per riordinare i personaggi in ordine decrescente di perc
   */
  private riordinaPersonaggi(): void {
    this.personaggi.sort(
      (personaggio1, personaggio2) => personaggio2.perc - personaggio1.perc
    );
  }
}
