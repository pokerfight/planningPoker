import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  participantes = [
    {name: "Daniel Quirino"},
    {name: "Thiago Nascimento"},
    {name: "Geovanni Mamedes"}
  ]
  color: boolean = false;

  addParticipants() {
    this.participantes.push({name: "Participante Novo"})
    
    if (this.participantes.length === 6) {
      this.color = true;
    }
  }

}
