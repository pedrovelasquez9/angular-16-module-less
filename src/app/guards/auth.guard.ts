import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../core/auth.service';

export const authGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getAuthToken();
};
