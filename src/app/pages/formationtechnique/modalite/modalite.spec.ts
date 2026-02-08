import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalite } from './modalite';

describe('Modalite', () => {
  let component: Modalite;
  let fixture: ComponentFixture<Modalite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modalite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modalite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
