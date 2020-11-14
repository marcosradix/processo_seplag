import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBeneficioComponent } from './form-beneficio.component';

describe('FormBeneficioComponent', () => {
  let component: FormBeneficioComponent;
  let fixture: ComponentFixture<FormBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
