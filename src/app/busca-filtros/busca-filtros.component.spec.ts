import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaFiltrosComponent } from './busca-filtros.component';

describe('BuscaFiltrosComponent', () => {
  let component: BuscaFiltrosComponent;
  let fixture: ComponentFixture<BuscaFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
