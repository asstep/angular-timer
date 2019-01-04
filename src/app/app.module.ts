import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimeModuleComponent } from './time-module/time-module.component';
import { CountdownModuleComponent } from './countdown-module/countdown-module.component';

import { HelloModule } from "./hello/hello.module";


@NgModule({
  declarations: [
    AppComponent,
    TimeModuleComponent,
    CountdownModuleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
