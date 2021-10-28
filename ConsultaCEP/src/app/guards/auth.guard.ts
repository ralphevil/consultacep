import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (this.getLoggedStatus()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  getLoggedStatus(): boolean {
    return (localStorage.getItem('isLoggedIn') == 'true');
  }
}
