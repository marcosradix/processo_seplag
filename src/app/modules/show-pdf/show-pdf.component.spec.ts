import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPDFComponent } from './show-pdf.component';

describe('ShowPDFComponent', () => {
  let component: ShowPDFComponent;
  let fixture: ComponentFixture<ShowPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
