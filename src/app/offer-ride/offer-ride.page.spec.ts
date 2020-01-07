import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferRidePage } from './offer-ride.page';

describe('OfferRidePage', () => {
  let component: OfferRidePage;
  let fixture: ComponentFixture<OfferRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
