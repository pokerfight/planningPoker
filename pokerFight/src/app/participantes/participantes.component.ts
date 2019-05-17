import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  constructor() { }

  numberOfParticipants: number = 0;
 
  participantes = [
    {name: "Daniel Quirino"},
    {name: "Thiago Nascimento"},
    {name: "Geovanni Mamedes"}
  ]

  ngOnInit() {
    this.getNumberOfPartipantes();
  }

  addParticipants() {
    if (this.participantes.length > 5)
      return;

    this.participantes.push({name: "Participante Novo"})
    this.numberOfParticipants = this.participantes.length;
  }

  getNumberOfPartipantes() {
    this.numberOfParticipants = this.participantes.length
  }

}
