import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn, fallIn } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']//,
//  animations: [moveIn(), fallIn()],
//  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {

  }

  onSubmit(formData) {
        if(formData.valid) {
          console.log(formData.value);
          return new Promise<any>((resolve, reject) => {
            this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
            .then(
            (success) => {
            console.log(success);
            this.router.navigate(['/members']);
          }).catch(
            (err) => {
            console.log(err);
            this.error = err;
          });
         });
        }
        return;
      }

  ngOnInit() {
  }

}
