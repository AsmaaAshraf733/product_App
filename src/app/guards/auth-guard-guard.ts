import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
 const router = inject(Router)

  //simple check
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/product-app']);
    return false;
  }
};
