import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBeneficiosComponent } from './table-beneficios.component';

describe('TableBeneficiosComponent', () => {
  let component: TableBeneficiosComponent;
  let fixture: ComponentFixture<TableBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
