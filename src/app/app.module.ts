import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdSelectModule, MdButtonModule, MdToolbarModule, MdGridListModule } from '@angular/material';

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
    FormsModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
