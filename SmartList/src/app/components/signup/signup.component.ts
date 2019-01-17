import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn, fallIn } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
//import { AuthGuard } from '../../auth.service';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']//,
//  animations: [moveIn(), fallIn()],
//  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  isLoading = false;
  form: FormGroup;
  email:String;
  password: String;
  address: String;
  latitude: number;
  longitude: number;

  coords = {};
  lat:number = 0;
  long:number = 0;

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router, public usersService:UsersService) {
      
    this.af.authState.subscribe(auth => { 
      if(auth) {
        //this.router.navigateByUrl('/groups-list');
      }
    });

  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    
    //console.log(formData.value);
    return new Promise<any>((resolve, reject) => {
        this.af.auth.createUserWithEmailAndPassword(this.form.value.email, this.form.value.password)
        .then(
        (success) => {
        console.log(success);

        if (this.form.invalid) {
          return;
        }
        this.isLoading = true;
        //if (this.mode === "create") 
        {
          this.usersService.addUser(
            this.form.value.email,
            this.form.value.password,
            this.form.value.address,
            this.form.value.longitude,
            this.form.value.latitude
            );
            
          }
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
      email: new FormControl(null, {validators: [Validators.required, Validators.minLength(5)]      }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      address: new FormControl(null, { validators: [Validators.required] }),
      latitude: new FormControl(null, { validators: [Validators.required] }),
      longitude: new FormControl(null, { validators: [Validators.required] }),
    });
}

}
