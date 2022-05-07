import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContctComponent } from './contct/contct.component';
import { GoodFilmsComponent } from './good-films/good-films.component';

@NgModule({
  declarations: [
    AppComponent,
    ContctComponent,
    GoodFilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
