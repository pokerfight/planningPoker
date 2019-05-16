import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  footerTitle: string = 'Aguardando participantes...'

  changeFooterTitle(){
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('Iniciar');
      }, 2000)
    });

    promise1.then((resultado)=>{
      console.log(resultado)
      this.footerTitle = resultado.toString();
    })
  } 
  

  numberOfParticipants: number = 0;
  color: boolean = false;
  participantes = [
    {name: "Daniel Quirino"},
    {name: "Thiago Nascimento"},
    {name: "Geovanni Mamedes"}
  ]
  

  ngOnInit() {
    this.getNumberOfPartipantes();

    this.changeFooterTitle();
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
