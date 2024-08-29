import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoFormComponent } from './product-info-form.component';

describe('ProductInfoFormComponent', () => {
  let component: ProductInfoFormComponent;
  let fixture: ComponentFixture<ProductInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
