import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTaskComponent } from './criar-task.component';

describe('CriarTaskComponent', () => {
  let component: CriarTaskComponent;
  let fixture: ComponentFixture<CriarTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
