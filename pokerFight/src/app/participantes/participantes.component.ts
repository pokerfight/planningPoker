import { ParticipantsService } from './../services/participantes';
import { Component, OnInit, Input } from '@angular/core';
import { ChatService} from '../services/chat.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  participantes = [];

  constructor(private _chatService:ChatService,
    private participantsService: ParticipantsService) { 

    this.participantes = [];

    this.participantsService.getCrafters();
    this.participantsService.getCrafterUpdateListener()
      .subscribe(crafters => {
        if (this.participantes.length) {
          return;
        }
        (crafters || []).forEach(crafter => {
          this.participantes.push(crafter.name + ' - ' + crafter.squad);
        })
      })

    this._chatService.newUserJoined()
    .subscribe((data) => {
      this.participantes.push(data.participante);
    });
  }
  
  ngOnInit() {
  }

}

