import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn, fallIn } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']//,
  //animations: [moveIn(), fallIn()],
  //host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

    state: string = '';
    error: any;

    constructor(public af: AngularFireAuth,private router: Router) {
      this.af.authState.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/tasks');
        }
      });
  }


  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      return new Promise<any>((resolve, reject) => {
        this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/tasks']);
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
