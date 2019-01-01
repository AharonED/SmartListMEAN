import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { GroupsComponent } from './groups/groups.component';


@NgModule({
  declarations: [
    AppComponent, 
    TasksComponent, GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
