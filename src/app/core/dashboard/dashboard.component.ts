import {Component} from '@angular/core';
import {AuthService} from "../services/auth-service";
import {Router} from "@angular/router";
import firebase from "firebase/compat";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public user: firebase.User | null | undefined = this.authService.user;

  constructor(private authService: AuthService,
              private router: Router) { }

  public logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
