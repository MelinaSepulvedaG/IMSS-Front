import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalConsultComponent } from './personal-consult.component';

describe('PersonalConsultComponent', () => {
  let component: PersonalConsultComponent;
  let fixture: ComponentFixture<PersonalConsultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalConsultComponent]
    });
    fixture = TestBed.createComponent(PersonalConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
