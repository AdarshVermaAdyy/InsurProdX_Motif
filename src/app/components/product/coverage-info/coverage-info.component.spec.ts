import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageInfoComponent } from './coverage-info.component';

describe('CoverageInfoComponent', () => {
  let component: CoverageInfoComponent;
  let fixture: ComponentFixture<CoverageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverageInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoverageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
