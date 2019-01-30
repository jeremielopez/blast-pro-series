import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMissingPasswordComponent } from './user-missing-password.component';

describe('UserMissingPasswordComponent', () => {
  let component: UserMissingPasswordComponent;
  let fixture: ComponentFixture<UserMissingPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMissingPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMissingPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
