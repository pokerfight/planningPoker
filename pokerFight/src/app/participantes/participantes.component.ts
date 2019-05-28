import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  constructor() { }

  @Input() participantesLength: number;
  @Input() participantes: Array<any>;
  
  ngOnInit() {
  }

}
