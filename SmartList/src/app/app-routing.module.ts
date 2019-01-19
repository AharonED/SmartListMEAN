
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';

import { GroupCreateComponent } from './components/groups/group-create/group-create.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';

import { ChecklistCreateComponent } from './components/checklists/checklist-create/checklist-create.component';
import { ChecklistListComponent } from './components/checklists/checklist-list/checklist-list.component';

import { ChecklistItemsCreateComponent } from './components/checklistItems/checklist-items-create/checklist-items-create.component';
import { ChecklistItemsListComponent } from './components/checklistItems/checklist-items-list/checklist-items-list.component';

import { GroupsHLLComponent } from './components/groups/groups-hll/groups-hll.component';
import { StatisticsComponent } from './components/Statistics/Statistics.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login-email', pathMatch: 'full' },
  { path: '', component: EmailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
//Groups
{ path: 'group-create', component: GroupCreateComponent ,canActivate: [AuthGuard]},
  { path: 'group-edit/:groupId', component: GroupCreateComponent ,canActivate: [AuthGuard]},
  { path: 'group-list', component: GroupListComponent ,canActivate: [AuthGuard]},
  { path: 'group-hll', component: GroupsHLLComponent ,canActivate: [AuthGuard]},
  { path: 'Statistics', component: StatisticsComponent ,canActivate: [AuthGuard]},
  
  
//Checklist
  { path: 'checklist-create/:groupId', component: ChecklistCreateComponent ,canActivate: [AuthGuard]},
  { path: 'checklist-edit/:checklistId', component: ChecklistCreateComponent ,canActivate: [AuthGuard]},
  { path: 'checklist-list/:groupId', component: ChecklistListComponent ,canActivate: [AuthGuard]},
//ChecklistItems
  { path: 'checklistItem-create/:checklistId', component: ChecklistItemsCreateComponent ,canActivate: [AuthGuard]},
  { path: 'checklistItem-edit/:checklistItemId', component: ChecklistItemsCreateComponent ,canActivate: [AuthGuard]},
  { path: 'checklistItem-list/:checklistId', component: ChecklistItemsListComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

