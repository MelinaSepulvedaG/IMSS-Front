import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaConsultComponent } from './dieta-consult.component';

describe('DietaConsultComponent', () => {
  let component: DietaConsultComponent;
  let fixture: ComponentFixture<DietaConsultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietaConsultComponent]
    });
    fixture = TestBed.createComponent(DietaConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
