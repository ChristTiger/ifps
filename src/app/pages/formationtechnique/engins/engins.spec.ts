import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engins } from './engins';

describe('Engins', () => {
  let component: Engins;
  let fixture: ComponentFixture<Engins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Engins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Engins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
