import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosEmpresasComponent } from './creditos-empresas.component';

describe('CreditosEmpresasComponent', () => {
  let component: CreditosEmpresasComponent;
  let fixture: ComponentFixture<CreditosEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
