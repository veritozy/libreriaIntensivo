import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private authService = inject(AuthenticationService);
  private router = inject(Router);

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
