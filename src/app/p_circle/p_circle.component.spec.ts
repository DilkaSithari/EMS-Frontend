import { ComponentFixture, TestBed } from '@angular/core/testing';

import { p_circleComponent } from './p_circle.component';

describe('FirstComponent', () => {
  let component: p_circleComponent;
  let fixture: ComponentFixture<p_circleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [p_circleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(p_circleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
