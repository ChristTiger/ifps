import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activite } from './activite';

describe('Activite', () => {
  let component: Activite;
  let fixture: ComponentFixture<Activite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
