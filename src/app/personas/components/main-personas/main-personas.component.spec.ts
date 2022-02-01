import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPersonasComponent } from './main-personas.component';

describe('MainPersonasComponent', () => {
  let component: MainPersonasComponent;
  let fixture: ComponentFixture<MainPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
