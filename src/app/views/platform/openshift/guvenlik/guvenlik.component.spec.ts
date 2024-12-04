import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuvenlikComponent } from './guvenlik.component';

describe('GuvenlikComponent', () => {
  let component: GuvenlikComponent;
  let fixture: ComponentFixture<GuvenlikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuvenlikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuvenlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
