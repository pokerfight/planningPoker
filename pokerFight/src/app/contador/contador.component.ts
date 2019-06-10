import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  minutes: string = '00'
  segundos: number = 30;
  zero: string = '';

  startCounter() {
      setInterval(() => {
        if ((this.segundos - 1) >= 0) {
          this.segundos = this.segundos - 1
        } if (this.segundos < 10) 
          this.zero = '0';
      }, 1000);
    }

  ngOnInit() {
    this.startCounter()
  }

}
