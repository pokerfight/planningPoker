import { Component, OnInit } from '@angular/core';

import { UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _utils : UtilsService) { }

  isHidden : boolean = true;
  participantes: Array<any> = [];
  numberOfparticipantes: number;
  moreCrafters: boolean = true;
  startTimer: boolean = false;

  ngOnInit() {
    this.waitingToGetParticipants();

    this._utils.emitirStatus
      .subscribe( status => {

        console.log(status);
        this.moreCrafters = status.moreCrafters;
        this.startTimer = status.startTimer;
      })
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
