// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  msg_val: string = '';
  title = 'Hero sheet';

  constructor(
    // public afAuth: AngularFireAuth, public af: AngularFireDatabase
  ) {
    // this.user = this.afAuth.authState;
  }

  // login() {
  //   this.afAuth.auth.signInAnonymously();
  // }
  //
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
  //
  // Send(desc: string) {
  //   this.items.push({ message: desc});
  //   this.msg_val = '';
  // }
}
