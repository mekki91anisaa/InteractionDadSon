import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadComponent } from './dad/dad.component';
import { SonComponent } from './son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    DadComponent,
    SonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
