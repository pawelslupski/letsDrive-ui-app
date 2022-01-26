import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [LoginComponent, MainLayoutComponent, DashboardComponent],
  exports: [LoginComponent, MainLayoutComponent]
})
export class CoreModule { }
