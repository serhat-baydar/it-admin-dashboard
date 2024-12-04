import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapasiteComponent } from './kapasite.component';

describe('KapasiteComponent', () => {
  let component: KapasiteComponent;
  let fixture: ComponentFixture<KapasiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KapasiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KapasiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
