import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service';

export const canactivateguardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if(authService.loginTrue()){
    return true;
  }
  return router.navigate(['/login']);
};
