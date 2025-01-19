import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalsCardComponent } from './locals-card.component';

describe('LocalsCardComponent', () => {
  let component: LocalsCardComponent;
  let fixture: ComponentFixture<LocalsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
