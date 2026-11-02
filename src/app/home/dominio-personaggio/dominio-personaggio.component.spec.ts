import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DominioPersonaggioComponent } from './dominio-personaggio.component';

describe('DominioPersonaggioComponent', () => {
  let component: DominioPersonaggioComponent;
  let fixture: ComponentFixture<DominioPersonaggioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DominioPersonaggioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DominioPersonaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('limits manually entered speed to the allowed range', () => {
    component.dettagli.perc = 350;
    component.normalizzaPerc();
    expect(component.dettagli.perc).toBe(300);

    component.dettagli.perc = -250;
    component.normalizzaPerc();
    expect(component.dettagli.perc).toBe(-200);
  });

  it('limits speed changes from the action buttons', () => {
    const event = { stopPropagation: jasmine.createSpy('stopPropagation') };
    component.dettagli.perc = 299;

    component.cambiaPerc(event, true, 10);
    expect(component.dettagli.perc).toBe(300);

    component.dettagli.perc = -199;
    component.cambiaPerc(event, false, 10);
    expect(component.dettagli.perc).toBe(-200);
  });
});
