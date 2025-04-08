
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../modules/auth/services/token-service/token.service';

export const roleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {

  const tokenService = inject(TokenService);
  const router = inject(Router);

  const expectedRole = route.data['expectedRole'];
  const currentUser = localStorage.getItem('rol');


  if (currentUser && currentUser == expectedRole) {
    return true;
  } else {
    router.navigate(['/access-denied']);
    return false;
  }

  return true;
};
