import { Component,OnInit,Input,Output ,ElementRef} from '@angular/core';
import * as express from "express";
import * as socketIo from 'socket.io-client';
//import * as path from "path"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { group } from '@angular/animations';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() socket;
  GroupsCount : number=0;
  form: FormGroup;

  constructor(
//    private elementRef:ElementRef
    ) {
  }
/*
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    var s0 = document.createElement("script");
    //s0.type = "text/javascript";
    s0.src="/socket.io/socket.io.js";
    this.elementRef.nativeElement.appendChild(s0);

    var s = document.createElement("script");
    s.type = "text/javascript";
    var code="  var socket = new io.Socket('localhost',{      port: 3000    });    socket.connect(); ";
    code= code + " console.log('connecting...'); " ;
    code= code + "    socket.on('GroupAdded', function(data) { " ;
    code= code + "     console.log('script:' + data); " ;
    code= code + " document.getElementById('gCount').value =data; " ;
    code= code + " }); " ;
//    code= code + "" ;
    
    s.innerText = code;
    this.elementRef.nativeElement.appendChild(s);
  }
*/
 
  sendMsg() {
    console.log("sending message to server");
    this.socket.emit("message", "HELLO WORLD");
  }

  ngOnInit() {

    this.form = new FormGroup({
      gCount: new FormControl()
   });
    //this.form = new FormGroup({
     // gCount: new FormControl(null, null)
     // });


      this.socket = socketIo(SERVER_URL);
      this.socket.on('message', function(message: any){
        console.log("getting message from server: " + message);
      });
  
      this.socket.on('GroupAdded', function(groupsCount: any){
        console.log("Group count: " + groupsCount);
        this.GroupsCount = groupsCount;
        //this.from.("gCount").setValue(groupsCount);
        this.form.value.gCount=groupsCount;
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
