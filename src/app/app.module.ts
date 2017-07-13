import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdGridListModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SheetComponent } from './sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
