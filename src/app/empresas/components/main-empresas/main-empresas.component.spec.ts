import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmpresasComponent } from './main-empresas.component';

describe('MainEmpresasComponent', () => {
  let component: MainEmpresasComponent;
  let fixture: ComponentFixture<MainEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
