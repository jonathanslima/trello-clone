import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarColunaComponent } from './criar-coluna.component';

describe('CriarColunaComponent', () => {
  let component: CriarColunaComponent;
  let fixture: ComponentFixture<CriarColunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarColunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarColunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
