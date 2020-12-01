import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccuntComponent } from './user-accunt.component';

describe('UserAccuntComponent', () => {
  let component: UserAccuntComponent;
  let fixture: ComponentFixture<UserAccuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
