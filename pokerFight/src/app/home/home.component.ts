import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isHidden : boolean = true;
  participantes: Array<any> = [];
  participantesLength: number;

  ngOnInit() {
    this.waitingToGetParticipants();
  }

  receiveParticipantes($event) {
    this.participantes = $event;
    this.participantesLength = $event.length;
  }

  waitingToGetParticipants() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(false);
      }, 3000)
    });

    promise.then(()=>{
      this.isHidden = false;
    })
  }
  
}
