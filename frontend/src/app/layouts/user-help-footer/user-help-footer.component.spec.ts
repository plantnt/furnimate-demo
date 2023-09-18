import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHelpFooterComponent } from './user-help-footer.component';

describe('UserHelpFooterComponent', () => {
  let component: UserHelpFooterComponent;
  let fixture: ComponentFixture<UserHelpFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHelpFooterComponent]
    });
    fixture = TestBed.createComponent(UserHelpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
