import { Component } from "@angular/core";
//import "rxjs/add/operator/filter";
//import "rxjs/add/operator/first";
import { Injectable } from "@angular/core";

import { Router, Route } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({ providedIn: "root" })
export class HeaderComponent {

  constructor(public auth: AuthService) {

  }
  
  logout(){
    this.auth.logout();
  }

}
 