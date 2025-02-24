import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Royalsuits2beddoublePage } from './royalsuits2beddouble.page';

describe('Royalsuits2beddoublePage', () => {
  let component: Royalsuits2beddoublePage;
  let fixture: ComponentFixture<Royalsuits2beddoublePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Royalsuits2beddoublePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Royalsuits2beddoublePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
