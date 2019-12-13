import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchedridetakersPage } from './matchedridetakers.page';

describe('MatchedridetakersPage', () => {
  let component: MatchedridetakersPage;
  let fixture: ComponentFixture<MatchedridetakersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedridetakersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchedridetakersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
