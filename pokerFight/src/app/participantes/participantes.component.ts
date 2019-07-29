import { ParticipantsService } from './../services/participantes';
import { Component, OnInit, Input } from '@angular/core';
import { ChatService} from '../services/chat.service';
import { UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  participantes = [];
  craftersInfo = 'Aguardando paricipantes...';
  moreCrafters: boolean = true;

  constructor(
    private _chatService:ChatService,
    private participantsService: ParticipantsService,
    private _utils : UtilsService
  ) { 

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
    this._utils.emitirStatus
      .subscribe( status => {
        this.moreCrafters = status.moreCrafters;
      })
  }

}

