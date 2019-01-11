import { Component,OnInit,Input,Output ,ElementRef} from '@angular/core';
import * as express from "express";
import * as socketIo from 'socket.io-client';
//import * as path from "path"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { group } from '@angular/animations';
import { GroupsService } from "../../../app/services/groups.service";
import { Group } from "../../../../src/app/Model/group.model";
import { Subscription } from 'rxjs';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'two-ways-bindings',
  templateUrl: './two-ways-bindings.component.html',
  styleUrls: ['./two-ways-bindings.component.css']
})
export class TwoWaysBindingsComponent implements OnInit {
  @Output() socket;
  GroupsCount : number=0;
  form: FormGroup;
  private groupsSub: Subscription;

  constructor(public groupsService:GroupsService) { }

  sendMsg() {
    console.log("sending message to server");
    this.socket.emit("message", "HELLO WORLD");
  }

  ngOnInit() {

    this.form = new FormGroup({
      gCount: new FormControl()
   });

   this.groupsService.getGroups(1, 1);
   this.groupsSub = this.groupsService
     .getGroupUpdateListener()
     .subscribe((groupData: {groups: Group[], groupCount: number}) => {
       this.GroupsCount = groupData.groupCount;
     });   


      this.socket = socketIo(SERVER_URL);
      this.socket.on('message', function(message: any){
        console.log("getting message from server: " + message);
      });
  
      this.socket.on('GroupAdded', function(groupsCount: any){
        console.log("Group count: " + groupsCount);
        this.GroupsCount = groupsCount+1;
        //this.from.("gCount").setValue(groupsCount);
        //this.form.value.gCount=groupsCount;
        //this.gCount.value=groupsCount;
        //this.form = new FormGroup({
         // gCount: new FormControl(null, null)
         // });
    
        //this.form.setValue({
        //  gCount: groupsCount
        //});
      });   
        
  }

  ngOnDestroy() {
    console.log("appComponent ngOnDestroy");
  }  
}
