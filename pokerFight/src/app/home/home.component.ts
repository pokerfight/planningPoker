import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  projectName: string = 'PokerFigth';
  sprintName: string = 'sprint 4';
  buttonName: string = 'X Finalizar';

  numberOfParticipants: number = 0;
  color: boolean = false;
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
    
    if (this.participantes.length === 6) {
      this.color = true;
    }

  }

  getNumberOfPartipantes() {
    this.numberOfParticipants = this.participantes.length
  }

}
