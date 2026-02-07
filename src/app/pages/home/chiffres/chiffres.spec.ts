import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chiffres } from './chiffres';

describe('Chiffres', () => {
  let component: Chiffres;
  let fixture: ComponentFixture<Chiffres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chiffres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chiffres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
