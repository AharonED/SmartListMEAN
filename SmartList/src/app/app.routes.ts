import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';

export const router: Routes = [
    { path: '', redirectTo: 'login-email', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'tasks', component: TasksComponent}
    
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);