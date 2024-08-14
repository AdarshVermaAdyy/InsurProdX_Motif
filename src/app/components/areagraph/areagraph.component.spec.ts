import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreagraphComponent } from './areagraph.component';

describe('AreagraphComponent', () => {
  let component: AreagraphComponent;
  let fixture: ComponentFixture<AreagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
