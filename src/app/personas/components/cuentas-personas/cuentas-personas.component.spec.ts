import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPersonasComponent } from './cuentas-personas.component';

describe('CuentasPersonasComponent', () => {
  let component: CuentasPersonasComponent;
  let fixture: ComponentFixture<CuentasPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
