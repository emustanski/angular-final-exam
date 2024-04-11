import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private userService: UserService, private router: Router, private location: Location) {}

  logoutHandler() {
    this.userService.logout$().subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => console.error(err)
    })

  }
    backHandler(): void {
      this.location.back()
    }
}
