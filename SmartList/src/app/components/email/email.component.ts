import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn, fallIn } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
//import { AuthGuard } from '../../auth.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']//,
  //animations: [moveIn(), fallIn()],
  //host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
  isLoading = false;
  form: FormGroup;
  email:String;
  password: String;

    state: string = '';
    error: any;

    constructor(public af: AngularFireAuth,private router: Router) {
      
      this.af.authState.subscribe(auth => { 
        if(auth) {
          //this.router.navigateByUrl('/note-list');
        }
      });
  }

 
  onSubmit() {
    if (this.form.invalid) {
      return;
    }

      console.log(this.form.value);
      return new Promise<any>((resolve, reject) => {
        this.af.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password)
        .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/group-list']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
     });
    
    
  }
 
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      
    });

  }

}
