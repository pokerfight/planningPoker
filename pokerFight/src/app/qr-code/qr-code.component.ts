import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  @Output() participantesAdd = new EventEmitter<any>();
  numbers = [4,5,4,8,7] 
  participantes: Array<any> = [];
  count:number = 0;

  constructor(private _chatService:ChatService){
    this._chatService.newUserJoined()
    .subscribe((data) => {
      this.participantes.push(data.participante)
      this.count = this.count + 1;
    });
  }

  ngOnInit() {
  }

  addParticipant() {
    this.preencherParticipantes();
  }

  preencherParticipantes() {
    this.participantes.push(this.count + ' - Participante');
    this.participantesAdd.emit(this.participantes);
    this.join();
    
    this.count = this.count + 1;
  }

  join() {
    this._chatService.joinRoom({participante: this.participantes[this.participantes.length-1]})
  }
}
