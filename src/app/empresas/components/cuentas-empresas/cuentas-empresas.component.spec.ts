import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasEmpresasComponent } from './cuentas-empresas.component';

describe('CuentasEmpresasComponent', () => {
  let component: CuentasEmpresasComponent;
  let fixture: ComponentFixture<CuentasEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
