import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdSelectModule, MdButtonModule, MdToolbarModule, MdGridListModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SheetComponent } from './sheet/sheet.component';
import { CreatorComponent } from './creator/creator.component';
import { KeysPipe } from './keys.pipe';

// import { CoreService } from './core.service';
export const firebaseConfig = {
  apiKey: "AIzaSyAurwom590iSPifn0YR-lxL9D6lVYYCnGw",
  authDomain: "hero-sheet.firebaseapp.com",
  databaseURL: "https://hero-sheet.firebaseio.com",
  projectId: "hero-sheet",
  storageBucket: "hero-sheet.appspot.com",
  messagingSenderId: "21590212492"
};


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SheetComponent,
    CreatorComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
