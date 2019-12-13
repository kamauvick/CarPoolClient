import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchedridegiversPage } from './matchedridegivers.page';

describe('MatchedridegiversPage', () => {
  let component: MatchedridegiversPage;
  let fixture: ComponentFixture<MatchedridegiversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedridegiversPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchedridegiversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
