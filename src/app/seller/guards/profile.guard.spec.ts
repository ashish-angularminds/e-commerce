import { TestBed } from '@angular/core/testing';
import { ProfileGuard } from './profile.guard';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

describe('ProfileGuard', () => {
  let guard: ProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Router, AuthService]
    });
    guard = TestBed.inject(ProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
