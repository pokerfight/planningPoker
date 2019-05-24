import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
// import {Observable} from 'rxjs/Observable';

@Injectable()

export class ChatService{

    private socket = io('http://localhost:3000');
}