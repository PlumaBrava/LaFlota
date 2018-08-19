import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  console.log("arranco");
   }
  login() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
        this.afAuth.auth.signOut();
      }
  ngOnInit() {
  }

}
