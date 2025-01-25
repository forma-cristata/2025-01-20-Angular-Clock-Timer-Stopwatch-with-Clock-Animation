import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAppletsComponent } from './time-applets.component';

describe('TimeAppletsComponent', () => {
  let component: TimeAppletsComponent;
  let fixture: ComponentFixture<TimeAppletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeAppletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAppletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
