import { Component, OnInit, Inject } from '@angular/core';

import { UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  horas: string = '00';
  minutes: string = '00';
  segundos: number = 30;
  zero: string = '';
  instrucao: string = 'Tempo do round';
  startTimer: boolean = false;

  constructor(private _utils : UtilsService) {}

  startCounter() {
    setInterval(() => {
        if ((this.segundos - 1) >= 0) {
          this.segundos = this.segundos - 1
        } if (this.segundos < 10) 
          this.zero = '0';
      }, 1000);
    }

  ngOnInit() {
    this._utils.emitirStatus.subscribe( status => {
      this.startTimer = status.startTimer;

      if (this.startTimer) {
        this.startCounter();
      }

    })
  }

}
