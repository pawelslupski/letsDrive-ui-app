import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {CoreModule} from "./core/core.module";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {CoreRoutingModule} from "./core/core-routing.module";
import {SharedModule} from "./shared/shared.module";
import {LayoutService} from "./shared/services/layout.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    CoreRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ],
  providers: [LayoutService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
