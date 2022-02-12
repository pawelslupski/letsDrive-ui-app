import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    MatRippleModule
  ],
  declarations: [LoginComponent, MainLayoutComponent, DashboardComponent, SideNavComponent],
  exports: [LoginComponent, MainLayoutComponent]
})
export class CoreModule { }
