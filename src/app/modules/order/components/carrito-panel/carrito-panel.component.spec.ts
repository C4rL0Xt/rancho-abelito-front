import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPanelComponent } from './carrito-panel.component';

describe('CarritoPanelComponent', () => {
  let component: CarritoPanelComponent;
  let fixture: ComponentFixture<CarritoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
