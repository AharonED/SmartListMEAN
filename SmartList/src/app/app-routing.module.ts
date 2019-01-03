
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NoteListComponent } from "./notes/note-list/note-list.component";
import { NoteCreateComponent } from "./notes/note-create/note-create.component";

import { LoginComponent } from './components/login/login.component';
//import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './auth.service';

//import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';

import { GroupCreateComponent } from './components/groups/group-create/group-create.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'login-email', pathMatch: 'full' },
  { path: '', component: EmailComponent },
  //{ path: '', component: NoteListComponent },
//  { path: 'note-list', component: NoteListComponent , canActivate: [AuthGuard]},
  { path: 'note-list', component: NoteListComponent ,canActivate: [AuthGuard]},
  { path: 'create', component: NoteCreateComponent,canActivate: [AuthGuard] },
  { path: 'edit/:noteId', component: NoteCreateComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
//  { path: 'tasks', component: TasksComponent}
  { path: 'group-create', component: GroupCreateComponent ,canActivate: [AuthGuard]},
  { path: 'group-list', component: GroupListComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
