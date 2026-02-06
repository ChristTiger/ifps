import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationparamedicale } from './formationparamedicale';

describe('Formationparamedicale', () => {
  let component: Formationparamedicale;
  let fixture: ComponentFixture<Formationparamedicale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationparamedicale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationparamedicale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
