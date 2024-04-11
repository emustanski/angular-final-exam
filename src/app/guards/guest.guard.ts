import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { UserService } from "../services/user.service";


@Injectable({ providedIn: 'root'})
export class GuestGuard implements CanActivate, CanActivateChild {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth()
  }

  private checkAuth(): boolean {
    if (!this.userService.isLogged) {
      return true;
    } else {
      this.router.navigate(['/my-posts']);
      return false;
    }
  }
}