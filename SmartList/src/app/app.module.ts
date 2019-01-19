import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule ,
  MatTableModule,
  MatGridListModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
//import { AuthGuard } from './auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { GroupCreateComponent } from './components/groups/group-create/group-create.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';
import { ChecklistCreateComponent } from './components/checklists/checklist-create/checklist-create.component';
import { ChecklistListComponent } from './components/checklists/checklist-list/checklist-list.component';
import { ChecklistItemsCreateComponent } from './components/checklistItems/checklist-items-create/checklist-items-create.component';
import { ChecklistItemsListComponent } from './components/checklistItems/checklist-items-list/checklist-items-list.component';
import { GroupsHLLComponent } from './components/groups/groups-hll/groups-hll.component';
import { HLLPipe } from './Pipes/HLLPipe';
import { GroupsChecklistsComponent } from './components/groups-checklists/groups-checklists.component';
import { BarchartComponent } from './components/shared/barchart/barchart.component';
import { TwoWaysBindingsComponent } from './components/two-ways-bindings/two-ways-bindings.component';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { AgmCoreModule } from '@agm/core';
import { D3ChartDirective } from './directives/d3-chart.directive';

//Google Maps API Key= AIzaSyCnqVDFETbVC1F2tK3JN9rRyv0e3S-dIsI
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent, 
    EmailComponent, GroupCreateComponent, GroupListComponent, ChecklistListComponent, ChecklistCreateComponent,  ChecklistItemsCreateComponent, ChecklistItemsListComponent, 
    SignupComponent, GroupsHLLComponent,
    HLLPipe,
    GroupsChecklistsComponent,
    BarchartComponent,
    TwoWaysBindingsComponent,
    GooglePlacesDirective,
    D3ChartDirective
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCnqVDFETbVC1F2tK3JN9rRyv0e3S",
      libraries: ["places"]
    }),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
