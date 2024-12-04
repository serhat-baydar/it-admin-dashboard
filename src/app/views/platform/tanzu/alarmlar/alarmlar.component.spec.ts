import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmlarComponent } from './alarmlar.component';

describe('AlarmlarComponent', () => {
  let component: AlarmlarComponent;
  let fixture: ComponentFixture<AlarmlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmlarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
