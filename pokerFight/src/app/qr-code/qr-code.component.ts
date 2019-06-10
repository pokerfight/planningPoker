
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog} from '@angular/material'

import { DialogSubscriptionComponent } from "../dialogs/dialog-subscription/dialog-subscription.component";
import { IparticipantsData } from '../dialogs/interfaces/IparticipantsData';
import { ChatService} from '../services/chat.service';

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
  userOut :boolean = true;
  participantsData:IparticipantsData = {
    name: '',
    squadName: '',
    _id: ''
  }
  
  constructor(
    private _chatService:ChatService,
    private dialog: MatDialog
  ){
    this.newUserJoined();
  }

  ngOnInit() {
  }

  newUserJoined() {
    this._chatService.newUserJoined()
      .subscribe((data) => {
        this.participantes.push(data.participante)
        this.count = this.count + 1;
      });
  }

  addParticipant() {
    const dialogRef = this.openDialog();

    this.closeDialog(dialogRef);

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogSubscriptionComponent, {
      width: '400px',
      data: {
        name: this.participantsData.name, 
        squadName: this.participantsData.squadName
      }
    })

    return dialogRef;
  }

  closeDialog(dialogRef) {
    dialogRef.afterClosed().subscribe(result => {
      this.participantsData = result;
      console.log(result);

      this.validateIfParticipantAlreadyEntered();
      
    });
  }

  
validateIfParticipantAlreadyEntered() {
  if (this.userOut) {
    this.userOut = false;
    this.preencherParticipantes();
  }
}

  preencherParticipantes() {
    this.participantes.push(this.participantsData.name + ' _id: ' + this.count);
    this.participantesAdd.emit(this.participantes);
    
    this.join();
    
    this.count = this.count + 1;
    this.userOut = false;
  }

  join() {
      this._chatService.joinRoom({
        participante: this.participantes[this.participantes.length-1],
        _id: this.count
    })
  }
}

