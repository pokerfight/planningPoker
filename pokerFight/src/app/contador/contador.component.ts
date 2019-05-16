import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  contador = 10;
  zero = '';

  startCounter() {
      setInterval(() => {
        if ((this.contador - 1) >= 0) {
          this.contador = this.contador - 1
        } if (this.contador < 10) 
          this.zero = '0';
      }, 1000);
    }

  ngOnInit() {
    this.startCounter()
  }

}
