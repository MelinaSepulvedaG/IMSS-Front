import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolVacacionalComponent } from './rol-vacacional.component';

describe('RolVacacionalComponent', () => {
  let component: RolVacacionalComponent;
  let fixture: ComponentFixture<RolVacacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolVacacionalComponent]
    });
    fixture = TestBed.createComponent(RolVacacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
