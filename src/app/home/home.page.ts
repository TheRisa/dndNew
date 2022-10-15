import { Component, OnInit } from '@angular/core';
import { mockPersonaggi } from './mock';

/** Classe per la gestione di home */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  /** Lista dei personaggi da mostrare */
  public personaggi = mockPersonaggi;

  /**
   * Costruttore della classe
   */
  constructor() {}

  /**
   * Metodo onInit
   */
  ngOnInit(): void {}
}
