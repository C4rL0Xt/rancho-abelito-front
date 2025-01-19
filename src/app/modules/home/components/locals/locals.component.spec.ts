import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalsComponent } from './locals.component';

describe('LocalsComponent', () => {
  let component: LocalsComponent;
  let fixture: ComponentFixture<LocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
