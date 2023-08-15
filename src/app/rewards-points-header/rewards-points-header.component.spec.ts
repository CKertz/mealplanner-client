import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsPointsHeaderComponent } from './rewards-points-header.component';

describe('RewardsPointsHeaderComponent', () => {
  let component: RewardsPointsHeaderComponent;
  let fixture: ComponentFixture<RewardsPointsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsPointsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsPointsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
