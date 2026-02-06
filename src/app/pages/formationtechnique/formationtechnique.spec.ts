import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formationtechnique } from './formationtechnique';

describe('Formationtechnique', () => {
  let component: Formationtechnique;
  let fixture: ComponentFixture<Formationtechnique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formationtechnique]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formationtechnique);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
