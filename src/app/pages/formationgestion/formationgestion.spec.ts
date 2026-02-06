import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationgestion } from './formationgestion';

describe('Formationgestion', () => {
  let component: Formationgestion;
  let fixture: ComponentFixture<Formationgestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationgestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationgestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
