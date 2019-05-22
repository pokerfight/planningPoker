import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  constructor() { }

  numberOfParticipants: number = 0;

  preencherParticipante1(){
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('Daniel - Quirino');
      }, 1000)
    });

    promise1.then((resultado)=>{
      console.log(resultado)
      this.addParticipants(resultado);
    })
  }

  preencherParticipante2(){

    let promise2 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('Geovanni - Mamedes');
      }, 2000)
    });

    promise2.then((resultado)=>{
      console.log(resultado)
      this.addParticipants(resultado);
    })
  }

  preencherParticipante3()  {
    let promise3 = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('Thiago - Nascimento');
      }, 3000)
    });

    promise3.then((resultado)=>{
      console.log(resultado)
      this.addParticipants(resultado);
    })
  } 


 
  participantes = []

  ngOnInit() {
    this.getNumberOfPartipantes();
    this.preencherParticipante1();
    this.preencherParticipante2()
    this.preencherParticipante3()
  }

  addParticipants(nome) {
    if (this.participantes.length > 5)
      return;

    this.participantes.push({name: nome})
    this.numberOfParticipants = this.participantes.length;
    this.getNumberOfPartipantes();
  }

  getNumberOfPartipantes() {
    this.numberOfParticipants = this.participantes.length
  }

}
