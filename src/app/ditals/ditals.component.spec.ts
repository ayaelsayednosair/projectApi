import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitalsComponent } from './ditals.component';

describe('DitalsComponent', () => {
  let component: DitalsComponent;
  let fixture: ComponentFixture<DitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DitalsComponent]
    });
    fixture = TestBed.createComponent(DitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
