import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaCardComponent } from './mesa-card.component';

describe('MesaCardComponent', () => {
  let component: MesaCardComponent;
  let fixture: ComponentFixture<MesaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
