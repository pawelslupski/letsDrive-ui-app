import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {MainLayoutComponent} from "./components/layout/main-layout/main-layout.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import {MatRippleModule} from "@angular/material/core";
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    MatRippleModule
  ],
  declarations: [LoginComponent, MainLayoutComponent, DashboardComponent, SideNavComponent, ShopComponent],
  exports: [LoginComponent, MainLayoutComponent]
})
export class CoreModule { }
