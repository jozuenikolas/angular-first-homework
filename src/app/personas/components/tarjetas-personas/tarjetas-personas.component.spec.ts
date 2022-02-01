import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPersonasComponent } from './tarjetas-personas.component';

describe('TarjetasPersonasComponent', () => {
  let component: TarjetasPersonasComponent;
  let fixture: ComponentFixture<TarjetasPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
