import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

import { inject } from "@angular/core";
import { AuthenticationService } from "./auth.service";

const canActivateDashboard: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const isAuthenticated = authService.isAuthenticated();
  if (!isAuthenticated) {
    inject(Router).navigate(['']);
    return false;
  }
  return true;
};

export { canActivateDashboard };