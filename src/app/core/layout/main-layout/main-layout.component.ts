import {Component} from '@angular/core';
import firebase from "firebase/compat";
import {AuthService} from "../../services/auth-service";
import {Router} from "@angular/router";
import {LayoutService} from "../../../shared/services/layout.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  public user: firebase.User | null | undefined = this.authService.user;

  constructor(private authService: AuthService,
              private router: Router,
              private layoutService: LayoutService) { }

  public logout(): void {
    this.authService.logout().then(() => {
      this.layoutService.hideMainLayout();
      this.router.navigate(['/login']);
    });
  }
}
