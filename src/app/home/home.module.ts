import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { DominioPersonaggioComponent } from './dominio-personaggio/dominio-personaggio.component';
import { DettagliPersonaggioComponent } from './dettagli-personaggio/dettagli-personaggio.component';
import { BarraAzioniComponent } from './barra-azioni/barra-azioni.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    DettagliPersonaggioComponent,
    DominioPersonaggioComponent,
    BarraAzioniComponent
  ]
})
export class HomePageModule {}
