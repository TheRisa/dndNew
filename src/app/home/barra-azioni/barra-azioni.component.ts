import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

/** Classe per la gestione del componente BarraAzioniComponent */
@Component({
  selector: 'app-barra-azioni',
  templateUrl: './barra-azioni.component.html',
  styleUrls: ['./barra-azioni.component.scss']
})
export class BarraAzioniComponent implements OnInit {
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
}
