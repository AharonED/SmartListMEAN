import { Component, Injectable, OnInit ,NgZone } from '@angular/core';
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

//import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
//import { MapsAPILoader } from 'angular2-google-maps/core';
import { Observable, Observer } from 'rxjs';
import { MapsAPILoader } from '@agm/core';
declare var google:any;


import { MouseEvent } from '@agm/core';

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
  latitude: number = 51.673858;;
  longitude: number = 7.815982;

  zoom:number = 8;

  coords = {};
  lat:number = 0;
  long:number = 0;

  state: string = '';
  error: any;
  public addrKeys: string[];
  public addr: object;
  

  constructor(public af: AngularFireAuth,private router: Router, public usersService:UsersService, private zone: NgZone, private __loader: MapsAPILoader) {
      
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

  //Method to be invoked everytime we receive a new instance 
  //of the address object from the onSelect event emitter.
  setAddress(addrObj) {
    console.log(addrObj);
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      console.log(Object.keys(addrObj));

      var strAddress:string;
//      strAddress = this.addr[this.addrKeys[0]];
      strAddress = addrObj;
      

      

      this.getGeocoding(strAddress).subscribe(function (x) {
        console.log(x.toString());
        var latitude = x.lat();
        var longitude = x.lng();
        console.log("lat: " + latitude + ", long: " + longitude);

        this.latitude = latitude;
        this.longitude=longitude;
      

        });

    });
  }


  getGeocoding(address: string) {
    return Observable.create(observer => {
        try {
            //at this point the variable google may be still undefined (google maps scripts still loading)
            //so load all the scripts, then...
            this.__loader.load().then(() => {
                let geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address }, (results, status) => {

                    if (status === google.maps.GeocoderStatus.OK) {
                        const place = results[0].geometry.location;
                        observer.next(place);
                        observer.complete();
                    } else {
                        console.error('Error - ', results, ' & Status - ', status);
                        if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                            observer.error('Address not found!');
                        }else {
                            observer.error(status);
                        }
                        
                        observer.complete();
                    }
                });
            });
        } catch (error) {
            observer.error('error getGeocoding' + error);
            observer.complete();
        }

    });
}

clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

mapClicked($event: MouseEvent) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });
}

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}

markers: marker[] = [
  {
    lat: 51.673858,
    lng: 7.815982,
    label: 'A',
    draggable: true
  },
  {
    lat: 51.373858,
    lng: 7.215982,
    label: 'B',
    draggable: false
  },
  {
    lat: 51.723858,
    lng: 7.895982,
    label: 'C',
    draggable: true
  }
]
}

// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}

