import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHidden : boolean = true;

  constructor() { }

  ngOnInit() {
    this.waitingToGetParticipants();
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
