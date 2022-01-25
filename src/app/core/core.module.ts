import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, MainLayoutComponent],
  exports: [LoginComponent, MainLayoutComponent]
})
export class CoreModule { }
