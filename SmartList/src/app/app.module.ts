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
  MatTableModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { NoteCreateComponent } from "./notes/note-create/note-create.component";
import { HeaderComponent } from "./components/header/header.component";
import { NoteListComponent } from "./notes/note-list/note-list.component";
import { AppRoutingModule } from "./app-routing.module";
//import {TasksComponent} from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
//import { AuthGuard } from './auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './auth.service';


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


@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    HeaderComponent,
    NoteListComponent,
    //TasksComponent, 
    LoginComponent, 
    EmailComponent, GroupCreateComponent, GroupListComponent, ChecklistListComponent, ChecklistCreateComponent,  ChecklistItemsCreateComponent, ChecklistItemsListComponent, 
    SignupComponent, GroupsHLLComponent
  ],
  imports: [
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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
