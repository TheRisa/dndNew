import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettagliPersonaggioComponent } from './dettagli-personaggio.component';

describe('DettagliPersonaggioComponent', () => {
  let component: DettagliPersonaggioComponent;
  let fixture: ComponentFixture<DettagliPersonaggioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPersonaggioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliPersonaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
