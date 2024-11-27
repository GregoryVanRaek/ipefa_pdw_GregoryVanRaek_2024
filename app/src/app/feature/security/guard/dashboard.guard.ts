import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SecurityService } from '../service';

export function DashboardGuard(isPublic :Boolean = false, redirectRoute: string = ''): CanActivateFn {
  return () => {
    const securityService :SecurityService = inject(SecurityService);
    const canAccess: boolean = securityService.isAuthenticated$(); // Cette valeur sera calculée par le service plus tard
    const router: Router = inject(Router);// Nous faisons une DI pour récupérer le système de Router

    if(isPublic){
      return !canAccess || router.createUrlTree([redirectRoute])
    }

    return canAccess || router.createUrlTree([redirectRoute]);
  };
}
