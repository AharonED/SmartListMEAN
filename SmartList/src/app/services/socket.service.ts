/*
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
//import { Message } from '../model/message';
//import { Event } from '../model/event';
import * as socketIo from 'socket.io-client';
const SERVER_URL = 'http://localhost:8080';
@Injectable()
export class SocketService {
  private socket;
  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }
  public send(message: Message): void {
    this.socket.emit('message', message);
  }
  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
      });
  }
  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}*/


import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SocketService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        if (!this.socket) 
            this.socket = io(this.url), {transports: ['websocket']};
    }

    public sendMessage(message) {
        this.socket.emit('GroupAdded', message);
    }

    public getMessages = () => {
        console.log("getMessages");
        return Observable.create((observer) => {
            this.socket.on('GroupAdded', (message) => {
                observer.next(message);
            });
        });
    }

    public closeUserSocket(){
        // Setup the socket namespace subscription
if (!this.socket) {
    // Initialize user permissions socket
    //this.socket = io(NTC_API_URL + `/user/${this.socket.userID}`, { secure: true });
}

    }
}