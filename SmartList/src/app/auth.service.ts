/*
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
      this.user = _firebaseAuth.authState;
  }
}
*/

/*
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  private user: Observable<firebase.User>;

    constructor(private auth: AngularFireAuth, private router: Router) {
      this.user = auth.authState;
    }

    canActivate(): Observable<boolean> {
      this.user.pipe(
        map(auth =>{
          if (auth) 
            return true ;
          else { 
            this.router.navigate(['access-denied'])
          }
        })); 
        return ;
      };
  
    }
  
*/

import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

//@Injectable()
@Injectable({ providedIn: "root" })
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
      this.user = _firebaseAuth.authState;
this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
            console.log('Not Signin');
          }
        }
      );
  }
/* signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }
signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  } */
isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => 
    {
      this.userDetails = null;
      this.router.navigate(['/login-email']);
      
    }
    );
  }
}


