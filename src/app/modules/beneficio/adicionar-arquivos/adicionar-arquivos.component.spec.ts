import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarArquivosComponent } from './adicionar-arquivos.component';

describe('AdicionarArquivosComponent', () => {
  let component: AdicionarArquivosComponent;
  let fixture: ComponentFixture<AdicionarArquivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarArquivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
