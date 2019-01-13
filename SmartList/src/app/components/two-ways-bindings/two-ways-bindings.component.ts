import { Component,OnInit,Input,Output ,ElementRef,EventEmitter} from '@angular/core';
import * as express from "express";
import * as socketIo from 'socket.io-client';
//import * as path from "path"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { group } from '@angular/animations';
import { GroupsService } from "../../../app/services/groups.service";
import { Group } from "../../../../src/app/Model/group.model";
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { SocketService } from "../../../app/services/socket.service";

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

  @Output() counterChange :  EventEmitter<number>;

  constructor(public groupsService:GroupsService, public socketService:SocketService ) { 
    this.counterChange = new EventEmitter();
    
    /* this.socketService.getMessages()
   .subscribe((message: string) => {
     console.log("subscribe");
     this.GroupsCount = parseInt(message);
   });    */
  }

  @Input() 
  get counter(){
      return this.GroupsCount; 
  }
  set counter(val:number){
    this.GroupsCount=val;
  }

  ngOnInit() {

    this.form = new FormGroup({
      gCount: new FormControl()
   });

   //Load default value - current actual count value
   this.groupsService.getGroups(1, 1);
   this.groupsSub = this.groupsService
     .getGroupUpdateListener()
     .subscribe((groupData: {groups: Group[], groupCount: number}) => {
       this.GroupsCount = groupData.groupCount;
     });   

    //register  getMessages events of socket
   this.socketService.getMessages()
   .subscribe((message: string) => {
     console.log("subscribe");
     this.GroupsCount = parseInt(message);
   });    
  }

  ngOnDestroy() {
    console.log("appComponent ngOnDestroy");
    //this.socketService.getMessages().unsubscribe();
    //this.socketService.closeUserSocket();
  }  
}

/*import { Component,OnInit,Input,Output ,ElementRef,EventEmitter} from '@angular/core';
import * as express from "express";
import * as socketIo from 'socket.io-client';
//import * as path from "path"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { group } from '@angular/animations';
import { GroupsService } from "../../../app/services/groups.service";
import { Group } from "../../../../src/app/Model/group.model";
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

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

  @Output() counterChange :  EventEmitter<number>;

  constructor(public groupsService:GroupsService) { 
    this.counterChange = new EventEmitter();
  }

  @Input() 
  get counter(){
      return this.GroupsCount; 
  }
  set counter(val:number){
    this.GroupsCount=val;
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('GroupAdded', (message) => {
            observer.next(message);
        });
    });
}

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

    //   
    //   this.socket.on('GroupAdded', function(groupsCount: any){
    //     console.log("Group count: " + groupsCount);
    //     this.GroupsCount = groupsCount+1;

    //     //this.counterChange.emit(this.GroupsCount);

    //     //this.from.("gCount").setValue(groupsCount);
    //     //this.form.value.gCount=groupsCount;
    //     //this.gCount.value=groupsCount;
    //     //this.form = new FormGroup({
    //      // gCount: new FormControl(null, null)
    //      // });
    
    //     //this.form.setValue({
    //     //  gCount: groupsCount
    //     //});
    //   });   
    // 

   this.getMessages()
   .subscribe((message: string) => {
     this.GroupsCount = parseInt(message);
   });    
  }

  ngOnDestroy() {
    console.log("appComponent ngOnDestroy");
  }  
}
*/