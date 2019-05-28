import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()

export class ChatService{

    private socket = io('http://localhost:3000');

    joinRoom(data)
    {
        this.socket.emit('join', data);
    }

    newUserJoined()
    {
        let observable = new Observable<any>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
}