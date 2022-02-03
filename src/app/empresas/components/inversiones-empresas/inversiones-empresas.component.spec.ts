import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionesEmpresasComponent } from './inversiones-empresas.component';

describe('InversionesEmpresasComponent', () => {
  let component: InversionesEmpresasComponent;
  let fixture: ComponentFixture<InversionesEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversionesEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionesEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
