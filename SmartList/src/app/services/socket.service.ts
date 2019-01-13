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
    SocketService.socket = socketIo(SERVER_URL);
  }
  public send(message: Message): void {
    SocketService.socket.emit('message', message);
  }
  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      SocketService.socket.on('message', (data: Message) => observer.next(data));
      });
  }
  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      SocketService.socket.on(event, () => observer.next());
    });
  }
}*/


import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SocketService {
    private url = 'http://localhost:3000';
    public static socket;

    constructor() {
        if (!SocketService.socket) 
            SocketService.socket = io(this.url), {transports: ['websocket']};
    }

    public sendMessage(message) {
        SocketService.socket.emit('GroupAdded', message);
    }

    public getMessages = () => {
        console.log("getMessages");
        return Observable.create((observer) => {
            SocketService.socket.on('GroupAdded', (message) => {
                observer.next(message);
            });
        });
    }

    public closeUserSocket(){
        // Setup the socket namespace subscription
if (!SocketService.socket) {
    // Initialize user permissions socket
    //SocketService.socket = io(NTC_API_URL + `/user/${SocketService.socket.userID}`, { secure: true });
}

    }
}