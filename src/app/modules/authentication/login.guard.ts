import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { AuthenticationService } from "./auth.service";

const canActivateLogin: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const isAuthenticated = authService.isAuthenticated();
  if (isAuthenticated) {
    inject(Router).navigate(['/dashboard']);
    return false;
  }
  return true;
};

export { canActivateLogin };