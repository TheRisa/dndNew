import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

import { DettagliPersonaggio, morenteLabel } from '../home.models';
import { HomeService } from '../home.service';

/** Classe per la gestione di DominioPersonaggioComponent */
@Component({
  selector: 'app-dominio-personaggio',
  templateUrl: './dominio-personaggio.component.html',
  styleUrls: ['./dominio-personaggio.component.scss']
})
export class DominioPersonaggioComponent
  implements OnInit, OnChanges, AfterViewInit
{
  /** Dettagli da mostrare */
  @Input() dettagli: DettagliPersonaggio = {
    nome: '',
    perc: 0,
    percPerTurno: 0,
    rage: 0,
    superiorita: 0,
    inferiorita: 0,
    padronanza: 0,
    effettiAttivi: []
  };
  /** Indice del dominio */
  @Input() indice = -1;
  /** Valore dell'accordion associato al personaggio selezionato */
  @Input() selectedAccordionValue: string | null = null;
  /** Versione dell'apertura forzata dopo il completamento turno */
  @Input() accordionOpenVersion = 0;
  /** Gruppo accordion del personaggio */
  @ViewChild(IonAccordionGroup) accordionGroup: IonAccordionGroup;

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

  ngOnChanges(changes: SimpleChanges): void {
    const accordionValue = `personaggio-${this.indice}`;

    if (
      changes.selectedAccordionValue &&
      this.selectedAccordionValue !== accordionValue &&
      this.accordionGroup
    ) {
      this.accordionGroup.value = null;
    }

    if (changes.accordionOpenVersion && this.accordionGroup) {
      this.accordionGroup.value = null;

      if (this.dettagli.selected) {
        this.openSelectedAccordionAfterClose();
      }
    }
  }

  private openSelectedAccordionAfterClose(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (this.dettagli.selected && this.accordionGroup) {
          this.accordionGroup.value = `personaggio-${this.indice}`;
        }
      });
    });
  }

  ngAfterViewInit(): void {
    if (this.selectedAccordionValue === `personaggio-${this.indice}`) {
      setTimeout(() => {
        if (this.dettagli.selected && this.accordionGroup) {
          this.accordionGroup.value = `personaggio-${this.indice}`;
        }
      });
    }
  }

  /**
   * Metodo al click sulle frecce accanto alla rage
   *
   * @param isUp True se la rage va aumentata, false se va diminuita
   */
  public setRage(isUp: boolean, $event: any, amount = 1): void {
    $event.stopPropagation();
    this.dettagli.rage = isUp
      ? this.dettagli.rage + amount
      : this.dettagli.rage - amount;
    this.dettagli.rage = this.dettagli.rage < 0 ? 0 : this.dettagli.rage;
  }

  /**
   * Metodo al click sul pulsante di morte. Imposta il personaggio come morente
   */
  public setDeath(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.homeSrvc.setPersonaggioSelezionato(this.indice);

    // La logica è: 1 - se sono vivo diventa morente, 2 - se sono morente diventa morto, 3 - se sono morto torno vivo
    // Elimino l'effetto di morente (al limite viene rimpostato nel terzo caso)
    this.dettagli.effettiAttivi = this.dettagli.effettiAttivi.filter(
      (effetto) => effetto.descrizione !== morenteLabel
    );

    // 3 - Se è morto e ci riclicco è per farlo "rinvivire"
    if (this.dettagli.isDead) {
      this.dettagli.isDead = false;
      this.dettagli.isMorente = false;
      return;
    }

    // 2 - Se è morente allora muore
    if (this.dettagli.isMorente) {
      this.dettagli.perc = 0;
      this.dettagli.rage = 0;

      this.dettagli.isDead = true;
      return;
    }

    // 1 - Per escludione è viso, allora diventa morente
    this.dettagli.isMorente = true;
    this.dettagli.perc = 0;
    this.dettagli.rage = 0;
    this.dettagli.padronanza = 0;
    this.dettagli.superiorita = 0;

    this.dettagli.effettiAttivi.push({
      descrizione: morenteLabel,
      isPermanent: true
    });
  }

  /**
   * Metodo per alterare la percentuale da button
   *
   * @param incremento Flag per indicare un incremento o decremento
   * @param valoreIncremento Valore dell'incremento o del decremento
   */
  public cambiaPerc(
    event: any,
    incremento: boolean,
    valoreIncremento: number
  ): void {
    // Blocco altri click
    event.stopPropagation();
    // Aggiorno perc
    this.dettagli.perc += incremento ? valoreIncremento : -valoreIncremento;
    this.normalizzaPerc();
  }

  /**
   * Mantiene la rapidità tra -200% e 300%, anche dopo l'inserimento manuale.
   */
  public normalizzaPerc(): void {
    this.dettagli.perc = Math.max(-200, Math.min(300, this.dettagli.perc));
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
