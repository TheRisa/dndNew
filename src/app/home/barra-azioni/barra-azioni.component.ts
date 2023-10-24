import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HomeService } from '../home.service';
import { DettagliPersonaggio } from '../home.models';

/** Classe per la gestione del componente BarraAzioniComponent */
@Component({
  selector: 'app-barra-azioni',
  templateUrl: './barra-azioni.component.html',
  styleUrls: ['./barra-azioni.component.scss']
})
export class BarraAzioniComponent implements OnInit {
  @ViewChild('upload') upload: ElementRef;

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
    this.upload?.nativeElement.click();
  }

  /**
   * Metodo scatenato al caricamento di un file
   *
   * @param file File caricato
   */
  public fileCaricato(file: File): void {
    if (!file.type.includes('plain')) {
      console.error('Formato errato');
      return;
    }

    const fileReader: FileReader = new FileReader();
    fileReader.onloadend = () => {
      try {
        const dati: { dati: DettagliPersonaggio[] } = JSON.parse(
          `${fileReader.result}`
        );
        if (dati && dati.dati) {
          this.homeSrvc.caricapersonaggi(dati.dati);
        }
      } catch (e) {
        console.error('Errore nel parsing dei dati');
      }
    };
    fileReader.readAsText(file);
  }

  /**
   * Metodo di salvataggio dei dati attuali (apre tab da cui copiare i dati)
   */
  public salva(): void {
    console.log(JSON.stringify({ dati: this.homeSrvc.personaggi }));
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify({ dati: this.homeSrvc.personaggi });
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    const tab = window.open('about:blank', '_blank');
    tab.document.write(
      `<p>${JSON.stringify({ dati: this.homeSrvc.personaggi })}</p>`
    );
    tab.document.close();
  }
}
