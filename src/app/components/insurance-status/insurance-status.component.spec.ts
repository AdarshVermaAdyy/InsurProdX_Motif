import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceStatusComponent } from './insurance-status.component';

describe('InsuranceStatusComponent', () => {
  let component: InsuranceStatusComponent;
  let fixture: ComponentFixture<InsuranceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
