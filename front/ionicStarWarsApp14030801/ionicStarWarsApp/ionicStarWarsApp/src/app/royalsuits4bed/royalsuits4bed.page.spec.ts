import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Royalsuits4bedPage } from './royalsuits4bed.page';

describe('Royalsuits4bedPage', () => {
  let component: Royalsuits4bedPage;
  let fixture: ComponentFixture<Royalsuits4bedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Royalsuits4bedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Royalsuits4bedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
