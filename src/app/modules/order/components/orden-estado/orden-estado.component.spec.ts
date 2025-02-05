import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEstadoComponent } from './orden-estado.component';

describe('OrdenEstadoComponent', () => {
  let component: OrdenEstadoComponent;
  let fixture: ComponentFixture<OrdenEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
