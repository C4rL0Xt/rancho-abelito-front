import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseroPageComponent } from './mesero-page.component';

describe('MeseroPageComponent', () => {
  let component: MeseroPageComponent;
  let fixture: ComponentFixture<MeseroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeseroPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeseroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
