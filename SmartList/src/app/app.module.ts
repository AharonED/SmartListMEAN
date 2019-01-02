import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from './auth.service';
//import { AuthService  } from './auth.service';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


/*
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBjgbPR6xJJ1VsP2yRopHw470deVoMD8MY",
    authDomain: "smartlistios-7a38f.firebaseapp.com",
    databaseURL: "https://smartlistios-7a38f.firebaseio.com",
    projectId: "smartlistios-7a38f",
    storageBucket: "smartlistios-7a38f.appspot.com",
    messagingSenderId: "837625752367"
  };
*/

@NgModule({
  declarations: [
    AppComponent, 
    TasksComponent, LoginComponent, EmailComponent, SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features    
        routes,
    BrowserAnimationsModule,
    BrowserAnimationsModule, 
    MatCardModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    FlexLayoutModule  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
