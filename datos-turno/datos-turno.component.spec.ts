import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTurnoComponent } from './datos-turno.component';

describe('DatosTurnoComponent', () => {
  let component: DatosTurnoComponent;
  let fixture: ComponentFixture<DatosTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
