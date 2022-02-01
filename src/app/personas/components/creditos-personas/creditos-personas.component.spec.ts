import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosPersonasComponent } from './creditos-personas.component';

describe('CreditosPersonasComponent', () => {
  let component: CreditosPersonasComponent;
  let fixture: ComponentFixture<CreditosPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
