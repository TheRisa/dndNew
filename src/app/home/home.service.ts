import { Injectable } from '@angular/core';

import { DettagliPersonaggio, Effetto, morenteLabel } from './home.models';

/** Classe per la gestione del service HomeService */
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  /** Lista dei personaggi da mostrare */
  private personaggi: DettagliPersonaggio[] = [];

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Getter di personaggi
   *
   * @returns Lista dei personaggi
   */
  public getPersonaggiList(): DettagliPersonaggio[] {
    return this.personaggi;
  }

  /**
   * Controlla se c'è almeno un personaggio caricato
   *
   * @returns True se i personaggi sono stati caricati
   */
  public isPersonaggiCaricati(): boolean {
    return this.personaggi.length > 0;
  }

  /**
   * Getter del personaggio attualmente selezionato
   *
   * @returns Indice del personaggio selezionato
   */
  public getPersonaggioSelezionato(): DettagliPersonaggio {
    return this.personaggi.find((personaggio) => personaggio.selected);
  }

  /**
   * Setter del personaggio selezionato in base all'indice
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
      // Se è < -200 la riporto a -200
      if (personaggio.perc < -200) {
        personaggio.perc = -200;
      }
      // Se è > 100 la riporto a 100
      if (personaggio.perc > 100) {
        personaggio.perc = 100;
      }

      // Riduco di 1 turno gli effetti attivi
      personaggio.effettiAttivi.forEach(
        (effetto) => (effetto.durata = effetto.durata - 1)
      );
      // Rimuovo effetti terminati
      personaggio.effettiAttivi = personaggio.effettiAttivi.filter(
        (effetto) => effetto.durata > 0
      );

      // Riordino i personaggi
      this.riordinaPersonaggi();
    }
  }

  /**
   * Metodo che attiva il round successivo
   */
  public nextRound(): void {
    this.personaggi.forEach((personaggio) => {
      // Per i personaggi morti non fo nulla
      if (personaggio.isDead) {
        return;
      }

      // Se il personaggio è morente non ottiene rapidità
      if (personaggio.isMorente) {
        personaggio.effettiAttivi.map((effetto) => {
          // Cerco effetto di morente per abbasare la durata
          if (effetto.descrizione === morenteLabel) {
            effetto.durata = effetto.durata - 1;
            // Evito durate negative
            if (effetto.durata < 0) {
              effetto.durata = 0;
            }
            // Se morente è terminato allora il personaggio è morto
            if (effetto.durata === 0) {
              personaggio.isDead = true;
              personaggio.effettiAttivi = [];
              personaggio.superiorita = 0;
            }
          }
        });
        return;
      }

      // Aggiorno la perc
      personaggio.perc = personaggio.perc + personaggio.percPerTurno;
      // Se la perc è > 300 la riporto a 300
      if (personaggio.perc > 300) {
        personaggio.perc = 300;
      }
    });

    // Riordino i personaggi
    this.riordinaPersonaggi();
  }

  /**
   * Aggiunge un effetto all'elence degli effetti attivi del personaggio selezionato
   *
   * @param effetto Effetto da aggiungere
   */
  public aggiungiEffetto(effetto: Effetto): void {
    this.getPersonaggioSelezionato().effettiAttivi.push(effetto);
  }

  /**
   * Metodo per il caricamento dei personaggi
   *
   * @param personaggi Dati dei personaggi da caricare
   */
  public caricapersonaggi(personaggi: DettagliPersonaggio[]) {
    // Clonazione senza riferimento
    this.personaggi = JSON.parse(JSON.stringify(personaggi));
    // Preseleziono il primo dopo averli ordinati
    if (this.personaggi.length > 0) {
      this.riordinaPersonaggi();
      this.personaggi[0].selected = true;
    }
  }

  /**
   * Metodo per il caricamento dei personaggi
   *
   * @param personaggi Dati dei personaggi da caricare
   */
  public aggiungiPersonaggi(personaggi: DettagliPersonaggio[]) {
    // Clonazione senza riferimento
    this.personaggi = this.personaggi.concat(
      JSON.parse(JSON.stringify(personaggi))
    );
    this.riordinaPersonaggi();
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
