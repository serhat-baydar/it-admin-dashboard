import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureIconComponent } from './azure-icon.component';

describe('AzureIconComponent', () => {
  let component: AzureIconComponent;
  let fixture: ComponentFixture<AzureIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
