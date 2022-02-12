import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../services/auth-service";
import {LayoutService} from "../../shared/services/layout.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  constructor(private router: Router,
              private toast: MatSnackBar,
              private authService: AuthService,
              private layoutService: LayoutService) {}

  public login(): void {
    this.authService.login(this.credentials)
      .then(() => {
        this.layoutService.showMainLayout();
        this.router.navigate(['/main/dashboard'])
      })
      .catch(error => this.toast.open(error.message, '', {panelClass: 'toast-error'}));
  }

  public register(): void {
    this.authService.register(this.credentials)
      .then(() => this.toast.open('Account created, please log in!', '', {panelClass: 'toast-success'}))
      .catch(error => this.toast.open(error.message, '', {panelClass: 'toast-error'}));
  }
}
