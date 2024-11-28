import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SecurityService } from '../service';
import { AppNode } from '../../../common';

export function SecurityGuard(redirectRoute: string = 'signin'): CanActivateFn {
  return () => {
    const securityService :SecurityService = inject(SecurityService);
    const router: Router = inject(Router);

    const isAuthenticated = securityService.isAuthenticated$();

    if(isAuthenticated){
      return router.createUrlTree([AppNode.REDIRECT_TO_AUTHENTICATED]);
    }

    return true;
  };
}
