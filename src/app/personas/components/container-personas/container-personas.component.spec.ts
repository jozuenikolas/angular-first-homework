import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPersonasComponent } from './container-personas.component';

describe('ContainerPersonasComponent', () => {
  let component: ContainerPersonasComponent;
  let fixture: ComponentFixture<ContainerPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
