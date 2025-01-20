import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPanelComponent } from './product-details-panel.component';

describe('ProductDetailsPanelComponent', () => {
  let component: ProductDetailsPanelComponent;
  let fixture: ComponentFixture<ProductDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
