import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestRidePage } from './request-ride.page';

describe('RequestRidePage', () => {
  let component: RequestRidePage;
  let fixture: ComponentFixture<RequestRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
