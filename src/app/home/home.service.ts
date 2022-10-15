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
  /** Setter dell'indice del personaggio selezionato*/
  public setPersonaggioSelezionato(indice: number) {
    // Controllo su indice
    if (indice < 0 || indice > this.personaggi.length) {
      return;
    }

    // Tolgo la selezione a tutti gli altri e imposto il nuovo personaggio selezionato
    this.personaggi.forEach((personaggio) => (personaggio.selected = false));
    this.personaggi[indice].selected = true;
  }
}
