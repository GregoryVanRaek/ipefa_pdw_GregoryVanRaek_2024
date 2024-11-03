import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export function SecurityGuard(redirectRoute: string = 'dashboard'): CanActivateFn {
  return () => {
    const canAccess: boolean = true; // Cette valeur sera calculée par le service plus tard
    const router: Router = inject(Router);// Nous faisons une DI pour récupérer le système de Router
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}
