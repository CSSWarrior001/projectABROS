import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullSportsClubComponent } from './bull-sports-club.component';

describe('BullSportsClubComponent', () => {
  let component: BullSportsClubComponent;
  let fixture: ComponentFixture<BullSportsClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullSportsClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullSportsClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
