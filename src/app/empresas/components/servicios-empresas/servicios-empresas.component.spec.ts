import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEmpresasComponent } from './servicios-empresas.component';

describe('ServiciosEmpresasComponent', () => {
  let component: ServiciosEmpresasComponent;
  let fixture: ComponentFixture<ServiciosEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
