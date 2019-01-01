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
  
 
