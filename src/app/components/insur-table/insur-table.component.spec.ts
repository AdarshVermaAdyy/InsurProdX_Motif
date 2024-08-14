import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurTableComponent } from './insur-table.component';

describe('InsurTableComponent', () => {
  let component: InsurTableComponent;
  let fixture: ComponentFixture<InsurTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsurTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
